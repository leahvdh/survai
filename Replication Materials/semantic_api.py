# Elinor Frost
# A file that loops over queries and finds papers from the semantic scholar API

# Most code from https://www.semanticscholar.org/product/api/tutorial

from paper_model import Paper
import requests
import time


survey_terms = [
    "attitude measurement",
    "bot respondent",
    "chatbot survey",
    "cognitive interview",
    "construct validity",
    "coverage error",
    "cross-cultural survey",
    "data representativity",
    "fraudulent respondent",
    "hard to survey",
    "human response",
    "human sample",
    "survey data imputation",
    "item development",
    "longitudinal survey",
    "measurement error",
    "multi-lingual survey",
    "nonresponse",
    "open ended answer",
    "open ended question",
    "open ended response",
    "opinion mining",
    "opinion prediction",
    "panel survey",
    "polling",
    "pretesting",
    "public opinion",
    "public poll",
    "question development",
    "question wording",
    "questionnaire development",
    "questionnaire design",
    "response bias",
    "sampling design",
    "sampling error",
    "sampling frame",
    "scale development",
    "silicon sample",
    "silicon sampling",
    "survey design",
    "survey development",
    "survey error",
    "survey experiment",
    "survey interview",
    "survey invitation",
    "survey item",
    "social desirability",
    "survey data analysis",
    "survey data collection",
    "survey data quality",
    "survey methodology",
    "survey methods",
    "survey question",
    "survey questionnaire",
    "survey recruitment",
    "survey research",
    "survey respondent",
    "survey response",
    "synthetic sample",
    "synthetic sampling",
    "synthetic survey data",
    "text answer",
]

AI_terms = [
    # "AI ethics",
    # "base model",
    "Gemini",
    "GenAI",
    "Generative AI",
    "GPT",
    # "language model",
    "large language model",
    "LLaMA",
    "LLM",
    "Mistral",
    "pre-trained transformer",
    # "prompt construction",
    # "prompt design",
    "prompt engineering",
]

# Define the API endpoint URL
URL = "http://api.semanticscholar.org/graph/v1/paper/search/bulk"
WAIT_TIME = 3


def generate_queries():
    queries = []

    # generate the ending of each query
    ai_query = "(" + " | ".join([f"\"{AI_term}\"" for AI_term in AI_terms]) + ")"

    for survey_term in survey_terms:
        query = f"\"{survey_term}\" {ai_query}"
        queries.append(query)

    return queries


def get_papers():
    # create the queries
    queries = generate_queries()

    # run all queries and collect the paper
    all_query_papers = []
    topics = {}
    for query in queries:
        # get the survey term for this query
        survey_term = query.split("\"")[1].replace(" ", "_")

        # Define the query parameters and run the query
        query_params = {
            "query": query,
            "fields": "title,authors,url,abstract,journal,publicationTypes,year"
        }
        response = requests.get(URL, params=query_params).json()

        # save the results from this query
        retrieved = 0
        query_papers = []

        while True:
            if "data" in response:
                # grab the information about papers
                all_papers = response["data"]
                retrieved += len(all_papers)

                # process the JSON into papers
                for paper_i, paper_data in enumerate(all_papers):
                    paper = Paper(paper_data, query, survey_term, paper_i + 1)
                    query_papers.append(paper)
                    all_query_papers.append(paper)

            # checks for continuation token to get next batch of results
            if "token" not in response:
                break

            # get the next batch of results
            response = requests.get(f"{URL}&token={response['token']}").json()

        print(f"{survey_term} retrieved {retrieved} papers total from Semantic Scholar")

        # save the results for this query for counting later
        topics[survey_term] = query_papers

        # create the BibTeX file for this query
        if len(query_papers) > 0:
            write_to_bibtex(query_papers, survey_term)

        # Wait time between queries
        time.sleep(WAIT_TIME)

    # create the total BibTeX file
    if len(all_query_papers) > 0:
        write_all_to_bibtex(all_query_papers)

    # save the counts for each query
    write_counts(topics)


def write_to_bibtex(query_papers, survey_term):
    with open(f"{survey_term}.SemanticScholar.bib", "w") as file:
        for paper in query_papers[:-1]:
            file.write(paper.to_bibtex() + "\n")

        file.write(query_papers[-1].to_bibtex())


def write_all_to_bibtex(all_query_papers):
    with open(f"SemanticScholar.bib", "w") as file:
        for paper in all_query_papers[:-1]:
            file.write(paper.to_bibtex() + "\n")

        file.write(all_query_papers[-1].to_bibtex())


def write_counts(topics):
    # write the number of papers per query term to file
    with open("SemanticScholar_Counts.csv", "w") as file:
        # write the header
        file.write("Query,Count\n")

        # add each survey term in sorted order
        terms = sorted(list(topics.keys()))
        for query_term in terms:
            papers = topics[query_term]
            file.write(f'{query_term.replace("_", " ")},{len(papers)}\n')


def main():
    get_papers()


if __name__ == "__main__":
    main()
