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

def generate_queries():
    queries = []

    # generate the ending of each query
    ai_query = "(" + " OR ".join([f"\"{AI_term}\"" for AI_term in AI_terms]) + ")"

    for survey_term in survey_terms:
        query = f"ALL=(\"{survey_term}\") AND ALL={ai_query}"
        queries.append(query)

    return queries


def main():
    # create the queries
    queries = generate_queries()

    for survey_term, query in zip(survey_terms, queries):
        print(survey_term.replace(" ", "_") + ".WOS.bib" + "\n" + query + "\n")


if __name__ == '__main__':
    main()
