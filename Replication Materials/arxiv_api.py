# Reefayat Bin Shahjahan
# Program to retrieve papers from arXiv and write them to a tsv file

# Libraries used
import urllib, urllib.request, urllib.parse
import feedparser
from paper_model import Paper
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

BASE_URL = 'http://export.arxiv.org/api/query?'
VERBOSE = False
WAIT_TIME = 3

def generate_queries():
    queries = []

    # generate the ending of each query
    ai_query = "(" + " OR ".join([f"\"{AI_term}\"" for AI_term in AI_terms]) + ")"

    for survey_term in survey_terms:
        query = f"(\"{survey_term}\") AND {ai_query}"
        queries.append(query)

    return queries


def write_to_bibtex(query_papers, survey_term):
    with open(f"{survey_term}.arXiv.bib", "w") as file:
        for paper in query_papers[:-1]:
            file.write(paper.to_bibtex() + "\n")

        file.write(query_papers[-1].to_bibtex())


def write_all_to_bibtex(all_query_papers):
    with open(f"arXiv.bib", "w") as file:
        for paper in all_query_papers[:-1]:
            file.write(paper.to_bibtex() + "\n")

        file.write(all_query_papers[-1].to_bibtex())


def write_counts(topics):
    # write the number of papers per query term to file
    with open("arXiv_Counts.csv", "w") as file:
        # write the header
        file.write("Query,Count\n")

        # add each survey term in sorted order
        terms = sorted(list(topics.keys()))
        for query_term in terms:
            papers = topics[query_term]
            file.write(f'{query_term.replace("_", " ")},{len(papers)}\n')


def main():
    # create the queries
    queries = generate_queries()

    # run all queries and collect the paper
    all_query_papers = []
    topics = {}
    for query in queries:
        # get the survey term for this query
        survey_term = query.split("\"")[1].replace(" ", "_")

        # Formatting the search_query for arxiv
        search_query = f"all:{query}"
        search_query = search_query.replace(" ", "+")
        #search_query = search_query.replace('"', '')
        search_query = search_query.replace("(", "%28")
        search_query = search_query.replace(")", "%29")

        # URL encode the search query
        encoded_query = urllib.parse.quote(search_query)

        start = 0  # Retrieve results starting from this index
        max_results = 10000  # Maximum number of results

        # Construct the query URL
        query = f'search_query={search_query}&start={start}&max_results={max_results}'
        if VERBOSE:
            print(f"Constructed URL: {BASE_URL + query}")

        # Perform a GET request using the base_url and query
        response = urllib.request.urlopen(BASE_URL + query).read()

        # Parse the response using feedparser
        feed = feedparser.parse(response)

        if VERBOSE:
            # Print out feed information
            print(f'Feed title: {feed.feed.title}')
            print(f'Feed last updated: {feed.feed.updated}')

            # Print OpenSearch metadata
            print(f'Total results for this query: {feed.feed.opensearch_totalresults}')
            print(f'Items per page for this query: {feed.feed.opensearch_itemsperpage}')
            print(f'Start index for this query: {feed.feed.opensearch_startindex}')

        # Run through each entry, and print out the information
        query_papers = []
        paper_i = 0
        for entry in feed.entries:
            # create the JSON entry for this paper
            json = {}

            # get the paperId, year, and title
            json["paperId"] = entry.id.split("/abs/")[-1]
            json["published"] = entry.published
            json["year"] = int(entry.published[:4])
            json["title"] = entry.title
            json["publicationTypes"] = ["arXiv"]

            if VERBOSE:
                print('\nE-print metadata:')
                print(f'ArXiv ID: {json["paperId"]}')
                print(f'Published: {json["published"]}')
                print(f'Title: {json["title"]}')

            # get the URL information
            abs_page_link = ''
            pdf_link = ''
            for link in entry.links:
                if link.rel == 'alternate':
                    abs_page_link = link.href
                    json["url"] = link.href

                    if VERBOSE:
                        print(f'Abstract page link: {link.href}')
                elif link.title == 'pdf':
                    pdf_link = link.href
                    json["pdf_url"] = link.href

                    if VERBOSE:
                        print(f'PDF link: {link.href}')

            # get the authors
            json["authors"] = entry.authors

            if VERBOSE:
                # Handle multiple authors, print them all
                try:
                    authors = ', '.join(author.name for author in entry.authors)
                    print(f'Authors: {authors}')
                except AttributeError:
                    print('Authors: No authors found')

            # Handle journal reference, comments, and primary category
            journal = {}
            json["journal"] = journal
            journal["name"] = getattr(entry,
                                           'arxiv_journal_ref',
                                           'arXiv')
            journal["comment"] = getattr(entry,
                                              'arxiv_comment',
                                              'No comment found')
            journal["categories"] = [tag['term'] for tag in entry.tags]

            if VERBOSE:
                print(f'Journal reference: {journal["name"]}')
                print(f'Comments: {journal["comment"]}')
                print(f'All Categories: {", ".join(journal["categories"])}')

            # Print the abstract (summary)
            json["abstract"] = entry.summary

            if VERBOSE:
                print(f'Abstract: {json["abstract"]}')

            # save the paper
            paper = Paper(json, query, survey_term, paper_i + 1)
            query_papers.append(paper)
            all_query_papers.append(paper)
            paper_i += 1

        print(f"{survey_term} retrieved {paper_i} papers total from arXiv")

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


if __name__ == '__main__':
    main()
