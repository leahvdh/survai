# LLMs in Survey and Public Opinion Research
Replication materials and databases for the paper "AI in the Loop!? A Systematic Review of the Use of Large Language Models in Survey and Public Opinion Research" by [Leah von der Heyde](https://scholar.google.com/citations?hl=en&user=iJ9dB-sAAAAJ), [Florian Keusch](https://floriankeusch.weebly.com), [Trent Buskirk](https://scholar.google.com/citations?user=Zym2GDMAAAAJ&hl=en), and [Adam Eck](https://www.cs.oberlin.edu/~aeck/). Preprint available on [OSF](https://doi.org/10.31235/osf.io/eubj4_v1)

> __Abstract:__
> Large Language Models (LLMs) are rapidly transforming the entire pipeline of the survey and public opinion research process. The complexities of LLMs and the magnitude of their anticipated disruption warrant the specific attention of the field, but existing overviews are non-systematic, narrow, or theoretical. In this systematic, comprehensive review of the empirical literature, we investigate how LLMs are used before, during, and after data collection. We conduct a quantitative and qualitative assessment of 136 studies, synthesizing at which tasks, contexts, and research designs LLMs succeed and fail and which applications are underexplored. We find that up until 2025, research has mainly focussed on classifying text data, generating survey data, and developing survey instruments. Although there is a large diversity of possible models and interaction approaches, most research designs apply single models of the GPT family with zero-shot prompting to English-language contexts, putting the generalizability and replicability of individual studies into question. Nevertheless, patterns emerge: Across applications, LLMs perform better when approximating broad, well-represented aggregate patterns than nuanced individual attitudes, topics, or constructs. LLMs can be considered as supporting humans rather than replacing them. Going forward, careful model choices, reporting standards and survey-specific benchmarks would propel the field towards more generalizable use cases. Although the rapid technological development conflicts with rigorous qualitative assessments, survey methodologists are well-positioned to adopt LLMs, which will continue to depend on human-curated input and validation data. With this review, we expand the understanding of the potentials, concerns, and gaps of LLM use in survey and public opinion research, providing a starting point for future innovations.

## Database:

[SurvAI Hub](https://leahvdh.github.io/survai/) presents a searchable database of the reviewed studies.

## Replication Materials:

- `survAI.Rmd` contains the code for reproducing statistics and charts in the paper in R.

- `data_survai.csv` contains the corresponding data, including the quantitative variables of the paper codings.

- `arxiv_api.py`contains the code for searching the arXiv API with the keyword queries.

- `semantic_api.py` contains the code for searching the Semantic Scholar API with the keyword queries.

- `WOS_queries.py` contains the code for generating keyword queries for Web of Science for manually search.

- `paper_model.py` contains the code for transforming the search results into bibtex files.

## Corpora:

- `corpus_1_included.bib` contains the 136 papers included in the systematic review.

- `corpus_2_theoretical.bib` contains the 17 non-empirical papers not included in the review.

- `corpus_3_surveymethods4llms.bib` contains the 61 papers with survey research that could inform LLM research.

- `corpus_4_tools.bib` contains the 38 papers introducing LLM methods that might be transferred to survey and public opinion research in the future.
