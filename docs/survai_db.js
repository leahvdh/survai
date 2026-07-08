// Papers Database — auto-generated from CSV
// Do not edit by hand; re-run csv_to_js.Rmd to regenerate.
// Last generated: 2026-07-08

const PAPERS = [
  {
    "id": "adesina-2024-1",
    "citation": "Adesina, M. T., & Howe, L. (2024). Social media (YouTube) political sentiment multi-label analysis. International Journal of Science and Research Archive. https://doi.org/10.30574/ijsra.2024.12.2.1429",
    "title": "Social media (YouTube) political sentiment multi-label analysis",
    "year": "2024",
    "doi": "https://doi.org/10.30574/ijsra.2024.12.2.1429",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "In an era where presidential elections and political discourse are increasingly digital, understanding public sentiment through online comments becomes crucial. This project explores the relationship between YouTube comments and political preferences, challenging the null hypothesis that asserts no connection between contextless comments and candidate preference. Utilizing various natural language processing (NLP) tools, including Bing-Liu, Vader Sentiments, and Large Language Models (LLMs) like ChatGPT-4, we delve into multi-label sentiment analysis for political figures. Our methodology encompassed a rigorous data collection process from YouTube, leveraging custom scrapers and the computational power of KSU's BEOCAT servers. We navigated through challenges like content limitations and the need for comment sanitization to comply with community guidelines. The study tested different models, including logistic regression and Graph Convolutional Networks (GCNs), against a baseline of Max Label/Zero R classification. Results showed varying degrees of success, with individual label accuracies ranging from moderate to high. However, the overall accuracy of our final model using GCNs stood at 39%, indicating the complexity and difficulty of multi-label classification in political sentiment analysis yet also the success of graph convolutional networks at identifying complex contextless sentiment. This project not only sheds light on the potential of NLP in political analytics but also opens up avenues for future work in real-time sentiment analysis during political events, albeit with ethical considerations. This research contributes to the growing field of NLP implementation in public opinion analysis, with implications extending beyond politics into other consumer-centric industries."
  },
  {
    "id": "adhikari-2025-2",
    "citation": "Adhikari, D. M., Cannanure, V. K., Hartland, A., & Weber, I. (2025). Exploring LLMs for Automated Pre-Testing of Cross-Cultural Surveys (2501.05985). arXiv. https://doi.org/10.48550/arXiv.2501.05985",
    "title": "Exploring LLMs for Automated Pre-Testing of Cross-Cultural Surveys",
    "year": "2025",
    "doi": "https://doi.org/10.48550/arXiv.2501.05985",
    "publication_type": "Preprint",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development",
      "pretesting"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "South Africa"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Designing culturally relevant questionnaires for ICTD research is challenging, particularly when adapting surveys for populations to non-western contexts. Prior work adapted questionnaires through expert reviews and pilot studies, which are resource-intensive and time-consuming. To address these challenges, we propose using large language models (LLMs) to automate the questionnaire pretesting process in cross-cultural settings. Our study used LLMs to adapt a U.S.-focused climate opinion survey for a South African audience. We then tested the adapted questionnaire with 116 South African participants via Prolific, asking them to provide feedback on both versions. Participants perceived the LLM-adapted questions as slightly more favorable than the traditional version. Our note opens discussions on the potential role of LLMs in adapting surveys and facilitating cross-cultural questionnaire design."
  },
  {
    "id": "aleksandric-2024-4",
    "citation": "Aleksandric, A., Anderson, H. I., Dangal, A., Wilson, G. M., & Nilizadeh, S. (2024). Analyzing the Stance of Facebook Posts on Abortion Considering State-Level Health and Social Compositions. Proceedings of the International AAAI Conference on Web and Social Media, 18, 15–28. https://doi.org/10.1609/icwsm.v18i1.31294",
    "title": "Analyzing the Stance of Facebook Posts on Abortion Considering State-Level Health and Social Compositions",
    "year": "2024",
    "doi": "https://doi.org/10.1609/icwsm.v18i1.31294",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "XLNet",
      "BERT"
    ],
    "llm": "RoBERTa, XLnet",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Abortion remains one of the most controversial topics, especially after overturning the Roe v. Wade ruling in the United States. Previous literature showed that the illegality of abortion could have serious consequences, as women might seek unsafe pregnancy terminations, leading to increased maternal mortality rates and negative effects on their reproductive health. Therefore, the stances of the abortionrelated Facebook posts were analyzed at the state level in the United States from May 4 until June 30, 2022, right after the Supreme Court’s decision was disclosed. In more detail, a pre-trained Transformer architecture-based model was finetuned on a manually labeled training set to obtain a stance detection model suitable for the collected dataset. Afterward, we employed appropriate statistical tests to examine the relationships between public opinion regarding abortion, abortion legality, political leaning, and factors measuring the overall population’s health, health knowledge, and vulnerability per state. We found that infant mortality rate, political affiliation, abortion rates, and abortion legality are associated with stances toward abortion at the state level in the US. While aligned with existing literature, these findings indicate how public opinion, laws, and women’s and infants’ health are related, as well as how these relationships can be demonstrated by using social media data."
  },
  {
    "id": "alkhalil-2024-5",
    "citation": "Alkhalil, B. F., Yu, Z., Mursi, K. T., & Aseeri, A. O. (2024). Uncovering the Key Factors of Consumer Trust in E-Commerce: A Comprehensive Study of Review-Based Factor Extraction Using GPT-Based Model. 2024 IEEE 3rd International Conference on Computing and Machine Intelligence (ICMI), 1–7. https://doi.org/10.1109/ICMI60790.2024.10585824",
    "title": "Uncovering the Key Factors of Consumer Trust in E-Commerce: A Comprehensive Study of Review-Based Factor Extraction Using GPT-Based Model",
    "year": "2024",
    "doi": "https://doi.org/10.1109/ICMI60790.2024.10585824",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "consumer research"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "reviews"
    ],
    "abstract": "Online reviews have become a critical source of information for businesses to understand customer sentiment. In this study, a subset of 1,499 reviews was analyzed to identify factors that influence consumer trust. The research methodology used a GPT-based model to extract factors affecting consumer trust, and its reliability and trustworthiness were evaluated by comparing it with reviewers' judgments for each customer review. Our findings revealed that various factors significantly impact consumer evaluations and trust, with product quality being the most critical factor, followed by satisfaction with Size/Fit. Our study sheds light on the effectiveness and validity of GPT-based models in opinion mining, which can help businesses better understand consumer sentiments. By recognizing the dynamic nature of consumer feedback, businesses can improve their products, services, and consumer trust."
  },
  {
    "id": "alkhamissi-2024-6",
    "citation": "AlKhamissi, B., ElNokrashy, M., AlKhamissi, M., & Diab, M. (2024). Investigating Cultural Alignment of Large Language Models. arXiv. https://doi.org/10.48550/arXiv.2402.13231",
    "title": "Investigating Cultural Alignment of Large Language Models",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2402.13231",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Llama"
    ],
    "llm": "AceGPT 13B, GPT-3.5, Llama-2 13B, MT0-XXL",
    "interaction_approach": [
      "zero-shot",
      "fine-tuning"
    ],
    "language": [
      "English",
      "Arabic"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "The intricate relationship between language and culture has long been a subject of exploration within the realm of linguistic anthropology. Large Language Models (LLMs), promoted as repositories of collective human knowledge, raise a pivotal question: do these models genuinely encapsulate the diverse knowledge adopted by different cultures? Our study reveals that these models demonstrate greater cultural alignment along two dimensions – firstly, when prompted with the dominant language of a specific culture, and secondly, when pretrained with a refined mixture of languages employed by that culture. We quantify cultural alignment by simulating sociological surveys, comparing model responses to those of actual survey participants as references. Specifically, we replicate a survey conducted in various regions of Egypt and the United States through prompting LLMs with different pretraining data mixtures in both Arabic and English with the personas of the real respondents and the survey questions. Further analysis reveals that misalignment becomes more pronounced for underrepresented personas and for culturally sensitive topics, such as those probing social values. Finally, we introduce Anthropological Prompting, a novel method leveraging anthropological reasoning to enhance cultural alignment. Our study emphasizes the necessity for a more balanced multilingual pretraining dataset to better represent the diversity of human experience and the plurality of different cultures with many implications on the topic of cross-lingual transfer."
  },
  {
    "id": "allamong-2025-7",
    "citation": "Allamong, M. B., Jeong, J., & Kellstedt, P. M. (2025). Spelling correction with large language models to reduce measurement error in open-ended survey responses. RESEARCH & POLITICS, 12(1). https://doi.org/10.1177/20531680241311510",
    "title": "Spelling correction with large language models to reduce measurement error in open-ended survey responses",
    "year": "2025",
    "doi": "https://doi.org/10.1177/20531680241311510",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "pre-processing"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "Open-ended survey questions have a long history in public opinion research and are seeing a renewed interest as computing power and tools of text analysis proliferate. A major challenge in performing text analyses on open-ended responses is that the documents-especially if transcribed or collected through web surveys-may contain measurement error in the form of misspellings which are not easily corrected in a reliable and systematic manner. This paper provides evidence that large language models (LLMs), specifically OpenAI's GPT-4o, offer a flexible, dependable, and low-cost solution to correcting misspellings in open-ended responses. We demonstrate the efficacy of this approach with open-ended responses about the Democratic and Republican parties from the 1996-2020 American National Election Studies, where GPT is shown to correct 85%-90% of misspellings identified by human coders in a sample of responses. Following spelling correction on similar to 50,000 responses, we document several consequential changes to the data. First, we show that spelling correction reduces the number of unique and single-use tokens while increasing the number of words matched to a sentiment dictionary. Then, to highlight the potential benefits and limitations of spelling correction we show improved out-of-sample prediction accuracy from a text-based machine learning classifier. Finally, we show a significantly larger degree of emotionality is captured in the spelling-corrected texts, though the size of this measure's relationship with a known correlate in political interest remains relatively unchanged. Our findings point to LLMs as an effective tool for reducing measurement error by correcting misspellings in open-ended survey responses."
  },
  {
    "id": "alsalem-2024-8",
    "citation": "Alsalem, A. Y., & Abudalfa, S. I. (2024). Empirical Analysis for Arabic Target-Dependent Sentiment Classification Using LLMs. 2024 International Conference on Innovation and Intelligence for Informatics, Computing, and Technologies (3ICT), 170–176. https://doi.org/10.1109/3ict64318.2024.10824564",
    "title": "Empirical Analysis for Arabic Target-Dependent Sentiment Classification Using LLMs",
    "year": "2024",
    "doi": "https://doi.org/10.1109/3ict64318.2024.10824564",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "BERT, DeBERTa, Arabic-MARBERT, AraBERT, ArabianGPT-0.3B-QA, GPT-2",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "Arabic"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "This work aims to develop a valuable tool for understanding sentiments on specific topics in the Arabic language. Currently, most sentiment analysis research focuses on social media platforms like X (formerly known as Twitter), which provide a rich source of information and opinions but lack the precise tools required for accurate Arabic sentiment analysis. This limitation has hindered the development of a reliable and robust sentiment analysis model for Arabic. To address this challenge, we present a technique that emphasizes target-based sentiment classification using an advanced approach based on a Large Language Model (LLM). The presented model is trained on the AT-ODTSA dataset. This dataset includes manually classified Arabic tweets along with identified topics (targets) and sentiments. By leveraging this dataset, our work shows enhancement with the sentiment classification for Arabic tweets. The presented technique achieved a classification accuracy of 0.76 for target-independent sentiment classification and 0.77 to classify sentiment dependent on a target. The method that is being offered uses a fine-tuned version of the Arabic-MARBERT-sentiment model. Our work is expected to contribute to a deeper and more accurate understanding of public opinions on specific topics in the Arab world."
  },
  {
    "id": "argyle-2023-9",
    "citation": "Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023). Out of One, Many: Using Language Models to Simulate Human Samples. Political Analysis, 31(3), 337–351. https://doi.org/10.1017/pan.2023.2",
    "title": "Out of One, Many: Using Language Models to Simulate Human Samples",
    "year": "2023",
    "doi": "https://doi.org/10.1017/pan.2023.2",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "We propose and explore the possibility that language models can be studied as effective proxies for specific human subpopulations in social science research. Practical and research applications of artificial intelligence tools have sometimes been limited by problematic biases (such as racism or sexism), which are often treated as uniform properties of the models. We show that the “algorithmic bias” within one such tool—the GPT-3 language model—is instead both fine-grained and demographically correlated, meaning that proper conditioning will cause it to accurately emulate response distributions from a wide variety of human subgroups. We term this property algorithmic fidelity and explore its extent in GPT-3. We create “silicon samples” by conditioning the model on thousands of sociodemographic backstories from real human participants in multiple large surveys conducted in the United States. We then compare the silicon and human samples to demonstrate that the information contained in GPT-3 goes far beyond surface similarity. It is nuanced, multifaceted, and reflects the complex interplay between ideas, attitudes, and sociocultural context that characterize human attitudes. We suggest that language models with sufficient algorithmic fidelity thus constitute a novel and powerful tool to advance understanding of humans and society across a variety of disciplines."
  },
  {
    "id": "arnold-2023-10",
    "citation": "Arnold, M. V., Dodds, P. S., & Danforth, C. M. (2023). Curating corpora with classifiers: A case study of clean energy sentiment online. https://doi.org/10.48550/arXiv.2305.03092",
    "title": "Curating corpora with classifiers: A case study of clean energy sentiment online",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2305.03092",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "e5",
      "BERT"
    ],
    "llm": "DistilRoBERTa, MiniLM, MPNet",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Well curated, large-scale corpora of social media posts containing broad public opinion offer an alternative data source to complement traditional surveys. While surveys are effective at collecting representative samples and are capable of achieving high accuracy, they can be both expensive to run and lag public opinion by days or weeks. Both of these drawbacks could be overcome with a real-time, high volume data stream and fast analysis pipeline. A central challenge in orchestrating such a data pipeline is devising an effective method for rapidly selecting the best corpus of relevant documents for analysis. Querying with keywords alone often includes irrelevant documents that are not easily disambiguated with bag-of-words natural language processing methods. Here, we explore methods of corpus curation to filter irrelevant tweets using pre-trained transformer-based models, fine-tuned for our binary classification task on hand-labeled tweets. We are able to achieve F1 scores of up to 0.95. The low cost and high performance of fine-tuning such a model suggests that our approach could be of broad benefit as a pre-processing step for social media datasets with uncertain corpus boundaries."
  },
  {
    "id": "ashwin-2023-11",
    "citation": "Ashwin, J., Chhabra, A., & Rao, V. (2023). Using Large Language Models for Qualitative Analysis can Introduce Serious Bias. https://doi.org/10.48550/arXiv.2309.17147",
    "title": "Using Large Language Models for Qualitative Analysis can Introduce Serious Bias",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2309.17147",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "Llama"
    ],
    "llm": "GPT-3.5-Turbo, Llama-2 13B + Chat",
    "interaction_approach": [
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Large Language Models (LLMs) are quickly becoming ubiquitous, but the implications for social science research are not yet well understood. This paper asks whether LLMs can help us analyse large-N qualitative data from open-ended interviews, with an application to transcripts of interviews with Rohingya refugees in Cox's Bazaar, Bangladesh. We find that a great deal of caution is needed in using LLMs to annotate text as there is a risk of introducing biases that can lead to misleading inferences. We here mean bias in the technical sense, that the errors that LLMs make in annotating interview transcripts are not random with respect to the characteristics of the interview subjects. Training simpler supervised models on high-quality human annotations with flexible coding leads to less measurement error and bias than LLM annotations. Therefore, given that some high quality annotations are necessary in order to asses whether an LLM introduces bias, we argue that it is probably preferable to train a bespoke model on these annotations than it is to use an LLM for annotation."
  },
  {
    "id": "barends-2024-12",
    "citation": "Barends, A. J., & Vries, R. E. de. (2024). Developing and Improving Personality Inventories Using Generative Artificial Intelligence: The Psychometric Properties of a Short HEXACO Scale Developed Using ChatGPT 4.0. Journal of Personality Assessment, 1–7. https://doi.org/10.1080/00223891.2024.2444454",
    "title": "Developing and Improving Personality Inventories Using Generative Artificial Intelligence: The Psychometric Properties of a Short HEXACO Scale Developed Using ChatGPT 4.0.",
    "year": "2024",
    "doi": "https://doi.org/10.1080/00223891.2024.2444454",
    "publication_type": "Journal Article",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English",
      "Dutch"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "In the current study, we investigated the utility of generative AI for survey development and improvement. To do so, we generated a 24-item HEXACO personality inventory using ChatGPT 4.0, the ChatGPT HEXACO inventory (CHI), and investigated whether ChatGPT could modify the CHI to either improve its internal consistency or its content validity. Additionally, we compared the psychometric properties of the different versions of the CHI to a conceptually similar short personality inventory. Specifically, we compared the three CHI versions with the Brief HEXACO inventory (BHI) in terms of their alpha reliabilities and their convergent and discriminant correlations with the HEXACO-60 and criterion-related validity with authoritarianism and social dominance orientation. Participants (N = 682) completed the BHI and HEXACO-60 and were randomly assigned to complete one of the three CHI versions. The results showed generally comparable psychometric properties of the three CHI versions and the BHI. However, ChatGPT could not improve specific psychometric properties of the CHI. That is, although the results show promise for the use of ChatGPT in developing questionnaires, it may not offer a shortcut to further improve specific psychometric properties."
  },
  {
    "id": "bayazed-2024-13",
    "citation": "Bayazed, A. A., Almagrabi, H., Alahmadi, D., & Alghamdi, H. (2024). ACOM: Arabic Comparative Opinion Mining in Social Media Utilizing Word Embedding, Deep Learning Model, & LLM-GPT. IEEE Access, 12, 148741–148755. https://doi.org/10.1109/ACCESS.2024.3476336",
    "title": "ACOM: Arabic Comparative Opinion Mining in Social Media Utilizing Word Embedding, Deep Learning Model, & LLM-GPT",
    "year": "2024",
    "doi": "https://doi.org/10.1109%2FACCESS.2024.3476336",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "consumer research"
    ],
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "BERT, GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot"
    ],
    "language": [
      "Arabic"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Reliance on social networks has become an integral part of modern daily activities. Social networks are crowded with vast numbers of comments, opinions, and beliefs about different aspects of people’s daily lives. Opinions can directly express positive or negative perspectives toward a specific entity or its aspects, or they can be comparative opinions that present the differences or similarities between two or more entities, such as “product A is better than product B.” Comparative opinions have significant potential to offer new opportunities across various fields such as marketing, education, and e-commerce. Thus, analyzing comparative opinions is essential. Indeed, comparative opinion mining has been applied in several languages, including Arabic. Nevertheless, comparative opinion mining in Arabic is still in its early stages and requires more contributions and investigations. Therefore, this work introduces the ACOM approach for Arabic Comparative Opinion Mining. First, we collected the ACOM corpus in Arabic from the X platform, focusing on comparative opinions in the technology domain. This paper provides a benchmark comparison of several deep-learning models by employing different approaches, including Long Short-Term Memory (LSTM), Bidirectional LSTMs (BiLSTM), and Convolutional Neural Networks (CNN). In the deep learning model, the generated representation vector was used to construct the embedding layer as the first layer. To this end, we adopted two pretrained word embedding techniques to investigate their effectiveness on the ACOM corpus: Word2vec and Bidirectional Encoder Representations from Transformers (BERT). The main highlight of this paper is leveraging the most advanced innovation in AI, the GPT-3 model, as a classifier model. Our experimental results show that BERT and BiLSTM achieved impressive performance on the ACOM task with 91% accuracy and a 90% F1-score. Additionally, this paper discusses the impact of fine-tuning specific hyperparameters by providing a comprehensive examination."
  },
  {
    "id": "bedemariam-2025-14",
    "citation": "Bedemariam, R., Perez, N., Bhaduri, S., Kapoor, S., Gil, A., Conjar, E., Itoku, I., Theil, D., Chadha, A., & Nayyar, N. (2025). Potential and Perils of Large Language Models as Judges of Unstructured Textual Data. https://doi.org/10.48550/arXiv.2501.08167",
    "title": "Potential and Perils of Large Language Models as Judges of Unstructured Textual Data",
    "year": "2025",
    "doi": "https://doi.org/10.48550/arXiv.2501.08167",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "Llama",
      "Claude"
    ],
    "llm": "Claude-2.1, Claude-3.5, Nova Pro, Titan Express",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "open-ends"
    ],
    "abstract": "Rapid advancements in large language models have unlocked remarkable capabilities when it comes to processing and summarizing unstructured text data. This has implications for the analysis of rich, open-ended datasets, such as survey responses, where LLMs hold the promise of efficiently distilling key themes and sentiments. However, as organizations increasingly turn to these powerful AI systems to make sense of textual feedback, a critical question arises, can we trust LLMs to accurately represent the perspectives contained within these text based datasets? While LLMs excel at generating human-like summaries, there is a risk that their outputs may inadvertently diverge from the true substance of the original responses. Discrepancies between the LLM-generated outputs and the actual themes present in the data could lead to flawed decision-making, with far-reaching consequences for organizations. This research investigates the effectiveness of LLM-as-judge models to evaluate the thematic alignment of summaries generated by other LLMs. We utilized an Anthropic Claude model to generate thematic summaries from open-ended survey responses, with Amazon's Titan Express, Nova Pro, and Meta's Llama serving as judges. This LLM-as-judge approach was compared to human evaluations using Cohen's kappa, Spearman's rho, and Krippendorff's alpha, validating a scalable alternative to traditional human centric evaluation methods. Our findings reveal that while LLM-as-judge offer a scalable solution comparable to human raters, humans may still excel at detecting subtle, context-specific nuances. Our research contributes to the growing body of knowledge on AI assisted text analysis. Further, we provide recommendations for future research, emphasizing the need for careful consideration when generalizing LLM-as-judge models across various contexts and use cases."
  },
  {
    "id": "bisbee-2024-15",
    "citation": "Bisbee, J., Clinton, J. D., Dorff, C., Kenkel, B., & Larson, J. M. (2024). Synthetic Replacements for Human Survey Data? The Perils of Large Language Models. Political Analysis, 1–16. https://doi.org/10.1017/pan.2024.5",
    "title": "Synthetic Replacements for Human Survey Data? The Perils of Large Language Models",
    "year": "2024",
    "doi": "https://www.doi.org/10.1017/pan.2024.5",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo; robustness checks with ChatGPT 4.0 and Falcon-40B-Instruct.",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Large language models (LLMs) offer new research possibilities for social scientists, but their potential as “synthetic data” is still largely unknown. In this paper, we investigate how accurately the popular LLM ChatGPT can recover public opinion, prompting the LLM to adopt different “personas” and then provide feeling thermometer scores for 11 sociopolitical groups. The average scores generated by ChatGPT correspond closely to the averages in our baseline survey, the 2016–2020 American National Election Study (ANES). Nevertheless, sampling by ChatGPT is not reliable for statistical inference: there is less variation in responses than in the real surveys, and regression coefficients often differ significantly from equivalent estimates obtained using ANES data. We also document how the distribution of synthetic responses varies with minor changes in prompt wording, and we show how the same prompt yields significantly different results over a 3-month period. Altogether, our findings raise serious concerns about the quality, reliability, and reproducibility of synthetic survey data generated by LLMs."
  },
  {
    "id": "bradshaw-2024-16",
    "citation": "Bradshaw, C., Miller, C., & Warnick, S. (2024). LLM Generated Distribution-Based Prediction of US Electoral Results, Part I. arXiv. https://doi.org/10.48550/arXiv.2411.03486",
    "title": "LLM Generated Distribution-Based Prediction of US Electoral Results, Part I",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2411.03486",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "Llama"
    ],
    "llm": "Llama-3.2",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "Other"
    ],
    "abstract": "This paper introduces distribution-based prediction, a novel approach to using Large Language Models (LLMs) as predictive tools by interpreting output token probabilities as distributions representing the models' learned representation of the world. This distribution-based nature offers an alternative perspective for analyzing algorithmic fidelity, complementing the approach used in silicon sampling. We demonstrate the use of distribution-based prediction in the context of recent United States presidential election, showing that this method can be used to determine task specific bias, prompt noise, and algorithmic fidelity. This approach has significant implications for assessing the reliability and increasing transparency of LLM-based predictions across various domains."
  },
  {
    "id": "burstein-2024-17",
    "citation": "Burstein, R., Mafuta, E., & Proctor, J. L. (2024). LLMs for analyzing open text in global health surveys: Why children are not accessing vaccine services in DRC (p. 2024.11.14.24317253). medRxiv. https://doi.org/10.1101/2024.11.14.24317253",
    "title": "LLMs for analyzing open text in global health surveys: why children are not accessing vaccine services in DRC",
    "year": "2024",
    "doi": "https://doi.org/10.1101/2024.11.14.24317253",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "English",
      "French"
    ],
    "population": [
      "Congo"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "This study evaluates the use of large language models (LLMs) to analyze free-text responses from large-scale global health surveys, using data from the Enquête de Couverture Vaccinale (ECV) household coverage surveys from 2020, 2021, 2022, and 2023 as a case study. We tested several LLM approaches varying from zero-shot and few-shot prompting, fine-tuning, and a natural language processing approach using semantic embeddings to analyze responses on reasons caregivers did not vaccinate their children. Performance ranged from 61.5% to 96% based on testing against a curated benchmarking dataset drawn from the ECV surveys, with accuracy improving when LLM models were fine-tuned or provided examples for few-shot learning. We show that even with as few as 20–100 examples, LLMs can achieve high accuracy in categorizing free-text responses. This approach offers significant opportunities for reanalyzing existing datasets and designing surveys with more open-ended questions, providing a scalable, cost-effective solution for global health organizations. Despite challenges with closed-source models and computational costs, the study underscores LLMs’ potential to enhance data analysis and inform global health policy."
  },
  {
    "id": "cao-2024-18",
    "citation": "Cao, X., & Kosinski, M. (2024). Large language models and humans converge in judging public figures’ personalities. PNAS Nexus, 3(10). https://doi.org/10.1093/pnasnexus/pgae418",
    "title": "Large language models and humans converge in judging public figures’ personalities",
    "year": "2024",
    "doi": "https://doi.org/10.1093/pnasnexus/pgae418",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "ChatGPT-4 and 600 human raters evaluated 226 public figures’ personalities using the Ten-Item Personality Inventory. The correlation between ChatGPT-4 and aggregate human ratings ranged from r = 0.76 to 0.87, outperforming the models specifically trained to make such predictions. Notably, the model was not provided with any training data or feedback on its performance. We discuss the potential explanations and practical implications of ChatGPT-4's ability to mimic human responses accurately."
  },
  {
    "id": "cerina-2023-19",
    "citation": "Cerina, R., & Duch, R. (2023). Artificially Intelligent Opinion Polling. arXiv. https://doi.org/10.48550/arXiv.2309.06029",
    "title": "Artificially Intelligent Opinion Polling",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2309.06029",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification",
      "imputation"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English",
      "Spanish"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media",
      "survey"
    ],
    "abstract": "We seek to democratise public-opinion research by providing practitioners with a general methodology to make representative inference from cheap, high-frequency, highly unrepresentative samples. To this end, we provide two major contributions: 1) we introduce a general sample-selection process which we name online selection, and show it is a special-case of selection on the dependent variable. We improve MrP for severely biased samples by introducing a bias-correction term in the style of King & Zeng to the logistic-regression framework. We show this bias-corrected model outperforms traditional MrP under online selection, and achieves performance similar to random-sampling in a vast array of scenarios; 2) we present a protocol to use Large Language Models (LLMs) to extract structured, survey-like data from social-media. We provide a prompt-style that can be easily adapted to a variety of survey designs. We show that LLMs agree with human raters with respect to the demographic, socio-economic and political characteristics of these online users. The end-to-end implementation takes unrepresentative, unsrtuctured social media data as inputs, and produces timely high-quality area-level estimates as outputs. This is Artificially Intelligent Opinion Polling. We show that our AI polling estimates of the 2020 election are highly accurate, on-par with estimates produced by state-level polling aggregators such as FiveThirtyEight, or from MrP models fit to extremely expensive high-quality samples."
  },
  {
    "id": "cho-2024-21",
    "citation": "Cho, S., Kim, J., & Kim, J. (2024). LLM-Based Doppelgänger Models: Leveraging Synthetic Data for Human-Like Responses in Survey Simulations. IEEE Access, 12, 178917–178927. https://doi.org/10.1109/ACCESS.2024.3502219",
    "title": "LLM-Based Doppelgänger Models: Leveraging Synthetic Data for Human-Like Responses in Survey Simulations",
    "year": "2024",
    "doi": "https://doi.org/10.1109%2FACCESS.2024.3502219",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion",
      "education",
      "HR"
    ],
    "llm_family": [
      "Llama"
    ],
    "llm": "Llama-3 8B (benchmark: GPT3.5 Turbo, Gemini-1.0-Pro, Gemini-1.5-Pro)",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "Korean"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "This study explores whether large language models (LLMs) can learn a person’s opinions from their speech and act based on that knowledge. It also proposes the potential for utilizing such trained models in survey research. Traditional survey research collects information through standardized questions. However, surveys require repeated administration with new participants each time, which involves significant costs and time. With the recent advancements in LLMs, artificial intelligence (AI) has shown remarkable capabilities, often surpassing humans in tasks that require natural language understanding (NLU) and natural language generation (NLG). Despite this, research on whether AI can replicate human thought processes in tasks such as text interpretation or question-answering remains insufficient. This study proposes a Surveyed LLM, specialized for survey tasks, and a Doppelganger LLM that mimics human thought processes. It tests to what extent the Doppelganger model can replicate human judgment. Furthermore, it suggests the possibility of mimicking not only group distributions but also individual opinions."
  },
  {
    "id": "chopra-2023-22",
    "citation": "Chopra, F., & Haaland, I. (2023). Conducting Qualitative Interviews with AI. Social Science Research Network. https://doi.org/10.2139/ssrn.4572954",
    "title": "Conducting Qualitative Interviews with AI",
    "year": "2023",
    "doi": "https://dx.doi.org/10.2139/ssrn.4572954",
    "publication_type": "Preprint",
    "phase": [
      "data collection",
      "post-data collection"
    ],
    "task": [
      "interviewing",
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "economics",
      "finance"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": null,
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Qualitative interviews are one of the fundamental tools of empirical social science research and give individuals the opportunity to explain how they understand and interpret the world, allowing researchers to capture detailed and nuanced insights into complex phenomena. However, qualitative interviews are seldom used in economics and other disciplines inclined toward quantitative data analysis, likely due to concerns about limited scalability, high costs, and low generalizability. In this paper, we introduce an AI-assisted method to conduct semi-structured interviews. This approach retains the depth of traditional qualitative research while enabling large-scale, cost-effective data collection suitable for quantitative analysis. We demonstrate the feasibility of this approach through a large-scale data collection to understand the stock market participation puzzle. Our 395 interviews allow for quantitative analysis that we demonstrate yields richer and more robust conclusions compared to qualitative interviews with traditional sample sizes as well as to survey responses to a single open-ended question. We also demonstrate high interviewee satisfaction with the AI-assisted interviews. In fact, a majority of respondents indicate a strict preference for AI-assisted interviews over human-led interviews. Our novel AI-assisted approach bridges the divide between qualitative and quantitative data analysis and substantially lowers the barriers and costs of conducting qualitative interviews at scale."
  },
  {
    "id": "chu-2024-25",
    "citation": "Chu, M. D., He, Z., Dorn, R., & Lerman, K. (2024). Large Language Models Help Reveal Unhealthy Diet and Body Concerns in Online Eating Disorders Communities. arXiv. https://doi.org/10.48550/arXiv.2401.09647",
    "title": "Large Language Models Help Reveal Unhealthy Diet and Body Concerns in Online Eating Disorders Communities",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2401.09647",
    "publication_type": "Preprint",
    "phase": [
      "data collection",
      "post-data collection"
    ],
    "task": [
      "data generation",
      "classification"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT",
      "Llama",
      "BERT"
    ],
    "llm": "BERT, GPT-4, Llama-3",
    "interaction_approach": [
      "zero-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Eating disorders (ED), a severe mental health condition with high rates of mortality and morbidity, affect millions of people globally, especially adolescents. The proliferation of online communities that promote and normalize ED has been linked to this public health crisis. However, identifying harmful communities is challenging due to the use of coded language and other obfuscations. To address this challenge, we propose a novel framework to surface implicit attitudes of online communities by adapting large language models (LLMs) to the language of the community. We describe an alignment method and evaluate results along multiple dimensions of semantics and affect. We then use the community-aligned LLM to respond to psychometric questionnaires designed to identify ED in individuals. We demonstrate that LLMs can effectively adopt community-specific perspectives and reveal significant variations in eating disorder risks in different online communities. These findings highlight the utility of LLMs to reveal implicit attitudes and collective mindsets of communities, offering new tools for mitigating harmful content on social media."
  },
  {
    "id": "cruickshank-2024-26",
    "citation": "Cruickshank, I. J., Soofi, A., & Ng, L. H. X. (2024). DIVERSE: A Dataset of YouTube Video Comment Stances with a Data Programming Model. 2403.03334v3. https://doi.org/10.1109/BigData62323.2024.10825480",
    "title": "DIVERSE: A Dataset of YouTube Video Comment Stances with a Data Programming Model",
    "year": "2024",
    "doi": "https://doi.org/10.1109/BigData62323.2024.10825480",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "Llama",
      "Mistral",
      "BERT"
    ],
    "llm": "BERT, Llama-3 8B, Mistral 7B, Flan-UL2",
    "interaction_approach": [
      "zero-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Public opinion of military organizations significantly influences their ability to recruit talented individuals. As recruitment efforts increasingly extend into digital spaces like social media, it becomes essential to assess the stance of social media users toward online military content. However, there is a notable lack of data for analyzing opinions on military recruiting efforts online, compounded by challenges in stance labeling, which is crucial for understanding public perceptions. Despite the importance of stance analysis for successful online military recruitment, creating human-annotated, in-domain stance labels is resource-intensive. In this paper, we address both the challenges of stance labeling and the scarcity of data on public opinions of online military recruitment by introducing and releasing the DIVERSE dataset: https://doi.org/10.5281/zenodo.10493803. This dataset comprises all comments from the U.S. Army's official YouTube Channel videos. We employed a state-of-the-art weak supervision approach, leveraging large language models to label the stance of each comment toward its respective video and the U.S. Army. Our findings indicate that the U.S. Army's videos began attracting a significant number of comments post-2021, with the stance distribution generally balanced among supportive, oppositional, and neutral comments, with a slight skew towards oppositional versus supportive comments."
  },
  {
    "id": "cuevas-2023-27",
    "citation": "Cuevas, A., Brown, E. M., Scurrell, J. V., Entenmann, J., & Daepp, M. I. G. (2023). Automated Interviewer or Augmented Survey? Collecting Social Data with Large Language Models. arXiv. https://doi.org/10.48550/arXiv.2309.10187",
    "title": "Automated Interviewer or Augmented Survey? Collecting Social Data with Large Language Models",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2309.10187",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "interviewing"
    ],
    "silicon_sampling": null,
    "domain": [
      "HCI"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo, GPT-4",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Qualitative methods like interviews produce richer data in comparison with quantitative surveys, but are difficult to scale. Switching from web-based questionnaires to interactive chatbots offers a compromise, improving user engagement and response quality. Uptake remains limited, however, because of differences in users' expectations versus the capabilities of natural language processing methods. In this study, we evaluate the potential of large language models (LLMs) to support an information elicitation chatbot that narrows this \"gulf of expectations\" (Luger & Sellen 2016). We conduct a user study in which participants (N = 399) were randomly assigned to interact with a rule-based chatbot versus one of two LLM-augmented chatbots. We observe limited evidence of differences in user engagement or response richness between conditions. However, the addition of LLM-based dynamic probing skills produces significant improvements in both quantitative and qualitative measures of user experience, consistent with a narrowing of the expectations gulf."
  },
  {
    "id": "cui-2024-28",
    "citation": "Cui, C., Abdalla, A., Wijaya, D., Solberg, S., & Bargal, S. A. (2024). Large Language Models for Career Readiness Prediction. In A. Olney, I. Chounta, Z. Liu, O. Santos, & I. Bittencourt (Eds.), Artificial Intelligence in Education. Posters and Late Breaking Results, Workshops and Tutorials, Industry and Innovation Tracks, Practitioners, Doctoral Consortium and Blue Sky (Vol. 2150, pp. 304–311). Springer Nature Switzerland. 25th International Conference on Artificial Intelligence in Education (AIED), Centro Estudos Sistemas Avancados Recife, Recife, BRAZIL, JUL 08-12, 2024. https://doi.org/10.1007/978-3-031-64315-6_26",
    "title": "Large Language Models for Career Readiness Prediction",
    "year": "2024",
    "doi": "https://doi.org/10.1007/978-3-031-64315-6_26",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "BERT, GPT-3.5, GPT-4",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "Large Language Models (LLMs) have recently achieved state-of-the-art performance on many benchmark Natural Language Processing (NLP) tasks. In this work, we are introducing a novel application, career readiness prediction, in the area of NLP for education. We analyze a dataset of student narratives and explore how reliably different LLMs classify them using Marcia's (1980) identity statuses. We explore the capabilities and limitations of LLMs on this new task and find that there is good potential for automated career readiness evaluation, and for improved survey design that enables larger-scale data collection."
  },
  {
    "id": "dam-2025-29",
    "citation": "Dam, T. T. N., & Glomann, L. (2025). Evaluating AI-generated Research Plans: Expert Insights from a Blind Authorship Study. Intelligent Human Systems Integration (IHSI 2025): Integrating People and Intelligent Systems., 160. http://doi.org/10.54941/ahfe1005843",
    "title": "Evaluating AI-generated Research Plans: Expert Insights from a Blind Authorship Study",
    "year": "2025",
    "doi": "https://doi.org/10.54941/ahfe1005843",
    "publication_type": "Conference Paper",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "research design",
      "instrument development",
      "interviewer guidelines"
    ],
    "silicon_sampling": null,
    "domain": [
      "consumer research"
    ],
    "llm_family": [
      "GPT",
      "Gemini"
    ],
    "llm": "GPT-4 (plus), Gemini-1.5 (pro)",
    "interaction_approach": null,
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "Other"
    ],
    "abstract": "Artificial Intelligence (AI) is increasingly being adopted in academia to enhance various research activities and has proven to be a valuable research accelerator in recent studies. This study examines the capabilities of large language models (LLMs), specifically ChatGPT and Gemini, in generating comprehensive research plans during the early stages of research. We tasked both models with developing research plans on the topic of “Gen Z's willingness to sacrifice convenience for environmental benefits” including interview guidelines and survey questions. Eight expert researchers evaluated these research plans without knowing they were AI-generated. Our findings provide in-depth insights into the perceptions of expert researchers regarding the quality of AI-generated research plans, identifying missing elements and pitfalls of utilizing AI in the planning activity of research. The necessity for researchers to oversee and intervene in AI outputs is emphasised in our research to fully leverage the advantages offered by this technology."
  },
  {
    "id": "dengel-2023-30",
    "citation": "Dengel, A., Gehrlein, R., Fernes, D., Görlich, S., Maurer, J., Pham, H. H., Großmann, G., & Eisermann, N. D. genannt. (2023). Qualitative Research Methods for Large Language Models: Conducting Semi-Structured Interviews with ChatGPT and BARD on Computer Science Education. Informatics, 10(4), 78. https://doi.org/10.3390/informatics10040078",
    "title": "Qualitative Research Methods for Large Language Models: Conducting Semi-Structured Interviews with ChatGPT and BARD on Computer Science Education",
    "year": "2023",
    "doi": "https://doi.org/10.3390/informatics10040078",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": [
      "education"
    ],
    "llm_family": [
      "GPT",
      "Bard"
    ],
    "llm": "ChatGPT, Bard",
    "interaction_approach": null,
    "language": [
      "English",
      "German"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "In the current era of artificial intelligence, large language models such as ChatGPT and BARD are being increasingly used for various applications, such as language translation, text generation, and human-like conversation. The fact that these models consist of large amounts of data, including many different opinions and perspectives, could introduce the possibility of a new qualitative research approach: Due to the probabilistic character of their answers, “interviewing” these large language models could give insights into public opinions in a way that otherwise only interviews with large groups of subjects could deliver. However, it is not yet clear if qualitative content analysis research methods can be applied to interviews with these models. Evaluating the applicability of qualitative research methods to interviews with large language models could foster our understanding of their abilities and limitations. In this paper, we examine the applicability of qualitative content analysis research methods to interviews with ChatGPT in English, ChatGPT in German, and BARD in English on the relevance of computer science in K-12 education, which was used as an exemplary topic. We found that the answers produced by these models strongly depended on the provided context, and the same model could produce heavily differing results for the same questions. From these results and the insights throughout the process, we formulated guidelines for conducting and analyzing interviews with large language models. Our findings suggest that qualitative content analysis research methods can indeed be applied to interviews with large language models, but with careful consideration of contextual factors that may affect the responses produced by these models. The guidelines we provide can aid researchers and practitioners in conducting more nuanced and insightful interviews with large language models. From an overall view of our results, we generally do not recommend using interviews with large language models for research purposes, due to their highly unpredictable results. However, we suggest using these models as exploration tools for gaining different perspectives on research topics and for testing interview guidelines before conducting real-world interviews."
  },
  {
    "id": "ding-2024-32",
    "citation": "Ding, X., Gopannagari, M., Sun, K., Tao, A., Zhao, D., Varadhan, S., Hardy, B., Dalpiaz, D., Vogiatzis, C., Angrave, L., & Liu, H. (2024, June 23). Evaluation of LLMs and Other Machine Learning Methods in the Analysis of Qualitative Survey Responses for Accessible Engineering Education Research. 2024 ASEE Annual Conference &amp; Exposition Proceedings. The Future of Engeneering Education. https://doi.org/10.18260/1-2-47360",
    "title": "Evaluation of LLMs and Other Machine Learning Methods in the Analysis of Qualitative Survey Responses for Accessible Engineering Education Research",
    "year": "2024",
    "doi": "https://www.doi.org/10.18260/1-2--47360",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "Llama",
      "BERT"
    ],
    "llm": "BERT, Llama, BART",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "This research paper provides insights and guidance for selecting appropriate analytical tools in engineering educational research. Currently, educators and researchers face difficulties in gaining insights effectively from free-response survey data. We evaluate the effectiveness and accuracy of Large Language Models (LLMs), in addition to the existing methods that employ topic modeling, document clustering coupled with Support Vector Machine (SVM) and Random Forest (RF) approaches, and the unsupervised Latent Dirichlet Allocation (LDA) method. Free responses to open-ended questions from student surveys in multiple courses at University of Illinois Urbana-Champaign were previously collected by engineering education accessibility researchers. The data (N=129 with seven free response questions per student) were previously analyzed to assess the effectiveness, satisfaction, and quality of adding accessible digital notes to multiple engineering courses and the students’ perceived belongingness, and self-efficacy. Manual codings for the seven open-ended questions were generated for qualitative tasks of sentiment analysis, topic modeling, and summarization and were used in this study as a gold standard to evaluate automated text analytic approaches. Raw text from open-ended questions was converted into numerical vectors using text vectorization and word embeddings and an unsupervised analysis using document clustering and topic modeling was performed using LDA and BERT methods. In addition to conventional machine learning models, multiple pre-trained open-sourced local LLMs were evaluated (BART and LLaMA) for summarization. The remote online ChatGPT closed-model services by OpenAI (ChatGPT-3.5 and ChatGPT-4) were excluded due to subject data privacy concerns. By comparing the accuracy, recall, and depth of thematic insights derived, we evaluated how effectively the method based on each model categorized and summarized students’ responses across educational research interests of effectiveness, satisfaction, and quality of education materials. The paper will present these results and discuss the implications of our findings and conclusions."
  },
  {
    "id": "eger-2024-34",
    "citation": "Eger, L. (2024). Questionnaire Design Using Generative AI: A Case Study from Marketing. Trendy v Podnikání, 14(2), 69–76. https://doi.org/10.24132/jbt.2024.14.2.69_76",
    "title": "Questionnaire Design Using Generative AI: A Case Study from Marketing",
    "year": "2024",
    "doi": "https://doi.org/10.24132/jbt.2024.14.2.69_76",
    "publication_type": "Journal Article",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": [
      "education",
      "consumer research"
    ],
    "llm_family": [
      "GPT",
      "Gemini"
    ],
    "llm": "ChatGPT-3.5, Gemini",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English",
      "Czech"
    ],
    "population": [
      "Czech Republic"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "There is an ongoing exploration of Generative AI in redesigning the teaching and learning process and investigating the validity of these practices. The case study addresses this call by presenting an experience from the teaching and learning process at the Faculty of Economics. Marketing is an area where the application of AI tools is already commonly used in corporate practice. The exercise was designed to apply knowledge from marketing on the one hand, and prompt engineering on the other. The activity took place in early 2024 and proved to be a rather challenging task not easy to accomplish, especially dueto the low experience of the students in prompt engineering for Generative AI. The findings of this study suggest that today's teaching and learning process at universities should be transformed to train students to be future-ready for employment in a society powered by Generative AI. The student experience of Generative AI is changing, and the use of practical activities that can be applied in future practice seems to be a valuable innovation in education."
  },
  {
    "id": "egetenmeier-2024-35",
    "citation": "Egetenmeier, A., & Strickroth, S. (2024). Scalable Two-Minute Feedback: Digital, Lecture-Accompanying Survey as a Continuous Feedback Instrument. International Journal of Information and Education Technology, 14(4), 573–580. https://doi.org/10.18178/ijiet.2024.14.4.2079",
    "title": "Scalable Two-Minute Feedback: Digital, Lecture-Accompanying Survey as a Continuous Feedback Instrument",
    "year": "2024",
    "doi": "https://www.doi.org/10.18178/ijiet.2024.14.4.2079",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "data analysis"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "ChatGPT",
    "interaction_approach": null,
    "language": [
      "German"
    ],
    "population": [
      "Germany"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Detailed feedback on courses and lecture content is essential for their improvement and also serves as a tool for reflection. However, feedback methods are often only used sporadically, especially in mass courses, because collecting and analyzing feedback in a timely manner is often a challenge for teachers. Moreover, the current situation of the students or the changing workload during the semester are usually not taken into account either. For a holistic investigation, the article used a digital survey format as formative feedback which attempts to measure student stress in a quantitative part and to address the participants’ reflection in a qualitative part, as well as to collect general suggestions for improvement (based on the so-called One-Minute Paper) at two educational institutions. The feedback during the semester is evaluated qualitatively and discussed on a meta-level and special features (e.g. reflections on student work ethic or other courses) are addressed. The results show a low, but constant rate of feedback. Responses mostly cover topics of the lecture content or organizational aspects and were intensively used to report issues within the lecture. In addition, Artificial Intelligence (AI) support in the form of a large language model was tested and showed promising results in summarizing the open-ended responses for the teacher. Finally, the experiences from the lecturers are reflected upon and the results as well as possibilities for improvement are discussed."
  },
  {
    "id": "ehrett-2024-36",
    "citation": "Ehrett, C., Hegde, S., Andre, K., Liu, D., & Wilson, T. (2023). Leveraging Open-Source Large Language Models for Data Augmentation in Hospital Staff Surveys: Mixed Methods Study. JMIR Medical Education, 10(1). https://doi.org/10.2196/51433",
    "title": "Leveraging Open-Source Large Language Models for Data Augmentation in Hospital Staff Surveys: Mixed Methods Study",
    "year": "2024",
    "doi": "https://doi.org/10.2196/51433",
    "publication_type": "Journal Article",
    "phase": [
      "data collection",
      "post-data collection"
    ],
    "task": [
      "data generation",
      "classification"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": null,
    "llm_family": [
      "Llama",
      "XLNet",
      "Alpaca",
      "BERT"
    ],
    "llm": "Alpaca, RoBERTa, Llama, XLNet, Distilbert",
    "interaction_approach": [
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "Background. Generative large language models (LLMs) have the potential to revolutionize medical education by generating tailored learning materials, enhancing teaching efficiency, and improving learner engagement. However, the application of LLMs in health care settings, particularly for augmenting small datasets in text classification tasks, remains underexplored, particularly for cost- and privacy-conscious applications that do not permit the use of third-party services such as OpenAI’s ChatGPT. Objective. This study aims to explore the use of open-source LLMs, such as Large Language Model Meta AI (LLaMA) and Alpaca models, for data augmentation in a specific text classification task related to hospital staff surveys. Methods. The surveys were designed to elicit narratives of everyday adaptation by frontline radiology staff during the initial phase of the COVID-19 pandemic. A 2-step process of data augmentation and text classification was conducted. The study generated synthetic data similar to the survey reports using 4 generative LLMs for data augmentation. A different set of 3 classifier LLMs was then used to classify the augmented text for thematic categories. The study evaluated performance on the classification task. Results. The overall best-performing combination of LLMs, temperature, classifier, and number of synthetic data cases is via augmentation with LLaMA 7B at temperature 0.7 with 100 augments, using Robustly Optimized BERT Pretraining Approach (RoBERTa) for the classification task, achieving an average area under the receiver operating characteristic (AUC) curve of 0.87 (SD 0.02; ie, 1 SD). The results demonstrate that open-source LLMs can enhance text classifiers’ performance for small datasets in health care contexts, providing promising pathways for improving medical education processes and patient care practices. Conclusions. The study demonstrates the value of data augmentation with open-source LLMs, highlights the importance of privacy and ethical considerations when using LLMs, and suggests future directions for research in this field."
  },
  {
    "id": "espinosa-2024-37",
    "citation": "Espinosa, L., & Salathé, M. (2024). Use of large language models as a scalable approach to understanding public health discourse. PLOS Digital Health, 3(10). https://doi.org/10.1371/journal.pdig.0000631",
    "title": "Use of large language models as a scalable approach to understanding public health discourse",
    "year": "2024",
    "doi": "https://doi.org/10.1371/journal.pdig.0000631",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Llama",
      "Mixtral"
    ],
    "llm": "GPT-3.5, GPT-4, Llama-3 8B, Llama-3 70B, Mixtral",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Online public health discourse is becoming more and more important in shaping public health dynamics. Large Language Models (LLMs) offer a scalable solution for analysing the vast amounts of unstructured text found on online platforms. Here, we explore the effectiveness of Large Language Models (LLMs), including GPT models and open-source alternatives, for extracting public stances towards vaccination from social media posts. Using an expert-annotated dataset of social media posts related to vaccination, we applied various LLMs and a rule-based sentiment analysis tool to classify the stance towards vaccination. We assessed the accuracy of these methods through comparisons with expert annotations and annotations obtained through crowdsourcing. Our results demonstrate that few-shot prompting of best-in-class LLMs are the best performing methods, and that all alternatives have significant risks of substantial misclassification. The study highlights the potential of LLMs as a scalable tool for public health professionals to quickly gauge public opinion on health policies and interventions, offering an efficient alternative to traditional data analysis methods. With the continuous advancement in LLM development, the integration of these models into public health surveillance systems could substantially improve our ability to monitor and respond to changing public health attitudes."
  },
  {
    "id": "faria-2024-38",
    "citation": "Faria, F. T. J., Moin, M. B., Mumu, R. I., Abir, M. M. A., Alfy, A. N., & Alam, M. S. (2024). Motamot: A Dataset for Revealing the Supremacy of Large Language Models Over Transformer Models in Bengali Political Sentiment Analysis. 2024 IEEE Region 10 Symposium (TENSYMP), 2407.19528v1, 1–8. https://doi.org/10.1109/TENSYMP61132.2024.10752197",
    "title": "Motamot: A Dataset for Revealing the Supremacy of Large Language Models Over Transformer Models in Bengali Political Sentiment Analysis",
    "year": "2024",
    "doi": "https://doi.org/10.1109/TENSYMP61132.2024.10752197",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Gemini",
      "BERT"
    ],
    "llm": "Gemini 1.5 Pro, GPT-3.5-Turbo; BanglaBERT, Bangla BERT Base, XLM-RoBERTa, mBERT, sahajBERT",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot"
    ],
    "language": [
      "English",
      "Bengali"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Sentiment analysis is the process of identifying and categorizing people's emotions or opinions regarding various topics. Analyzing political sentiment is critical for understanding the complexities of public opinion processes, especially during election seasons. It gives significant information on voter preferences, attitudes, and current trends. In this study, we investigate political sentiment analysis during Bangladeshi elections, specifically examining how effectively Pre-trained Language Models (PLMs) and Large Language Models (LLMs) capture complex sentiment characteristics. Our study centers on the creation of the \"Motamot\" dataset, comprising 7,058 instances annotated with positive and negative sentiments, sourced from diverse online newspaper portals, forming a comprehensive resource for political sentiment analysis. We meticulously evaluate the performance of various PLMs including BanglaBERT, Bangla BERT Base, XLM-RoBERTa, mBERT, and sahajBERT, alongside LLMs such as Gemini 1.5 Pro and GPT 3.5 Turbo. Moreover, we explore zero-shot and few-shot learning strategies to enhance our understanding of political sentiment analysis methodologies. Our findings underscore BanglaBERT's commendable accuracy of 88.10% among PLMs. However, the exploration into LLMs reveals even more promising results. Through the adept application of Few-Shot learning techniques, Gemini 1.5 Pro achieves an impressive accuracy of 96.33%, surpassing the remarkable performance of GPT 3.5 Turbo, which stands at 94%. This underscores Gemini 1.5 Pro's status as the superior performer in this comparison."
  },
  {
    "id": "feldman-2022-39",
    "citation": "Feldman, P., Dant, A., Foulds, J. R., & Pan, S. (2022). Polling Latent Opinions: A Method for Computational Sociolinguistics Using Transformer Language Models. arXiv. https://doi.org/10.48550/arXiv.2204.07483",
    "title": "Polling Latent Opinions: A Method for Computational Sociolinguistics Using Transformer Language Models",
    "year": "2022",
    "doi": "https://doi.org/10.48550/arXiv.2204.07483",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "consumer research"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-2",
    "interaction_approach": [
      "zero-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "reviews"
    ],
    "abstract": "Text analysis of social media for sentiment, topic analysis, and other analysis depends initially on the selection of keywords and phrases that will be used to create the research corpora. However, keywords that researchers choose may occur infrequently, leading to errors that arise from using small samples. In this paper, we use the capacity for memorization, interpolation, and extrapolation of Transformer Language Models such as the GPT series to learn the linguistic behaviors of a subgroup within larger corpora of Yelp reviews. We then use prompt-based queries to generate synthetic text that can be analyzed to produce insights into specific opinions held by the populations that the models were trained on. Once learned, more specific sentiment queries can be made of the model with high levels of accuracy when compared to traditional keyword searches. We show that even in cases where a specific keyphrase is limited or not present at all in the training corpora, the GPT is able to accurately generate large volumes of text that have the correct sentiment."
  },
  {
    "id": "feldman-2021-40",
    "citation": "Feldman, P., Tiwari, S., Cheah, C. S. L., Foulds, J. R., & Pan, S. (2021). Analyzing COVID-19 Tweets with Transformer-based Language Models. Workshop Proceedings of the 15th International AAAI Conference on Web and Social Media. Association for the Advancement of Artificial Intelligence. https://doi.org/10.36190/2021.37",
    "title": "Analyzing COVID-19 Tweets with Transformer-based Language Models",
    "year": "2021",
    "doi": "https://doi.org/10.36190/2021.37",
    "publication_type": "Conference Paper",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-2",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "This paper describes a method for using Transformer-based Language Models (TLMs) to understand public opinion from social media posts. In this approach, we train a set of GPT models on several COVID-19 tweet corpora that reﬂect populations of users with distinctive views. We then use promptbased queries to probe these models to reveal insights into the biases and opinions of the users. We demonstrate how this approach can be used to produce results which resemble polling the public on diverse social, political and public health issues. The results on the COVID-19 tweet data show that transformer language models are promising tools that can help us understand public opinions on social media at scale."
  },
  {
    "id": "fernandez-2024-41",
    "citation": "Fernandez, J. J. I., Perez, J. M., & Rosati, G. (2024). Identification of emotions on Twitter during the 2022 electoral process in Colombia. arXiv. https://doi.org/10.48550/arXiv.2407.07258",
    "title": "Identification of emotions on Twitter during the 2022 electoral process in Colombia",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2407.07258",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "RoBERTa, RoBERTuito, GPT-3.5, BETO",
    "interaction_approach": [
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "Spanish"
    ],
    "population": [
      "Colombia"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "The study of Twitter as a means for analyzing social phenomena has gained interest in recent years due to the availability of large amounts of data in a relatively spontaneous environment. Within opinion-mining tasks, emotion detection is specially relevant, as it allows for the identification of people's subjective responses to different social events in a more granular way than traditional sentiment analysis based on polarity. In the particular case of political events, the analysis of emotions in social networks can provide valuable information on the perception of candidates, proposals, and other important aspects of the public debate. In spite of this importance, there are few studies on emotion detection in Spanish and, to the best of our knowledge, few resources are public for opinion mining in Colombian Spanish, highlighting the need for generating resources addressing the specific cultural characteristics of this variety. In this work, we present a small corpus of tweets in Spanish related to the 2022 Colombian presidential elections, manually labeled with emotions using a fine-grained taxonomy. We perform classification experiments using supervised state-of-the-art models (BERT models) and compare them with GPT-3.5 in few-shot learning settings. We make our dataset and code publicly available for research purposes."
  },
  {
    "id": "ferreira-2025-42",
    "citation": "Ferreira, G., Amidei, J., Nieto, R., & Kaltenbrunner, A. (2025). Matching GPT-simulated populations with real ones in psychological studies—The case of the EPQR-A personality test. ACM Transactions on Computing for Healthcare, 6(2), 26:1-26:33. https://doi.org/10.1145/3712301",
    "title": "Matching GPT-simulated populations with real ones in psychological studies - the case of the EPQR-A personality test",
    "year": "2025",
    "doi": "https://doi.org/10.1145/3712301",
    "publication_type": "Conference Paper",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo, GPT-4, GPT-4-preview",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English",
      "Spanish",
      "Slovak"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "This article analyzes how well OpenAI's LLM GPT-4 can emulate different personalities and simulate populations to answer psychological questionnaires similarly to real population samples. For this purpose, we performed different experiments with the Eysenck Personality Questionnaire-Revised Abbreviated (EPQR-A) in three different languages (Spanish, English, and Slovak). The EPQR-A measures personality on four scales: extraversion (E: sociability), neuroticism (N: emotional stability), psychoticism (P: tendency to break social rules, and not having empathy), and lying (L: social desirability). We perform a comparative analysis of the answers of synthetic populations with those of two real population samples of Spanish students as well as the unconditioned baseline personality of GPT. Furthermore, the impact of time (what year the questionnaire is answered), questionnaire language, and student age and gender are analyzed. To our knowledge, this is the first time the EPQR-A test has been used to assess the GPT´s personality and the impact of different language versions and time are measured. Our analysis reveals that GPT-4 exhibits an extroverted, emotionally stable personality with low psychoticism levels and high social desirability. GPT-4 replicates some differences observed in real populations in terms of gender but only partially replicates the results for real populations."
  },
  {
    "id": "fish-2024-43",
    "citation": "Fish, S., Gölz, P., Procaccia, A. D., Rusak, G., Shapira, I., & Wüthrich, M. (2024). Generative Social Choice: OpenAI “Democratic Inputs to AI” Report. https://www.semanticscholar.org/paper/47c40b3dcedeb87cfbffe297c52cb0c1fe3a5cde",
    "title": "Generative Social Choice: OpenAI “Democratic Inputs to AI” Report",
    "year": "2024",
    "doi": "https://www.semanticscholar.org/paper/47c40b3dcedeb87cfbffe297c52cb0c1fe3a5cde",
    "publication_type": "Report",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "data analysis"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion",
      "consumer research"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "We propose an LLM-based process that distills a large number of free-text opinions into a handful of statements. Our design is centered on mathematical fairness guarantees from social choice theory, suggesting that these output statements can inform democratic decisions. We use this process to investigate public opinion in the US on the question: “To what extent should chatbots be personalized?” This report is meant for a general audience. In an accompanying technical paper, we present our approach in greater detail, along with supporting theoretical and empirical results."
  },
  {
    "id": "fostier-2024-44",
    "citation": "Fostier, J., Leemans, E., Meeussen, L., Wulleman, A., Doren, S. V., Coninck, D. D., & Toelen, J. (2024). Dialogues with AI: Comparing ChatGPT, Bard, and Human Participants’ Responses in In-Depth Interviews on Adolescent Health Care. Future, 2(1), 30–45. https://doi.org/10.3390/future2010003",
    "title": "Dialogues with AI: Comparing ChatGPT, Bard, and Human Participants’ Responses in In-Depth Interviews on Adolescent Health Care",
    "year": "2024",
    "doi": "https://doi.org/10.3390/future2010003",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": null,
    "llm_family": [
      "GPT",
      "Bard"
    ],
    "llm": "GPT-4, Bard",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "Dutch"
    ],
    "population": [
      "Belgium"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "This study explores the feasibility of large language models (LLMs) like ChatGPT and Bard as virtual participants in health-related research interviews. The goal is to assess whether these models can function as a “collective knowledge platform” by processing extensive datasets. Framed as a “proof of concept”, the research involved 20 interviews with both ChatGPT and Bard, portraying personas based on parents of adolescents. The interviews focused on physician–patient–parent confidentiality issues across fictional cases covering alcohol intoxication, STDs, ultrasound without parental knowledge, and mental health. Conducted in Dutch, the interviews underwent independent coding and comparison with human responses. The analysis identified four primary themes—privacy, trust, responsibility, and etiology—from both AI models and human-based interviews. While the main concepts aligned, nuanced differences in emphasis and interpretation were observed. Bard exhibited less interpersonal variation compared to ChatGPT and human respondents. Notably, AI personas prioritized privacy and age more than human parents. Recognizing disparities between AI and human interviews, researchers must adapt methodologies and refine AI models for improved accuracy and consistency. This research initiates discussions on the evolving role of generative AI in research, opening avenues for further exploration."
  },
  {
    "id": "fukuma-2024-45",
    "citation": "Fukuma, T., Noda, K., Hoso, T. U. K., Ichikawa, Y., Kambe, K., Masubuch, Y., & Toriumi, F. (2024). QANA: LLM-based Question Generation and Network Analysis for Zero-shot Key Point Analysis and Beyond. arXiv. https://doi.org/10.48550/arXiv.2404.18371",
    "title": "QANA: LLM-based Question Generation and Network Analysis for Zero-shot Key Point Analysis and Beyond",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2404.18371",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "XLNet",
      "e5"
    ],
    "llm": "GPT-3.5-Turbo, GPT-4-preview, text-embedding-3-large, e5",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "Other"
    ],
    "abstract": "The proliferation of social media has led to information overload and increased interest in opinion mining. We propose \"Question-Answering Network Analysis\" (QANA), a novel opinion mining framework that utilizes Large Language Models (LLMs) to generate questions from users' comments, constructs a bipartite graph based on the comments' answerability to the questions, and applies centrality measures to examine the importance of opinions. We investigate the impact of question generation styles, LLM selections, and the choice of embedding model on the quality of the constructed QA networks by comparing them with annotated Key Point Analysis datasets. QANA achieves comparable performance to previous state-of-the-art supervised models in a zero-shot manner for Key Point Matching task, also reducing the computational cost from quadratic to linear. For Key Point Generation, questions with high PageRank or degree centrality align well with manually annotated key points. Notably, QANA enables analysts to assess the importance of key points from various aspects according to their selection of centrality measure. QANA's primary contribution lies in its flexibility to extract key points from a wide range of perspectives, which enhances the quality and impartiality of opinion mining."
  },
  {
    "id": "gatto-2024-46",
    "citation": "Gatto, J., Basak, M., Srivastava, Y., Bohlman, P., & Preum, S. M. (2024). Scope of Large Language Models for Mining Emerging Opinions in Online Health Discourse. arXiv. https://doi.org/10.48550/arXiv.2403.03336",
    "title": "Scope of Large Language Models for Mining Emerging Opinions in Online Health Discourse",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2403.03336",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "Llama",
      "BERT"
    ],
    "llm": "ClaimDeBERTa, PubMedBERT, GPT-3.5, GPT-4, Llama-2 7B",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "In this paper, we develop an LLM-powered framework for the curation and evaluation of emerging opinion mining in online health communities. We formulate emerging opinion mining as a pairwise stance detection problem between (title, comment) pairs sourced from Reddit, where post titles contain emerging health-related claims on a topic that is not predefined. The claims are either explicitly or implicitly expressed by the user. We detail (i) a method of claim identification – the task of identifying if a post title contains a claim and (ii) an opinion mining-driven evaluation framework for stance detection using LLMs. We facilitate our exploration by releasing a novel test dataset, Long COVID-Stance, or LC-stance, which can be used to evaluate LLMs on the tasks of claim identification and stance detection in online health communities. Long Covid is an emerging post-COVID disorder with uncertain and complex treatment guidelines, thus making it a suitable use case for our task. LC-Stance contains long COVID treatment related discourse sourced from a Reddit community. Our evaluation shows that GPT-4 significantly outperforms prior works on zero-shot stance detection. We then perform thorough LLM model diagnostics, identifying the role of claim type (i.e. implicit vs explicit claims) and comment length as sources of model error."
  },
  {
    "id": "gilardi-2023-48",
    "citation": "Gilardi, F., Alizadeh, M., & Kubli, M. (2023). ChatGPT Outperforms Crowd-Workers for Text-Annotation Tasks. Proceedings of the National Academy of Sciences, 120(30), e2305016120. https://doi.org/10.1073/pnas.2305016120",
    "title": "ChatGPT Outperforms Crowd-Workers for Text-Annotation Tasks",
    "year": "2023",
    "doi": "https://doi.org/10.1073/pnas.2305016120",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Many NLP applications require manual data annotations for a variety of tasks, notably to train classifiers or evaluate the performance of unsupervised models. Depending on the size and degree of complexity, the tasks may be conducted by crowd-workers on platforms such as MTurk as well as trained annotators, such as research assistants. Using a sample of 2,382 tweets, we demonstrate that ChatGPT outperforms crowd-workers for several annotation tasks, including relevance, stance, topics, and frames detection. Specifically, the zero-shot accuracy of ChatGPT exceeds that of crowd-workers for four out of five tasks, while ChatGPT's intercoder agreement exceeds that of both crowd-workers and trained annotators for all tasks. Moreover, the per-annotation cost of ChatGPT is less than $0.003 -- about twenty times cheaper than MTurk. These results show the potential of large language models to drastically increase the efficiency of text classification."
  },
  {
    "id": "gmyrek-2024-49",
    "citation": "Gmyrek, P., & Ruales, P. V. (2024). A new chapter for the ILO’s textual assets: Applying generative AI to labour force survey questionnaires. International Labour Organization. https://doi.org/10.54394/SORG5455",
    "title": "A new chapter for the ILO’s textual assets: applying generative AI to labour force survey questionnaires",
    "year": "2024",
    "doi": "https://doi.org/10.54394/SORG5455",
    "publication_type": "Report",
    "phase": [
      "pre-data collection",
      "post-data collection"
    ],
    "task": [
      "instrument development",
      "classification",
      "archiving"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "This brief highlights the use of generative AI to create a database of Labour Force Survey questions, combining AI vision capabilities and human verification to ensure accurate data extraction. It introduces tools for digitization, semantic search, and automated summary generation, alongside an interactive search app and GitHub repository, showcasing the transformative potential of AI for turning textual resources into long-term digital assets for research and policymaking."
  },
  {
    "id": "g-2023-51",
    "citation": "Götz, F. M., Maertens, R., Loomba, S., & Van Der Linden, S. (2023). Let the algorithm speak: How to use neural networks for automatic item generation in psychological scale development. Psychological Methods, 29(3), 494–518. https://doi.org/10.1037/met0000540",
    "title": "Let the algorithm speak: How to use neural networks for automatic item generation in psychological scale development.",
    "year": "2023",
    "doi": "https://doi.apa.org/getdoi.cfm?doi=10.1037/met0000540",
    "publication_type": "Journal Article",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-2",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Canada"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Measurement is at the heart of scientiﬁc research. As many—perhaps most—psychological constructs cannot be directly observed, there is a steady demand for reliable self-report scales to assess latent constructs. However, scale development is a tedious process that requires researchers to produce good items in large quantities. In this tutorial, we introduce, explain, and apply the Psychometric Item Generator (PIG), an opensource, free-to-use, self-sufﬁcient natural language processing algorithm that produces large-scale, humanlike, customized text output within a few mouse clicks. The PIG is based on the GPT-2, a powerful generative language model, and runs on Google Colaboratory—an interactive virtual notebook environment that executes code on state-of-the-art virtual machines at no cost. Across two demonstrations and a preregistered ﬁvepronged empirical validation with two Canadian samples (NSample 1 = 501, NSample 2 = 773), we show that the PIG is equally well-suited to generate large pools of face-valid items for novel constructs (i.e., wanderlust) and create parsimonious short scales of existing constructs (i.e., Big Five personality traits) that yield strong performances when tested in the wild and benchmarked against current gold standards for assessment. The PIG does not require any prior coding skills or access to computational resources and can easily be tailored to any desired context by simply switching out short linguistic prompts in a single line of code. In short, we present an effective, novel machine learning solution to an old psychological challenge. As such, the PIG will not require you to learn a new language—but instead, speak yours."
  },
  {
    "id": "gudi-2024-52",
    "citation": "Gudiño-Rosero, J., Grandi, U., & Hidalgo, C. A. (2024). Large Language Models (LLMs) as Agents for Augmented Democracy. Philosophical Transactions of the Royal Society of London. Series A, Mathematical and Physical Sciences, 382(2285). https://doi.org/10.1098/rsta.2024.0100",
    "title": "Large Language Models (LLMs) as Agents for Augmented Democracy",
    "year": "2024",
    "doi": "https://doi.org/10.1098/rsta.2024.0100",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Llama",
      "Mistral",
      "Gemma"
    ],
    "llm": "GPT-3.5-Turbo, Llama-2 7B, Llama-3 8B, Mistral 7B, Gemma 7B, Falcon 7B",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English",
      "Portuguese"
    ],
    "population": [
      "Brazil"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "We explore the capabilities of an augmented democracy system built on off-the-shelf LLMs fine-tuned on data summarizing individual preferences across 67 policy proposals collected during the 2022 Brazilian presidential elections. We use a train-test cross-validation setup to estimate the accuracy with which the LLMs predict both: a subject's individual political choices and the aggregate preferences of the full sample of participants. At the individual level, the accuracy of the out of sample predictions lie in the range 69%-76% and are significantly better at predicting the preferences of liberal and college educated participants. At the population level, we aggregate preferences using an adaptation of the Borda score and compare the ranking of policy proposals obtained from a probabilistic sample of participants and from data augmented using LLMs. We find that the augmented data predicts the preferences of the full population of participants better than probabilistic samples alone when these represent less than 30% to 40% of the total population. These results indicate that LLMs are potentially useful for the construction of systems of augmented democracy."
  },
  {
    "id": "gujral-2024-53",
    "citation": "Gujral, P., Awaldhi, K., Jain, N., Bhandula, B., & Chakraborty, A. (2024). Can LLMs Help Predict Elections? (Counter)Evidence from the World’s Largest Democracy. arXiv. https://doi.org/10.48550/arXiv.2405.07828",
    "title": "Can LLMs Help Predict Elections? (Counter)Evidence from the World's Largest Democracy",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2405.07828",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "Llama"
    ],
    "llm": "Llama-2 13B, Zephyr 7B",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English",
      "Hindi"
    ],
    "population": [
      "India"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "The study of how social media affects the formation of public opinion and its influence on political results has been a popular field of inquiry. However, current approaches frequently offer a limited comprehension of the complex political phenomena, yielding inconsistent outcomes. In this work, we introduce a new method: harnessing the capabilities of Large Language Models (LLMs) to examine social media data and forecast election outcomes. Our research diverges from traditional methodologies in two crucial respects. First, we utilize the sophisticated capabilities of foundational LLMs, which can comprehend the complex linguistic subtleties and contextual details present in social media data. Second, we focus on data from X (Twitter) in India to predict state assembly election outcomes. Our method entails sentiment analysis of election-related tweets through LLMs to forecast the actual election results, and we demonstrate the superiority of our LLM-based method against more traditional exit and opinion polls. Overall, our research offers valuable insights into the unique dynamics of Indian politics and the remarkable impact of social media in molding public attitudes within this context."
  },
  {
    "id": "hernandez-2022-55",
    "citation": "Hernandez, I., & Nie, W. (2022). The AI‐IP: Minimizing the guesswork of personality scale item development through artificial intelligence. Personnel Psychology, 76(4), peps.12543. https://doi.org/10.1111/peps.12543",
    "title": "The AI‐IP: Minimizing the guesswork of personality scale item development through artificial intelligence",
    "year": "2022",
    "doi": "https://doi.org/10.1111/peps.12543",
    "publication_type": "Journal Article",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "DistilBERT, GPT-2-XL",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "We propose a framework for integrating various modern natural language processing (NLP) models to assist researchers with developing valid psychological scales. Transformer‐based deep neural networks offer state‐of‐the‐art performance on various natural language tasks. This project adapts the transformer model GPT‐2 to learn the structure of personality items, and generate the largest openly available pool of personality items, consisting of one million new items. We then use that artificial intelligence‐based item pool (AI‐IP) to provide a subset of potential scale items for measuring a desired construct. To better recommend construct‐related items, we train a paired neural network‐based classification BERT model to predict the observed correlation between personality items using only their text. We also demonstrate how zero‐shot models can help balance desired content domains within the scale. In combination with the AI‐IP, these models narrow the large item pool to items most correlated with a set of initial items. We demonstrate the ability of this multimodel framework to develop longer cohesive scales from a small set of construct‐relevant items. We found reliability, validity, and fit equivalent for AI‐assisted scales compared to scales developed and optimized by traditional methods. By leveraging neural networks’ ability to generate text relevant to a given topic and infer semantic similarity, this project demonstrates how to support creative and open‐ended elements of the scale development process to increase the likelihood of one's initial scale being valid, and minimize the need to modify and revalidate the scale."
  },
  {
    "id": "hobbs-2025-56",
    "citation": "Hobbs, W., & Green, J. (2025). Categorizing Topics Versus Inferring Attitudes: A Theory and Method for Analyzing Open-ended Survey Responses. Political Analysis, 33(3), 231–251. https://doi.org/10.1017/pan.2024.23",
    "title": "Categorizing Topics Versus Inferring Attitudes: A Theory and Method for Analyzing Open-ended Survey Responses",
    "year": "2025",
    "doi": "https://www.doi.org/10.1017/pan.2024.23",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "BART"
    ],
    "llm": "BART, ChatGPT-3.5",
    "interaction_approach": [
      "zero-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "Past work on closed-ended survey responses demonstrates that inferring stable political attitudes requires separating signal from noise in “top of the head” answers to researchers’ questions. We outline a corresponding theory of the open-ended response, in which respondents make narrow, stand-in statements to convey more abstract, general attitudes. We then present a method designed to infer those attitudes. Our approach leverages co-variation with words used relatively frequently across respondents to infer what else they could have said without substantively changing what they meant—linking narrow themes to each other through associations with contextually prevalent words. This reflects the intuition that a respondent may use different specific statements at different points in time to convey similar meaning. We validate this approach using panel data in which respondents answer the same open-ended questions (concerning healthcare policy, most important problems, and evaluations of political parties) at multiple points in time, showing that our method’s output consistently exhibits higher within-subject correlations than hand-coding of narrow response categories, topic modeling, and large language model output. Finally, we show how large language models can be used to complement—but not, at present, substitute—our “implied word” method."
  },
  {
    "id": "holtdirk-2024-57",
    "citation": "Holtdirk, T., Assenmacher, D., Bleier, A., & Wagner, C. (2024). Fine-Tuning Large Language Models to Simulate German Voting Behaviour (Working Paper). https://doi.org/10.31219/osf.io/udz28",
    "title": "Fine-Tuning Large Language Models to Simulate German Voting Behaviour (Working Paper)",
    "year": "2024",
    "doi": "https://doi.org/10.31219/osf.io/udz28_v1",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "imputation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "Llama"
    ],
    "llm": "Llama-3 8B (benchmark: GPT-3.5)",
    "interaction_approach": [
      "zero-shot",
      "fine-tuning"
    ],
    "language": [
      "German"
    ],
    "population": [
      "Germany"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Surveys are a cornerstone of empirical social science research, providing invaluable insights into the opinions, beliefs, behaviours, and characteristics of people. However, issues such as refusal to participate, skipping questions, sampling bias, and attrition significantly impact the quality and reliability of survey data. Recently, researchers have started investigating the potential of Large Language Models (LLMs) to role-play a pre-defined set of ”characters” and simulate their survey responses with little or no additional training data and costs. While previous research on forecasting, imputing, and simulating survey answers with LLMs has focused on zero-shot and few-shot approaches, this study investigates the viability of fine-tuning LLMs to simulate responses of survey participants. We fine-tune Large Language Models (LLMs) on subsets of the data from the German Longitudinal Election Study (GLES) and evaluate their predictive performance on the ”vote choice” for a random set of heldout participants. We compare the LLMs’ performance against various baseline methods."
  },
  {
    "id": "hu-2025-59",
    "citation": "Hu, J. C., Modi, M. S., & Szymanski, B. K. (2025). Using LLMs to Infer Non-Binary COVID-19 Sentiments of Chinese Micro-bloggers. arXiv. https://doi.org/10.48550/arXiv.2501.05423",
    "title": "Using LLMs to Infer Non-Binary COVID-19 Sentiments of Chinese Micro-bloggers",
    "year": "2025",
    "doi": "https://doi.org/10.48550/arXiv.2501.05423",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "Llama"
    ],
    "llm": "Llama-3 8B",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "Chinese"
    ],
    "population": [
      "China"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Studying public sentiment during crises is crucial for understanding how opinions and sentiments shift, resulting in polarized societies. We study Weibo, the most popular microblogging site in China, using posts made during the outbreak of the COVID-19 crisis. The study period includes the pre-COVID-19 stage, the outbreak stage, and the early stage of epidemic prevention. We use Llama 3 8B, a Large Language Model, to analyze users' sentiments on the platform by classifying them into positive, negative, sarcastic, and neutral categories. Analyzing sentiment shifts on Weibo provides insights into how social events and government actions influence public opinion. This study contributes to understanding the dynamics of social sentiments during health crises, fulfilling a gap in sentiment analysis for Chinese platforms. By examining these dynamics, we aim to offer valuable perspectives on digital communication's role in shaping society's responses during unprecedented global challenges."
  },
  {
    "id": "hwang-2023-60",
    "citation": "Hwang, E., Majumder, B., & Tandon, N. (2023). Aligning Language Models to User Opinions. Findings of the Association for Computational Linguistics: EMNLP 2023, 5906–5919. https://doi.org/10.18653/v1/2023.findings-emnlp.393",
    "title": "Aligning Language Models to User Opinions",
    "year": "2023",
    "doi": "https://doi.org/10.18653/v1/2023.findings-emnlp.393",
    "publication_type": "Conference Paper",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Llama"
    ],
    "llm": "GPT-3, GPT-3.5-Turbo, GPT-4, Llama 7B, Vicuna 13B",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "An important aspect of developing LLMs that interact with humans is to align models’ behavior to their users. It is possible to prompt an LLM into behaving as a certain persona, especially a user group or ideological persona the model captured during its pertaining stage. But, how to best align an LLM with a specific user and not a demographic or ideological group remains an open question. Mining public opinion surveys (by PEW research), we find that the opinions of a user and their demographics and ideologies are not mutual predictors. We use this insight to align LLMs by modeling relevant past user opinions in addition to user demographics and ideology, achieving up to 7 points accuracy gains in predicting public opinions from survey questions across a broad set of topics1. Our work opens up the research avenues to bring user opinions as an important ingredient in aligning language models."
  },
  {
    "id": "ibrahim-2024-61",
    "citation": "Ibrahim, H., Khan, F., Alabdouli, H., Almatrooshi, M., Nguyen, T., Rahwan, T., & Zaki, Y. (2024). Analyzing political stances on Twitter in the lead-up to the 2024 U.S. election. arXiv. https://doi.org/10.48550/arXiv.2412.02712",
    "title": "Analyzing political stances on Twitter in the lead-up to the 2024 U.S. election",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2412.02712",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Claude",
      "Gemini"
    ],
    "llm": "Claude, Gemini, GPT-4o",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": null,
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Social media platforms play a pivotal role in shaping public opinion and amplifying political discourse, particularly during elections. However, the same dynamics that foster democratic engagement can also exacerbate polarization. To better understand these challenges, here, we investigate the ideological positioning of tweets related to the 2024 U.S. Presidential Election. To this end, we analyze 1,235 tweets from key political figures and 63,322 replies, and classify ideological stances into Pro-Democrat, Anti-Republican, Pro-Republican, Anti-Democrat, and Neutral categories. Using a classification pipeline involving three large language models (LLMs)-GPT-4o, Gemini-Pro, and Claude-Opus-and validated by human annotators, we explore how ideological alignment varies between candidates and constituents. We find that Republican candidates author significantly more tweets in criticism of the Democratic party and its candidates than vice versa, but this relationship does not hold for replies to candidate tweets. Furthermore, we highlight shifts in public discourse observed during key political events. By shedding light on the ideological dynamics of online political interactions, these results provide insights for policymakers and platforms seeking to address polarization and foster healthier political dialogue."
  },
  {
    "id": "ji-2024-63",
    "citation": "Ji, J., Kim, J., & Kim, Y. (2024). Predicting Missing Values in Survey Data Using Prompt Engineering for Addressing Item Non-Response. Future Internet, 16(10). https://doi.org/10.3390/fi16100351",
    "title": "Predicting Missing Values in Survey Data Using Prompt Engineering for Addressing Item Non-Response",
    "year": "2024",
    "doi": "https://doi.org/10.3390/fi16100351",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "imputation"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "Llama"
    ],
    "llm": "GPT-4-Turbo, GPT-4o-mini, Llama-3 8B",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Survey data play a crucial role in various research fields, including economics, education, and healthcare, by providing insights into human behavior and opinions. However, item non-response, where respondents fail to answer specific questions, presents a significant challenge by creating incomplete datasets that undermine data integrity and can hinder or even prevent accurate analysis. Traditional methods for addressing missing data, such as statistical imputation techniques and deep learning models, often fall short when dealing with the rich linguistic content of survey data. These approaches are also hampered by high time complexity for training and the need for extensive preprocessing or feature selection. In this paper, we introduce an approach that leverages Large Language Models (LLMs) through prompt engineering for predicting item non-responses in survey data. Our method combines the strengths of both traditional imputation techniques and deep learning methods with the advanced linguistic understanding of LLMs. By integrating respondent similarities, question relevance, and linguistic semantics, our approach enhances the accuracy and comprehensiveness of survey data analysis. The proposed method bypasses the need for complex preprocessing and additional training, making it adaptable, scalable, and capable of generating explainable predictions in natural language. We evaluated the effectiveness of our LLM-based approach through a series of experiments, demonstrating its competitive performance against established methods such as Multivariate Imputation by Chained Equations (MICE), MissForest, and deep learning models like TabTransformer. The results show that our approach not only matches but, in some cases, exceeds the performance of these methods while significantly reducing the time required for data processing."
  },
  {
    "id": "jiang-2024-64",
    "citation": "Jiang, S., Wei, L., & Zhang, C. (2024). Donald Trumps in the Virtual Polls: Simulating and Predicting Public Opinions in Surveys Using Large Language Models. arXiv. https://doi.org/10.48550/arXiv.2411.01582",
    "title": "Donald Trumps in the Virtual Polls: Simulating and Predicting Public Opinions in Surveys Using Large Language Models",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2411.01582",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o",
    "interaction_approach": null,
    "language": [
      "English"
    ],
    "population": [
      "United States",
      "China"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "In recent years, large language models (LLMs) have attracted attention due to their ability to generate human-like text. As surveys and opinion polls remain key tools for gauging public attitudes, there is increasing interest in assessing whether LLMs can accurately replicate human responses. This study examines the potential of LLMs, specifically ChatGPT-4o, to replicate human responses in large-scale surveys and to predict election outcomes based on demographic data. Employing data from the World Values Survey (WVS) and the American National Election Studies (ANES), we assess the LLM's performance in two key tasks: simulating human responses and forecasting U.S. election results. In simulations, the LLM was tasked with generating synthetic responses for various socio-cultural and trust-related questions, demonstrating notable alignment with human response patterns across U.S.-China samples, though with some limitations on value-sensitive topics. In prediction tasks, the LLM was used to simulate voting behavior in past U.S. elections and predict the 2024 election outcome. Our findings show that the LLM replicates cultural differences effectively, exhibits in-sample predictive validity, and provides plausible out-of-sample forecasts, suggesting potential as a cost-effective supplement for survey-based research."
  },
  {
    "id": "jung-2025-65",
    "citation": "Jung, S.-G., Salminen, J., Aldous, K. K., & Jansen, B. J. (2025). PersonaCraft: Leveraging language models for data-driven persona development. International Journal of Human-Computer Studies, 197. https://doi.org/10.1016/j.ijhcs.2025.103445",
    "title": "PersonaCraft: Leveraging language models for data-driven persona development",
    "year": "2025",
    "doi": "https://doi.org/10.1016/j.ijhcs.2025.103445",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "data analysis"
    ],
    "silicon_sampling": null,
    "domain": [
      "HCI"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo, GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Generative AI, with its large language models (LLMs), provides various opportunities for the development user-centric systems in human-computer interaction (HCI). Yet, use cases of LLMs in HCI are still scarce, calling for developing and evaluating real systems. We present PersonaCraft, a data-driven persona system using LLMs to address this need. The system analyzes a common source of user data - surveys - and generates personas, humanized representations of real segments in the data. By integrating LLMs with survey data analysis, PersonaCraft combines persona development and modern artificial intelligence methodologies to provide researchers and designers with user-centric insights from nearly any survey dataset about people. Various evaluations of the system, including with internal evaluators, general users (n = 127), and user experience professionals (n = 21), indicated that PersonaCraft personas scored high on all evaluation criteria of clarity, completeness, fluency, consistency, and credibility. The application of PersonaCraft can extend across range of domains, including user research and population-level people research."
  },
  {
    "id": "kalinin-2023-66",
    "citation": "Kalinin, K. (2023a). Generation of Synthetic Responses to Survey Questions Using GPT-3: A Case of Hard-to-Reach Members of Russian Elites (based on the Survey of Russian Elites). Social Science Research Network. https://dx.doi.org/10.2139/ssrn.4413145",
    "title": "Generation of Synthetic Responses to Survey Questions Using GPT-3: A Case of Hard-to-Reach Members of Russian Elites (based on the Survey of Russian Elites)",
    "year": "2023",
    "doi": "https://dx.doi.org/10.2139/ssrn.4413145",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": null,
    "population": [
      "Russia"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "The goal of this study is to use a large language model, such as GPT-3, to generate responses from hard-to-reach elite members to multiple-choice questions. The most relevant or data-consistent responses can then be used to infer potential responses from selected elite members and apply them in predictive modeling or evidence-based policy-making. Building on the work of Argyle et al. (2023), this paper develops a methodological framework for this generative approach and tests the ideas on a subset of questions from the Survey of Russian Elites by simulating responses from Russia’s President Vladimir Putin and opposition leader Alexei Navalny. The GPT-3’s Davinci model is the superior model compared to all other GPT-3 models and serves as the primary model for this paper. An additional analysis is conducted using the GPT-3’s Babbage model, fine-tuned to Vladimir Putin’s and Alexei Navalny’s texts. The findings suggest that, in general, language models provide meaningful results, but the original Davinci model outperforms the fine-tuned Babbage model."
  },
  {
    "id": "kalinin-2023-67",
    "citation": "Kalinin, K. (2023b). Improving GPT Generated Synthetic Samples with Sampling-Permutation Algorithm. Social Science Research Network. https://doi.org/10.2139/ssrn.4548937",
    "title": "Improving GPT Generated Synthetic Samples with Sampling-Permutation Algorithm",
    "year": "2023",
    "doi": "https://dx.doi.org/10.2139/ssrn.4548937",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": null,
    "population": [
      "Russia"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "The primary objective of this study is to leverage the capabilities of a large language model (LLM), such as GPT-3, to generate responses from elite individuals who are difficult to access. Similar to the work of Argyle et al. (2023), this study specifically focuses on the domain of multiple-choice questions. To address the issue of instability and hallucinations commonly associated with LLM, a novel algorithm, termed the “sampling-permutation algorithm”, has been developed and implemented. The efficacy of this algorithm is assessed by applying it to questions from the Survey of Russian Elites(Zimmerman, Rivera and Kalinin 2022). Notably, this study examines the generated responses from synthetic personas representing the Russian President Vladimir Putin and the opposition leader Alexei Navalny by conducting a validation study and exploring the effects of the war context on generated responses. My findings indicate that the proposed approach provides valuable insights, despite the presence of somewhat mixed results."
  },
  {
    "id": "kang-2023-68",
    "citation": "Kang, D., Park, J., Jo, Y., & Bak, J. (2023). From Values to Opinions: Predicting Human Behaviors and Stances Using Value-Injected Large Language Models. Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, 15539–15559. https://doi.org/10.18653/v1/2023.emnlp-main.961",
    "title": "From Values to Opinions: Predicting Human Behaviors and Stances Using Value-Injected Large Language Models",
    "year": "2023",
    "doi": "https://doi.org/10.18653/v1/2023.emnlp-main.961",
    "publication_type": "Conference Paper",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Llama"
    ],
    "llm": "ChatGPT, Llama 7B",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Being able to predict people’s opinions on issues and behaviors in realistic scenarios can  be helpful in various domains, such as politics and marketing. However, conducting largescale surveys like the European Social Survey  to solicit people’s opinions on individual issues  can incur prohibitive costs. Leveraging prior  research showing influence of core human values on individual decisions and actions, we  propose to use value-injected large language  models (LLM) to predict opinions and behaviors. To this end, we present Value Injection  Method (VIM), a collection of two methodsargument generation and question answeringdesigned to inject targeted value distributions  into LLMs via fine-tuning. We then conduct a  series of experiments on four tasks to test the effectiveness of VIM and the possibility of using  value-injected LLMs to predict opinions and  behaviors of people. We find that LLMs valueinjected with variations of VIM substantially  outperform the baselines. Also, the results suggest that opinions and behaviors can be better  predicted using value-injected LLMs than the  baseline approaches."
  },
  {
    "id": "karousos-2024-70",
    "citation": "Karousos, N., Vorvilas, G., Pantazi, D., & Verykios, V. (2024). A Hybrid Text Summarization Technique of Student Open-Ended Responses to Online Educational Surveys. Electronics, 13(18). https://doi.org/10.3390/electronics13183722",
    "title": "A Hybrid Text Summarization Technique of Student Open-Ended Responses to Online Educational Surveys",
    "year": "2024",
    "doi": "https://doi.org/10.3390/electronics13183722",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "data analysis"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o-mini",
    "interaction_approach": null,
    "language": [
      "Greek"
    ],
    "population": [
      "Greece"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "This study introduces a hybrid text summarization technique designed to enhance the analysis of qualitative feedback from online educational surveys. The technique was implemented at the Hellenic Open University (HOU) to tackle the challenges of processing large volumes of student feedback. The TextRank and Walktrap algorithms along with GPT-4o mini were used to analyze student comments regarding positive experiences, study challenges, and suggestions for improvement. The results indicate that students are satisfied with tutor–student interactions but concerns were raised about educational content and scheduling issues. To evaluate the proposed summarization approach, the G-Eval and DeepEval summarization metrics were employed, assessing the relevance, coherence, consistency, fluency, alignment, and coverage of the summaries. This research addresses the increasing demand for effective qualitative data analysis in higher education and contributes to ongoing discussions on student feedback in distance learning environments. By effectively summarizing open-ended responses, universities can better understand student experiences and make informed decisions to improve the educational process."
  },
  {
    "id": "ke-2024-73",
    "citation": "Ke, P. F., & Ng, K. C. (2024). Human-AI Synergy in Survey Development: Implications from Large Language Models in Business and Research. ACM Transactions on Management Information Systems. https://doi.org/10.1145/3700597",
    "title": "Human-AI Synergy in Survey Development: Implications from Large Language Models in Business and Research",
    "year": "2024",
    "doi": "https://doi.org/10.1145/3700597",
    "publication_type": "Conference Paper",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "Llama",
      "Claude",
      "Gemini",
      "Mixtral"
    ],
    "llm": "Claude, Claude-2, Claude-3, Gemini-1, Gemini-1.5, GPT-3.5-Turbo, GPT-4o, Llama, Llama-2 7B, Mixtral, MythoMax",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "Other"
    ],
    "abstract": "This study examines the novel integration of Large Language Models (LLMs) into the survey development process in business and research through the development and evaluation of the Behavioral Research ASSistant (BRASS) Bot. We first analyzed the traditional scale development process to identify tasks suitable for LLM integration, including both human-in-the-loop and automated LLM data collection methods. Following this analysis, we developed the details of BRASS Bot, incorporating design principles of falsifiability and reproducibility. We then conducted a comprehensive evaluation of the BRASS Bot across a diverse set of LLMs, including GPT, Claude, Gemini, and Llama, to assess its usability, validity, and reliability. We further demonstrated the practical utility of the BRASS Bot by conducting a user study and a predictive validity simulation. Our research presents both theoretical and practical implications. The augmentation approach of the BRASS Bot enriches the theoretical foundations of behavioral constructs by identifying previously overlooked patterns. Additionally, the BRASS Bot offers significant time and resource efficiency gains while enhancing scale validity. Our work lays the foundation for future research on the broader application of LLMs as both assistants and collaborators in survey analysis and behavioral research design and execution, highlighting their potential for a transformative impact on the field."
  },
  {
    "id": "kim-2023-75",
    "citation": "Kim, J., & Lee, B. (2023). AI-Augmented Surveys: Leveraging Large Language Models and Surveys for Opinion Prediction. https://doi.org/10.48550/arXiv.2305.09620",
    "title": "AI-Augmented Surveys: Leveraging Large Language Models and Surveys for Opinion Prediction",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2305.09620",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "imputation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "Alpaca"
    ],
    "llm": "Alpaca 7B, GPT-J 6b, RoBERTa-large",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Large language models (LLMs) that produce human-like responses have begun to revolutionize research practices in the social sciences. This paper shows how we can integrate LLMs and social surveys to accurately predict individual responses to survey questions that were not asked before. We develop a novel methodological framework to personalize LLMs by considering the meaning of survey questions derived from their text, the latent beliefs of individuals inferred from their response patterns, and the temporal contexts across different survey periods through fine-tuning LLMs with survey data. Using the General Social Survey from 1972 to 2021, we show that the fine-tuned model based on Alpaca-7b can predict individual responses to survey questions that are partially missing as well as entirely missing. The remarkable prediction capabilities allow us to fill in missing trends with high confidence and pinpoint when public attitudes changed, such as the rising support for same-sex marriage. We discuss practical constraints, socio-demographic representation, and ethical concerns regarding individual autonomy and privacy when using LLMs for opinion prediction. This study demonstrates that LLMs and surveys can mutually enhance each other’s capabilities: LLMs broaden survey potential, while surveys improve the alignment of LLMs."
  },
  {
    "id": "kim-2024-76",
    "citation": "Kim, S., Kim, K., & Wonjeong Jo, C. (2024). Accuracy of a large language model in distinguishing anti- and pro-vaccination messages on social media: The case of human papillomavirus vaccination. Preventive Medicine Reports, 42, 102723. https://doi.org/10.1016/j.pmedr.2024.102723",
    "title": "Accuracy of a large language model in distinguishing anti- and pro-vaccination messages on social media: The case of human papillomavirus vaccination",
    "year": "2024",
    "doi": "https://doi.org/10.1016/j.pmedr.2024.102723",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Objective: Vaccination has engendered a spectrum of public opinions, with social media acting as a crucial platform for health-related discussions. The emergence of artificial intelligence technologies, such as large language models (LLMs), offers a novel opportunity to efficiently investigate public discourses. This research assesses the accuracy of ChatGPT, a widely used and freely available service built upon an LLM, for sentiment analysis to discern different stances toward Human Papillomavirus (HPV) vaccination. Methods: Messages related to HPV vaccination were collected from social media supporting different message formats: Facebook (long format) and Twitter (short format). A selection of 1,000 human-evaluated messages was input into the LLM, which generated multiple response instances containing its classification results. Accuracy was measured for each message as the level of concurrence between human and machine decisions, ranging between 0 and 1. Results: Average accuracy was notably high when 20 response instances were used to determine the machine decision of each message: .882 (SE = .021) and .750 (SE = .029) for anti- and pro-vaccination long-form; .773 (SE = .027) and .723 (SE = .029) for anti- and pro-vaccination short-form, respectively. Using only three or even one instance did not lead to a severe decrease in accuracy. However, for long-form messages, the language model exhibited significantly lower accuracy in categorizing pro-vaccination messages than anti-vaccination ones. Conclusions: ChatGPT shows potential in analyzing public opinions on HPV vaccination using social media content. However, understanding the characteristics and limitations of a language model within specific public health contexts remains imperative."
  },
  {
    "id": "kim-2024-77",
    "citation": "Kim, S., Jeong, J., Han, J. S., & Shin, D. (2024). LLM-Mirror: A Generated-Persona Approach for Survey Pre-Testing. arXiv. https://doi.org/10.48550/arXiv.2412.03162",
    "title": "LLM-Mirror: A Generated-Persona Approach for Survey Pre-Testing",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2412.03162",
    "publication_type": "Preprint",
    "phase": [
      "pre-data collection",
      "data collection"
    ],
    "task": [
      "pretesting",
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "consumer research"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "German",
      "Spanish"
    ],
    "population": [
      "Germany"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Surveys are widely used in social sciences to understand human behavior, but their implementation often involves iterative adjustments that demand significant effort and resources. To this end, researchers have increasingly turned to large language models (LLMs) to simulate human behavior. While existing studies have focused on distributional similarities, individual-level comparisons remain underexplored. Building upon prior work, we investigate whether providing LLMs with respondents' prior information can replicate both statistical distributions and individual decision-making patterns using Partial Least Squares Structural Equation Modeling (PLS-SEM), a well-established causal analysis method. We also introduce the concept of the LLM-Mirror, user personas generated by supplying respondent-specific information to the LLM. By comparing responses generated by the LLM-Mirror with actual individual survey responses, we assess its effectiveness in replicating individual-level outcomes. Our findings show that: (1) PLS-SEM analysis shows LLM-generated responses align with human responses, (2) LLMs, when provided with respondent-specific information, are capable of reproducing individual human responses, and (3) LLM-Mirror responses closely follow human responses at the individual level. These findings highlight the potential of LLMs as a complementary tool for pre-testing surveys and optimizing research design."
  },
  {
    "id": "kim-2022-78",
    "citation": "Kim, Y.-H., Kim, S., Chang, M., & Lee, S.-W. (2022). Leveraging Pre-Trained Language Models to Streamline Natural Language Interaction for Self-Tracking. https://doi.org/10.48550/arXiv.2205.15503",
    "title": "Leveraging Pre-Trained Language Models to Streamline Natural Language Interaction for Self-Tracking",
    "year": "2022",
    "doi": "https://doi.org/10.48550/arXiv.2205.15503",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "pre-processing"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": null,
    "population": null,
    "data_type": [
      "Other"
    ],
    "abstract": "Current natural language interaction for self-tracking tools largely depends on bespoke implementation optimized for a specific tracking theme and data format, which is neither generalizable nor scalable to a tremendous design space of self-tracking. However, training machine learning models in the context of self-tracking is challenging due to the wide variety of tracking topics and data formats. In this paper, we propose a novel NLP task for self-tracking that extracts close- and open-ended information from a retrospective activity log described as a plain text, and a domain-agnostic, GPT-3-based NLU framework that performs this task. The framework augments the prompt using synthetic samples to transform the task into 10-shot learning, to address a cold-start problem in bootstrapping a new tracking topic. Our preliminary evaluation suggests that our approach significantly outperforms the baseline QA models. Going further, we discuss future application domains toward which the NLP and HCI researchers can collaborate."
  },
  {
    "id": "kitadai-2024-79",
    "citation": "Kitadai, A., Ogawa, K., & Nishino, N. (2024). Examining the Feasibility of Large Language Models as Survey Respondents. 2024 IEEE International Conference on Big Data (BigData), 3858–3864. https://doi.org/10.1109/BigData62323.2024.10825497",
    "title": "Examining the Feasibility of Large Language Models as Survey Respondents",
    "year": "2024",
    "doi": "https://doi.org/10.1109/BigData62323.2024.10825497",
    "publication_type": "Conference Paper",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o-mini",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Japan"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "This study examines the potential of large language models (LLMs) to substitute for human respondents in survey research. Surveys serve as essential tools in fields like social science, marketing, and policy-making; however, traditional methods often require considerable time and costs. LLMs present a promising alternative to mitigate these burdens, though their reliability—particularly outside of U.S. contexts—remains uncertain. This study focuses on surveys conducted in Japan, comparing the responses generated by LLMs to those of actual Japanese participants. Our analysis reveals notable discrepancies due to inherent biases in LLMs, though adjusting the models to better align with specific personas can partially enhance the accuracy of simulated responses. We emphasize the need for further research to fully understand the capabilities and limitations of LLMs, aiming to refine their application in diverse areas such as social sciences, marketing, and policy decision-making."
  },
  {
    "id": "koehl-2023-80",
    "citation": "Koehl, D., & Vangsness, L. (2023). Measuring Latent Trust Patterns in Large Language Models in the Context of Human-AI Teaming. Proceedings of the Human Factors and Ergonomics Society Annual Meeting, 67(1), 504–511. https://doi.org/10.1177/21695067231192869",
    "title": "Measuring Latent Trust Patterns in Large Language Models in the Context of Human-AI Teaming",
    "year": "2023",
    "doi": "https://doi.org/10.1177/21695067231192869",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "DistilRoBERTa, GPT-3, SBERT",
    "interaction_approach": null,
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Qualitative self-report methods such as think-aloud procedures and open-ended response questions can provide valuable data to human factors research. These measures come with analytic weaknesses, such as researcher bias, intra- and inter-rater reliability concerns, and time-consuming coding protocols. A possible solution exists in the latent semantic patterns that exist in machine learning large language models. These semantic patterns could be used to analyze qualitative responses. This exploratory research compared the statistical quality of automated sentence coding using large language models to the benchmarks of self-report and behavioral measures within the context of trust in automation research. The results indicated that three large language models show promise as tools for analyzing qualitative responses. The study also provides insight on minimum sample sizes for model creation and offers recommendations for further validating the robustness of large language models as research tools."
  },
  {
    "id": "konstantis-2023-83",
    "citation": "Konstantis, K., Georgas, A., Faras, A., Georgas, K., & Tympas, A. (2023). Ethical considerations in working with ChatGPT on a questionnaire about the future of work with ChatGPT. AI and Ethics, 4(4), 1335–1344. https://doi.org/10.1007/s43681-023-00312-6",
    "title": "Ethical considerations in working with ChatGPT on a questionnaire about the future of work with ChatGPT",
    "year": "2023",
    "doi": "https://doi.org/10.1007/s43681-023-00312-6",
    "publication_type": "Journal Article",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "ChatGPT",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "The prospect of the use of Large Language Models, like ChatGPT, in work environments raises important questions regarding both the potential for a dramatic change in the quality of jobs and the risk of unemployment. The answers to these questions, but, also, the posing of questions to be answered, may involve the use of ChatGPT. This, in turn, may give rise to a series of ethical considerations. The article seeks to identify such considerations by presenting a research on a questionnaire that was developed by means of ChatGPT before it was answered, first, by a group of humans (H) and, then, through the use of a machine (M), ChatGPT. The language model was actually used to respond to the questionnaire twice. First, based on its data (M1), and, second, based on it being asked to imitate a human (M2). Based on the significant differences between the H and M answers, and, further, on the noticeable differences occurring within the M answers (the differences between the M1 and M2 answers), the article concludes by registering a cluster of three ethical considerations."
  },
  {
    "id": "kousathana-2023-84",
    "citation": "Kousathana, E., Verberne, S., & Wijnholds, G. (2023). Opinionated content summarization with Transformer architectures [Master Thesis, Leiden University]. https://www.semanticscholar.org/paper/ff1a6276809ff612180acaf80e9a82ea78034e4d",
    "title": "Opinionated content summarization with Transformer architectures",
    "year": "2023",
    "doi": "https://www.semanticscholar.org/paper/ff1a6276809ff612180acaf80e9a82ea78034e4d",
    "publication_type": "Thesis",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "data analysis"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "BART"
    ],
    "llm": "BART, PRIMERA, SUMM-N",
    "interaction_approach": [
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Discussions are more prevalent than ever on online spaces. Automatic summarization can be a tool to provide valuable insights on public opinion and accelerate decision making. Recent advances in abstractive summarization research that leverage pre-trained large language models led to summarizers that generate fluent, human-like abstracts. However, online discussions are an under-investigated domain, mainly due to the lack of big training datasets with human curated summaries. In this research we are investigating the performance of some state-of-the-art summarization models on the online discussion domain and specifically on opinionated content. We focus on two architecture paradigms: Multi–document summarization models and Long–input summarization models. For all the models we are using pre-trained checkpoints on variants of masked language modelling tasks. We fine-tune these models on a dataset curated with comments from the New York Times comment section and their respective human curated summaries as ground truth. Subsequently, we evaluate the fine-tuned models on the test subset of the NYT dataset and another dataset containing comments from The Guardian. Our evaluation is quantitative and we pick a small sample of examples that we examine closer in a qualitative manner. Eventually, we observed that Long-input summarization techniques perform better, however the frequency of highly extractive input, hallucinated output and low rate of combining opinions and views points showcased from all the models, leads us to believe that tailored datasets and methods could be explored in the future."
  },
  {
    "id": "kozlowski-2024-85",
    "citation": "Kozlowski, A. C., Kwon, H., & Evans, J. A. (2024). In Silico Sociology: Forecasting COVID-19 Polarization with Large Language Models. arXiv. https://doi.org/10.48550/arXiv.2407.11190",
    "title": "In Silico Sociology: Forecasting COVID-19 Polarization with Large Language Models",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2407.11190",
    "publication_type": "Preprint",
    "phase": [
      "data collection",
      "post-data collection"
    ],
    "task": [
      "data generation",
      "classification"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": [
      "public opinion",
      "health"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "By training deep neural networks on massive archives of digitized text, large language models (LLMs) learn the complex linguistic patterns that constitute historic and contemporary discourses. We argue that LLMs can serve as a valuable tool for sociological inquiry by enabling accurate simulation of respondents from specific social and cultural contexts. Applying LLMs in this capacity, we reconstruct the public opinion landscape of 2019 to examine the extent to which the future polarization over COVID-19 was prefigured in existing political discourse. Using an LLM trained on texts published through 2019, we simulate the responses of American liberals and conservatives to a battery of pandemic-related questions. We find that the simulated respondents reproduce observed partisan differences in COVID-19 attitudes in 84% of cases, significantly greater than chance. Prompting the simulated respondents to justify their responses, we find that much of the observed partisan gap corresponds to differing appeals to freedom, safety, and institutional trust. Our findings suggest that the politicization of COVID-19 was largely consistent with the prior ideological landscape, and this unprecedented event served to advance history along its track rather than change the rails."
  },
  {
    "id": "laraspata-2024-87",
    "citation": "Laraspata, L., Cardilli, F., Castellano, G., & Vessio, G. (2024). Enhancing Human Capital Management through GPT-driven Questionnaire Generation. NL4AI2024. NL4AI 2024: Eighth Workshop on Natural Language for Artificial Intelligence. https://www.semanticscholar.org/paper/eb843a4eb3a6ec2cbc6fa97049e31fc96eaf34cd",
    "title": "Enhancing Human Capital Management through GPT-driven Questionnaire Generation",
    "year": "2024",
    "doi": "https://www.semanticscholar.org/paper/eb843a4eb3a6ec2cbc6fa97049e31fc96eaf34cd",
    "publication_type": "Conference Paper",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": [
      "HR"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo, GPT-4-Turbo",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "Survey questionnaires capture employee insights and guide strategic decision-making in Human Capital Management. This study explores the application of the GPT-3.5-Turbo and GPT-4-Turbo models for the automated generation of HR-related questionnaires, addressing a significant gap in the literature. We developed a novel dataset of HR survey questions and evaluated the models’ performance using different task configurations, including zero-shot and one-shot prompting with various hyperparameter settings. The generated questionnaires were assessed for instruction alignment, syntactic and lexical diversity, semantic similarity to human-authored questions, and topic diversity, or serendipity. In collaboration with Talentia Software, we additionally examined the indistinguishability of AI-generated content from human-created counterparts. Results indicate that both models produce questionnaires with high serendipity and intra-questionnaire diversity. However, the indistin-guishability test revealed that human evaluators could still distinguish AI-generated content, particularly noting differences in language style and answer variability. These findings underscore the potential of GPT-driven tools in automating questionnaire generation while highlighting the need for further refinement to achieve more human-like outputs. The source code, data, and samples of generated content are publicly available at: https://github.com/llaraspata/HRMQuestionnaireGenerationUsingLLM."
  },
  {
    "id": "larsen-2024-88",
    "citation": "Larsen, K. R., Yan, S., & Lukyanenko, R. (2024). Integrating LLMs and Psychometrics: Global Construct Validity. ICIS 2024 Proceedings. International Conference on Interaction Sciences. https://aisel.aisnet.org/icis2024/adv_theory/adv_theory/2",
    "title": "Integrating LLMs and Psychometrics: Global Construct Validity",
    "year": "2024",
    "doi": "https://aisel.aisnet.org/icis2024/adv_theory/adv_theory/2",
    "publication_type": "Conference Paper",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "Mistral"
    ],
    "llm": "GPT-4, Mistral, ember",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "The psychometric approach in IS offers a foundational framework for a broad spectrum of research endeavors, typically relying on construct validation to confirm that a series of indicators accurately measures the intended construct. However, a longstanding issue with construct validity, unaddressed since its introduction by Cronbach and Meehl in 1955, is that it is evaluated using study-specific response data without comparison to constructs outside the study. This oversight (or, rather, incapability) has significant implications. We introduce a large language model combined with principal components analysis (PCA) and develop the Validity Lodestar application. This approach lays the groundwork for developing more accurate and reliable theoretical models, marking a significant leap forward in the IS discipline’s methodological capabilities, making IS the first psychometric discipline with the capability to properly evaluate construct validity."
  },
  {
    "id": "laverghetta-2023-89",
    "citation": "Laverghetta, A., & Licato, J. (2023). Generating Better Items for Cognitive Assessments Using Large Language Models. Proceedings of the 18th Workshop on Innovative Use of NLP for Building Educational Applications (BEA 2023), 414–428. https://doi.org/10.31234/osf.io/rqa9m",
    "title": "Generating Better Items for Cognitive Assessments Using Large Language Models",
    "year": "2023",
    "doi": "https://doi.org/10.18653/v1/2023.bea-1.34",
    "publication_type": "Conference Paper",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "Other"
    ],
    "abstract": "Writing high-quality test questions (items) is critical to building educational measures but has traditionally also been a time-consuming process. One promising avenue for alleviating this is automated item generation, whereby methods from artificial intelligence (AI) are used to generate new items with minimal human intervention. Researchers have explored using large language models (LLMs) to generate new items with equivalent psychometric properties to human-written ones. But can LLMs generate items with improved psychometric properties, even when existing items have poor validity evidence? We investigate this using items from a natural language inference (NLI) dataset. We develop a novel prompting strategy based on selecting items with both the best and worst properties to use in the prompt and use GPT-3 to generate new NLI items. We find that the GPT-3 items show improved psychometric properties in many cases, whilst also possessing good content, convergent and discriminant validity evidence. Collectively, our results demonstrate the potential of employing LLMs to ease the item development process and suggest that the careful use of prompting may allow for iterative improvement of item quality."
  },
  {
    "id": "lebrun-2023-90",
    "citation": "Lebrun, B., Temtsin, S., Vonasch, A., & Bartneck, C. (2023). Detecting The Corruption Of Online Questionnaires By Artificial Intelligence. Frontiers in Robotics and AI, 10. https://doi.org/10.3389/frobt.2023.1277635",
    "title": "Detecting The Corruption Of Online Questionnaires By Artificial Intelligence",
    "year": "2023",
    "doi": "https://doi.org/10.3389/frobt.2023.1277635",
    "publication_type": "Journal Article",
    "phase": [
      "data collection",
      "post-data collection"
    ],
    "task": [
      "data generation",
      "quality control"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "for generation: GPT-3.5, Undetectable.ai; (for detection: Undetectable.ai, GPTZero, Copyleaks, Sapling, Contentscale – unclear whether LLM-based)",
    "interaction_approach": null,
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "Online questionnaires that use crowd-sourcing platforms to recruit participants have become commonplace, due to their ease of use and low costs. Artificial Intelligence (AI) based Large Language Models (LLM) have made it easy for bad actors to automatically fill in online forms, including generating meaningful text for open-ended tasks. These technological advances threaten the data quality for studies that use online questionnaires. This study tested if text generated by an AI for the purpose of an online study can be detected by both humans and automatic AI detection systems. While humans were able to correctly identify authorship of text above chance level (76 percent accuracy), their performance was still below what would be required to ensure satisfactory data quality. Researchers currently have to rely on the disinterest of bad actors to successfully use open-ended responses as a useful tool for ensuring data quality. Automatic AI detection systems are currently completely unusable. If AIs become too prevalent in submitting responses then the costs associated with detecting fraudulent submissions will outweigh the benefits of online questionnaires. Individual attention checks will no longer be a sufficient tool to ensure good data quality. This problem can only be systematically addressed by crowd-sourcing platforms. They cannot rely on automatic AI detection systems and it is unclear how they can ensure data quality for their paying clients."
  },
  {
    "id": "lee-2023-91",
    "citation": "Lee, P., Fyffe, S., Son, M., Jia, Z., & Yao, Z. (2023). A Paradigm Shift from “Human Writing” to “Machine Generation” in Personality Test Development: An Application of State-of-the-Art Natural Language Processing. Journal of Business and Psychology, 38(1), 163–190. https://doi.org/10.1007/s10869-022-09864-6",
    "title": "A Paradigm Shift from “Human Writing” to “Machine Generation” in Personality Test Development: an Application of State-of-the-Art Natural Language Processing",
    "year": "2023",
    "doi": "https://doi.org/10.1007/s10869-022-09864-6",
    "publication_type": "Journal Article",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "Natural language processing (NLP) techniques have become increasingly popular in areas of psychological assessment. Recently, researchers have sought to use NLP techniques for automatic item generation (AIG) in the personality domain. Nevertheless, NLP-based approaches to personality AIG are new and many questions are still unanswered. Our research builds upon previous illustrations of AIG in personality in several ways. First, we applied a prompt-based generative pre-trained transformer 3 (GPT-3) to generate personality items. This approach provides several practical advantages for researchers and practitioners compared to previous AIG approaches. Second, we thoroughly compared various psychometric properties between machine- and human-authored personality items. Lastly, we examined the measurement invariance of machine-authored personality items between gender groups to ensure fair organizational decision-making. Results revealed that the machine-authored personality items provided good psychometric properties and little measurement biases between genders. Practical considerations, contributions, and future research directions of the AIG technique for non-cognitive tests were discussed."
  },
  {
    "id": "lee-2024-92",
    "citation": "Lee, S., Peng, T.-Q., Goldberg, M. H., Rosenthal, S. A., Kotcher, J. E., Maibach, E. W., & Leiserowitz, A. (2024). Can large language models estimate public opinion about global warming? An empirical assessment of algorithmic fidelity and bias. PLOS Climate, 3(8), e0000429. https://doi.org/10.1371/journal.pclm.0000429",
    "title": "Can Large Language Models Capture Public Opinion about Global Warming? An Empirical Assessment of Algorithmic Fidelity and Bias",
    "year": "2024",
    "doi": "https://doi.org/10.1371/journal.pclm.0000429",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT 3.5-Turbo-16K, GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Large language models (LLMs) can be used to estimate human attitudes and behavior, including measures of public opinion, a concept referred to as algorithmic fidelity. This study assesses the algorithmic fidelity and bias of LLMs in estimating public opinion about global warming. LLMs were conditioned on demographics and/or psychological covariates to simulate survey responses. Findings indicate that LLMs can effectively reproduce presidential voting behaviors but not global warming opinions unless the issue relevant covariates are included. When conditioned on both demographic and covariates, GPT-4 demonstrates improved accuracy, ranging from 53% to 91%, in predicting beliefs and attitudes about global warming. Additionally, we find an algorithmic bias that underestimates the global warming opinions of Black Americans. While highlighting the potential of LLMs to aid social science research, these results underscore the importance of conditioning, model selection, survey question format, and bias assessment when employing LLMs for survey simulation."
  },
  {
    "id": "leistner-2024-93",
    "citation": "Leistner, M., Hommel, B. E., Wendt, L. P., & Leising, D. (2024). Properties of Person Descriptors in the Natural German Language: A Preregistered Replication and Extension. PsyArXiv. https://doi.org/10.31234/osf.io/s8h7u",
    "title": "Properties of Person Descriptors in the Natural German Language: A Preregistered Replication and Extension",
    "year": "2024",
    "doi": "https://doi.org/10.31234/osf.io/s8h7u",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "Hommel's transformer encoder model; GPT-4o",
    "interaction_approach": [
      "zero-shot",
      "fine-tuning"
    ],
    "language": [
      "German"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "Understanding language is crucial to psychological research, as it is the basis for almost all psychological measurements. Building on previous work, we conducted a preregistered replication study, analyzing 874 person-descriptive terms generated by 187 participants using a free response format. These terms were rated on social desirability, observability, importance, abstractness, base rate, and stability by approximately human 15 raters each (n = 456). Key findings were replicated, including a bimodal distribution of social desirability, a greater number of negative vs. positive terms, and an U-shaped relationship between importance and social desirability. Furthermore, we show that human ratings of social desirability can be closely approximated by synthetic ratings derived from either a fine-tuned encoder model or the general-purpose transformer model GPT-4o. However, when investigating GPT-4o's performance in approximating human ratings of the other properties, it was mediocre at best, and its performance in approximating abstractness was poor. This suggests that there is still need for improvement in AI-applications for natural language processing."
  },
  {
    "id": "li-2024-94",
    "citation": "Li, L., Hu, S., Dai, Y., Deng, M., Momeni, P., Laverghetta, G., Fan, L., Ma, Z., Wang, X., Ma, S., Ligatti, J., & Hemphill, L. (2024). Toward satisfactory public accessibility: A crowdsourcing approach through online reviews to inclusive urban design. arXiv. https://doi.org/10.48550/arXiv.2409.08459",
    "title": "Toward satisfactory public accessibility: A crowdsourcing approach through online reviews to inclusive urban design",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2409.08459",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "Llama",
      "BERT"
    ],
    "llm": "BERT, RoBERTa, Llama-3 8B",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "reviews"
    ],
    "abstract": "As urban populations grow, the need for accessible urban design has become urgent. Traditional survey methods for assessing public perceptions of accessibility are often limited in scope. Crowdsourcing via online reviews offers a valuable alternative to understanding public perceptions, and advancements in large language models can facilitate their use. This study uses Google Maps reviews across the United States and fine-tunes Llama 3 model with the Low-Rank Adaptation technique to analyze public sentiment on accessibility. At the POI level, most categories – restaurants, retail, hotels, and healthcare – show negative sentiments. Socio-spatial analysis reveals that areas with higher proportions of white residents and greater socioeconomic status report more positive sentiment, while areas with more elderly, highly-educated residents exhibit more negative sentiment. Interestingly, no clear link is found between the presence of disabilities and public sentiments. Overall, this study highlights the potential of crowdsourcing for identifying accessibility challenges and providing insights for urban planners."
  },
  {
    "id": "li-2025-95",
    "citation": "Li, R., Zhao, L., Xie, Z., Ji, C., Mo, J., Yang, Z., & Feng, Y. (2025). Mining and Analyzing the Evolution of Public Opinion in Extreme Disaster Events from Social Media: A Case Study of the 2022 Yingde Flood in China. In Natural Hazards Review (Vol. 26, Issue 1). American Society of Civil Engineers. https://doi.org/10.1061/NHREFO.NHENG-2107",
    "title": "Mining and Analyzing the Evolution of Public Opinion in Extreme Disaster Events from Social Media: A Case Study of the 2022 Yingde Flood in China",
    "year": "2025",
    "doi": "https://doi.org/10.1061/NHREFO.NHENG-2107",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "Chinese"
    ],
    "population": [
      "China"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Natural disasters have caused significant economic losses and casualties. Obtaining detailed disaster information and understanding public opinion during disasters are crucial for devising effective policies and ensuring timely disaster responses. With the widespread use of social media, it has become an important channel for extracting disaster information. However, accurately obtaining and revealing public opinion from social media remains challenging. This study combines the biterm topic model and support vector machine to analyze topic features. Additionally, sentiment features are analyzed using the Generative Pre-trained Transformer-3.5 model. These techniques are employed to build a social media-based flood information mining model capable of detecting the spatiotemporal distribution of public sentiment and discussion topics, including significant events impacting public sentiment. Using the 2022 Yingde flood as a case study, we explored the evolutionary patterns of public opinion on floods across three dimensions: time, space, and content. The study also explored the correlation between flooding and public opinion through geographic visualization and statistical analysis. The results indicated a precision of 89.2% and 80.2% for topic and sentiment classification, respectively. Temporally, the public response to flooding was primarily concentrated during heavy rainfall and flooding, varying with disaster severity. Furthermore, significant events or statements by public figures can greatly influence public responses to flooding. Spatially, the public response to flooding focused mainly in major urban areas and severely affected regions. In terms of content, a strong correlation was revealed between sentiments, topic distribution, and the disaster scenario. The findings can be used to analyze disaster conditions and public opinion in depth, and as a supplement of existing methods of extracting disaster information, it can enhance situational awareness for disaster emergency management and provide a reference basis for emergency relief efforts."
  },
  {
    "id": "lin-2024-96",
    "citation": "Lin, H. (2024). Designing Domain-Specific Large Language Models: The Critical Role of Fine-Tuning in Public Opinion Simulation. arXiv. https://doi.org/10.48550/arXiv.2409.19308",
    "title": "Designing Domain-Specific Large Language Models: The Critical Role of Fine-Tuning in Public Opinion Simulation",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2409.19308",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o, GPT-4o-mini, GPT-4o1",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United Kingdom"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Large language models (LLMs) have transformed natural language processing, yet face challenges in specialized tasks such as simulating opinions on environmental policies. This paper introduces a novel fine-tuning approach that integrates socio-demographic data from the UK Household Longitudinal Study, uniquely using profiling factors, such as age, gender, income, education, and region. This method enhances the accuracy and representation of generated views. By emulating diverse synthetic profiles, the fine-tuned models significantly outperform pre-trained counterparts, achieving measurable improvements in capturing demographic nuances. Evaluation metrics, including Chi-Squared, Cosine Similarity, Jaccard Index, and KL-divergence, reveal a strong alignment between synthetic and real-world opinions. This work demonstrates the potential of fine-tuned LLMs tailored to societal contexts to enable more ethical and precise policy simulations. Its broader implications include deploying LLMs in domains like healthcare and education, fostering inclusive and data-driven decision-making in both research and practice."
  },
  {
    "id": "liu-2023-97",
    "citation": "Liu, A., & Sun, M. (2023). From Voices to Validity: Leveraging Large Language Models (LLMs) for Textual Analysis of Policy Stakeholder Interviews. arXiv. https://doi.org/10.48550/arXiv.2312.01202",
    "title": "From Voices to Validity: Leveraging Large Language Models (LLMs) for Textual Analysis of Policy Stakeholder Interviews",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2312.01202",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Obtaining stakeholders' diverse experiences and opinions about current policy in a timely manner is crucial for policymakers to identify strengths and gaps in resource allocation, thereby supporting effective policy design and implementation. However, manually coding even moderately sized interview texts or open-ended survey responses from stakeholders can often be labor-intensive and time-consuming. This study explores the integration of Large Language Models (LLMs)–like GPT-4–with human expertise to enhance text analysis of stakeholder interviews regarding K-12 education policy within one U.S. state. Employing a mixed-methods approach, human experts developed a codebook and coding processes as informed by domain knowledge and unsupervised topic modeling results. They then designed prompts to guide GPT-4 analysis and iteratively evaluate different prompts' performances. This combined human-computer method enabled nuanced thematic and sentiment analysis. Results reveal that while GPT-4 thematic coding aligned with human coding by 77.89% at specific themes, expanding to broader themes increased congruence to 96.02%, surpassing traditional Natural Language Processing (NLP) methods by over 25%. Additionally, GPT-4 is more closely matched to expert sentiment analysis than lexicon-based methods. Findings from quantitative measures and qualitative reviews underscore the complementary roles of human domain expertise and automated analysis as LLMs offer new perspectives and coding consistency. The human-computer interactive approach enhances efficiency, validity, and interpretability of educational policy research."
  },
  {
    "id": "liu-2024-98",
    "citation": "Liu, Q., Yao, Y., Evans, G., Huang, R., & Jin, M. (2024). Machine Intelligence and Human Intelligence: Exploring the Potentials of Machine Learning Based Approaches to Qualitative Survey Data Analysis. Proceedings of the Canadian Engineering Education Association (CEEA). https://doi.org/10.24908/pceea.2024.18579",
    "title": "Machine Intelligence and Human Intelligence: Exploring the Potentials of Machine Learning Based Approaches to Qualitative Survey Data Analysis",
    "year": "2024",
    "doi": "https://doi.org/10.24908/pceea.2024.18579",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "BERT, ChatGPT",
    "interaction_approach": null,
    "language": [
      "English"
    ],
    "population": [
      "Canada"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "This paper aims to explore new methods for qualitative data analysis in the digital age. We applied three machine learning (ML)-based methods—topic modelling via LDA and BERTopic, and generative AI-assisted inductive coding—in conjunction with the conventional thematic analysis method, to a set of qualitative data collected from a student survey over four years at a Canadian engineering school. The analysis processes as well as the outputs generated from the four methods were compared and evaluated against the trustworthiness criteria for quality in qualitative research. We observe that the ML-based approaches to analyzing qualitative survey data offer some levels of credibility and transferability while dependability and confirmability vary by method; and human intelligence of researchers needs to be involved to enhance the quality of ML-based analysis. Moving forward, we recommend a human-AI collaborative approach that combines ML-based inductive coding and human intelligence-based deductive coding processes. This new approach can facilitate and accelerate qualitative research and foster cross-disciplinary collaboration in qualitative data analysis."
  },
  {
    "id": "lupo-2024-99",
    "citation": "Lupo, R., Vitale, E., Panzanaro, L., Lezzi, A., Lezzi, P., Botti, S., Rubbi, I., Carvello, M., Calabrò, A., Puglia, A., Conte, L., & Nunzio, G. D. (2024). Effects of Long COVID on Psycho-Physical Conditions in the Italian Population: A Statistical and Large Language Model Combined Description. European Journal of Investigation in Health, Psychology and Education, 14(5), 1153–1170. https://doi.org/10.3390/ejihpe14050076",
    "title": "Effects of Long COVID on Psycho-Physical Conditions in the Italian Population: A Statistical and Large Language Model Combined Description",
    "year": "2024",
    "doi": "https://doi.org/10.3390/ejihpe14050076",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "data analysis"
    ],
    "silicon_sampling": null,
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "Alpaca"
    ],
    "llm": "Alpaca",
    "interaction_approach": null,
    "language": [
      "Italian"
    ],
    "population": [
      "Italy"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Background: Long COVID refers to the persistence or development of signs and symptoms well after the acute phase of COVID-19. Objective of the study: To investigate the long-term outcomes of the SARS-CoV-2 infection in terms of psychological, social, and relational consequences within the Italian population. Materials and methods: We conducted an observational, cross-sectional, and multicenter study using an online questionnaire distributed to a sample of the Italian population. By utilizing the Short Form 12 Health Survey (SF-12) and the Hikikomori scale, we assessed perceived quality of life and social isolation, respectively. The questionnaire also included an open-answer question: “What will you remember about the pandemic period?”. We used generative artificial intelligence to analyze and summarize the corresponding answers. Results: A total of 1097 people participated in this study. A total of 79.3% (n = 870) of participants declared that they had been hospitalized and 62.8% (n = 689) received home care. Physical symptoms included headaches (43%, n = 472) and asthma (30.4%, n = 334). Additionally, 29.2% (n = 320) developed an addiction during the pandemic and, among these, 224 claimed internet addiction while 73 declared an emotional addiction. Furthermore, 51.8% (n = 568) experienced limitations in carrying out daily life activities. According to the Hikikomori scale, participants with positive SARS-CoV-2 infection exhibited higher levels of isolation compared to the others (p < 0.001). Participants without COVID-19 showed higher levels of emotional support (p < 0.001). Our semiautomatic analysis of the open-ended responses, obtained by a procedure based on a free large language model, allowed us to deduce and summarize the main feelings expressed by the interviewees regarding the pandemic. Conclusions: The data collected emphasize the urgent need to investigate the consequences of long COVID in order to implement interventions to support psychological well-being."
  },
  {
    "id": "ma-2024-100",
    "citation": "Ma, B., Yoztyurk, B., Haensch, A.-C., Wang, X., Herklotz, M., Kreuter, F., Plank, B., & Assenmacher, M. (2024). Algorithmic Fidelity of Large Language Models in Generating Synthetic German Public Opinions: A Case Study. https://doi.org/10.48550/arXiv.2412.13169",
    "title": "Algorithmic Fidelity of Large Language Models in Generating Synthetic German Public Opinions: A Case Study",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2412.13169",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "Llama",
      "Mixtral",
      "Gemma",
      "BERT"
    ],
    "llm": "Gemma 7B, Llama-2 13B, Mixtral, BERT",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "German"
    ],
    "population": [
      "Germany"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "In recent research, large language models (LLMs) have been increasingly used to investigate public opinions. This study investigates the algorithmic fidelity of LLMs, i.e., the ability to replicate the socio-cultural context and nuanced opinions of human participants. Using open-ended survey data from the German Longitudinal Election Studies (GLES), we prompt different LLMs to generate synthetic public opinions reflective of German subpopulations by incorporating demographic features into the persona prompts. Our results show that Llama performs better than other LLMs at representing subpopulations, particularly when there is lower opinion diversity within those groups. Our findings further reveal that the LLM performs better for supporters of left-leaning parties like The Greens and The Left compared to other parties, and matches the least with the right-party AfD. Additionally, the inclusion or exclusion of specific variables in the prompts can significantly impact the models' predictions. These findings underscore the importance of aligning LLMs to more effectively model diverse public opinions while minimizing political biases and enhancing robustness in representativeness."
  },
  {
    "id": "maceda-2023-101",
    "citation": "Maceda, L. L., Llovido, J. L., Artiaga, M. B., & Abisado, M. B. (2024). Classifying Sentiments on Social Media Texts: A GPT-4 Preliminary Study. Proceedings of the 2023 7th International Conference on Natural Language Processing and Information Retrieval, NLPIR ’23, 19–24. https://doi.org/10.1145/3639233.3639353",
    "title": "Classifying Sentiments on Social Media Texts: A GPT-4 Preliminary Study",
    "year": "2023",
    "doi": "https://doi.org/10.1145/3639233.3639353",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "BERT, mBERT, GPT-4",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot"
    ],
    "language": [
      "English",
      "Filipino",
      "Bicol"
    ],
    "population": [
      "Philippines"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "In today's digital age, social media has become a hub for people to express their thoughts and feelings. Sentiment classification discerns public opinions and trends to understand their sentiments towards a certain topic. Often, achieving accurate sentiment classifications in large datasets necessitate the use of human-annotated training data which can be costly and time-consuming. Large Language Models (LLMs) like the Generative Pre-trained models by OpenAI have surged in popularity due to its capabilities in understanding the given tasks. In this preliminary study, we report the performance of the latest OpenAI GPT-4 using zero- and one-shot learning approaches on classifying sentiments when fed with social media dataset. Notably, the latter approach written in English which mimics the instructions designed for human annotators, achieved a substantial agreement (k = 0.77) with human annotations, displaying high accuracy, precision, and recall accordingly even without explicit training data. Meanwhile, the fine-tuned mBERT resulted to lower evaluation scores than the GPT-4. Our findings provide foundational insights into the strengths and limitations of GPT-4 for sentiment classification in a social media dataset, setting the groundwork for broad future research in this field."
  },
  {
    "id": "mahmoudi-2024-102",
    "citation": "Mahmoudi, G., Behkamkia, B., & Eetemadi, S. (2024). Zero-Shot Stance Detection using Contextual Data Generation with LLMs. arXiv. https://doi.org/10.48550/arXiv.2405.11637",
    "title": "Zero-Shot Stance Detection using Contextual Data Generation with LLMs",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2405.11637",
    "publication_type": "Preprint",
    "phase": [
      "data collection",
      "post-data collection"
    ],
    "task": [
      "data generation",
      "classification"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": null,
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "BERT, GPT-3.5-Turbo, TOAD",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "Other"
    ],
    "abstract": "Stance detection, the classification of attitudes expressed in a text towards a specific topic, is vital for applications like fake news detection and opinion mining. However, the scarcity of labeled data remains a challenge for this task. To address this problem, we propose Dynamic Model Adaptation with Contextual Data Generation (DyMoAdapt) that combines Few-Shot Learning and Large Language Models. In this approach, we aim to fine-tune an existing model at test time. We achieve this by generating new topic-specific data using GPT-3. This method could enhance performance by allowing the adaptation of the model to new topics. However, the results did not increase as we expected. Furthermore, we introduce the Multi Generated Topic VAST (MGT-VAST) dataset, which extends VAST using GPT-3. In this dataset, each context is associated with multiple topics, allowing the model to understand the relationship between contexts and various potential topics"
  },
  {
    "id": "matsuoka-2024-104",
    "citation": "Matsuoka, R., Matsumoto, H., Yoshida, T., Watanabe, T., Kondo, R., & Hisano, R. (2024). Hierarchical Narrative Analysis: Unraveling Perceptions of Generative AI. arXiv. https://doi.org/10.48550/arXiv.2409.11032",
    "title": "Hierarchical Narrative Analysis: Unraveling Perceptions of Generative AI",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2409.11032",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "data analysis"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "Japanese"
    ],
    "population": [
      "Japan"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Written texts reflect an author's perspective, making the thorough analysis of literature a key research method in fields such as the humanities and social sciences. However, conventional text mining techniques like sentiment analysis and topic modeling are limited in their ability to capture the hierarchical narrative structures that reveal deeper argumentative patterns. To address this gap, we propose a method that leverages large language models (LLMs) to extract and organize these structures into a hierarchical framework. We validate this approach by analyzing public opinions on generative AI collected by Japan's Agency for Cultural Affairs, comparing the narratives of supporters and critics. Our analysis provides clearer visualization of the factors influencing divergent opinions on generative AI, offering deeper insights into the structures of agreement and disagreement."
  },
  {
    "id": "mellon-2024-105",
    "citation": "Mellon, J., Bailey, J., Scott, R., Breckwoldt, J., Miori, M., & Schmedeman, P. (2024). Do AIs know what the most important issue is? Using language models to code open-text social survey responses at scale. Research & Politics, 11(1). https://doi.org/10.1177/20531680241231468",
    "title": "Do AIs know what the most important issue is? Using language models to code open-text social survey responses at scale",
    "year": "2024",
    "doi": "https://doi.org/10.1177/20531680241231468",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Llama",
      "Claude",
      "Bard",
      "BERT"
    ],
    "llm": "BERT, ChatGPT, Claude-1.3, Claude-2, GPT-4, Llama, PaLM",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United Kingdom"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "Can artificial intelligence accurately label open-text survey responses? We compare the accuracy of six large language models (LLMs) using a few-shot approach, three supervised learning algorithms (SVM, DistilRoBERTa, and a neural network trained on BERT embeddings), and a second human coder on the task of categorizing “most important issue” responses from the British Election Study Internet Panel into 50 categories. For the scenario where a researcher lacks existing training data, the accuracy of the highest-performing LLM (Claude-1.3: 93.9%) neared human performance (94.7%) and exceeded the highest-performing supervised approach trained on 1000 randomly sampled cases (neural network: 93.5%). In a scenario where previous data has been labeled but a researcher wants to label novel text, the best LLM’s (Claude-1.3: 80.9%) few-shot performance is only slightly behind the human (88.6%) and exceeds the best supervised model trained on 576,000 cases (DistilRoBERTa: 77.8%). PaLM-2, Llama-2, and the SVM all performed substantially worse than the best LLMs and supervised models across all metrics and scenarios. Our results suggest that LLMs may allow for greater use of open-ended survey questions in the future."
  },
  {
    "id": "metheney-2024-107",
    "citation": "Metheney, E. A., & Yehle, L. (2024). Exploring the Potential Role of Generative AI in the TRAPD Procedure for Survey Translation. https://doi.org/10.48550/arXiv.2411.14472",
    "title": "Exploring the Potential Role of Generative AI in the TRAPD Procedure for Survey Translation",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2411.14472",
    "publication_type": "Preprint",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "translation"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "ChatGPT, GPT-3.5, GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English",
      "Chinese",
      "Spanish"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "This paper explores and assesses in what ways generative AI can assist in translating survey instruments. Writing effective survey questions is a challenging and complex task, made even more difficult for surveys that will be translated and deployed in multiple linguistic and cultural settings. Translation errors can be detrimental, with known errors rendering data unusable for its intended purpose and undetected errors leading to incorrect conclusions. A growing number of institutions face this problem as surveys deployed by private and academic organizations globalize, and the success of their current efforts depends heavily on researchers' and translators' expertise and the amount of time each party has to contribute to the task. Thus, multilinguistic and multicultural surveys produced by teams with limited expertise, budgets, or time are at significant risk for translation-based errors in their data. We implement a zero-shot prompt experiment using ChatGPT to explore generative AI's ability to identify features of questions that might be difficult to translate to a linguistic audience other than the source language. We find that ChatGPT can provide meaningful feedback on translation issues, including common source survey language, inconsistent conceptualization, sensitivity and formality issues, and nonexistent concepts. In addition, we provide detailed information on the practicality of the approach, including accessing the necessary software, associated costs, and computational run times. Lastly, based on our findings, we propose avenues for future research that integrate AI into survey translation practices."
  },
  {
    "id": "niszczota-2023-109",
    "citation": "Niszczota, P., Janczak, M., & Misiak, M. (2023). Large language models can replicate cross-cultural differences in personality. https://doi.org/10.48550/arXiv.2310.10679",
    "title": "Large language models can replicate cross-cultural differences in personality",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2310.10679",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5, GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English",
      "Korean"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "We use a large-scale experiment (N=8000) to determine whether GPT-4 can replicate cross-cultural differences in the Big Five, measured using the Ten-Item Personality Inventory. We used the US and South Korea as the cultural pair, given that prior research suggests substantial personality differences between people from these two countries. We manipulated the target of the simulation (US vs. Korean), the language of the inventory (English vs. Korean), and the language model (GPT-4 vs. GPT-3.5). Our results show that GPT-4 replicated the cross-cultural differences for each factor. However, mean ratings had an upward bias and exhibited lower variation than in the human samples, as well as lower structural validity. Overall, we provide preliminary evidence that LLMs can aid cross-cultural psychological research."
  },
  {
    "id": "nuortimo-2023-110",
    "citation": "Nuortimo, K. (2023). Bigdata-based university reputation measurement. Towards conceptualizing AI-based university reputation score (URS). In Journal of Intelligence Studies in Business (Vol. 13, Issue 3, pp. 6–23). HALMSTAD UNIV, SWEDEN. https://doi.org/10.37380/jisib.v13i3.1112",
    "title": "Bigdata-based university reputation measurement. Towards conceptualizing AI-based university reputation score (URS)",
    "year": "2023",
    "doi": "https://doi.org/10.37380/jisib.v13i3.1112",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "ChatGPT",
    "interaction_approach": null,
    "language": [
      "Finnish"
    ],
    "population": [
      "Finland"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "The competition inside higher education institutions, namely universities, is tightening, putting emphasize on competitive intelligence (CI) function. At the same time, communication has shifted to digital channels, this trend was largely influenced by Corona virus pandemic. This presents a challenge for university reputation measurement and ranking, while the electronic word to mouth (E-wom) is more challenging to measure, control or influence than the issues measured in traditional university rankings. While traditional metrics are based on measuring academic reputation via surveys and gathering data from research organisations, this paper presents a way to include AI, namely chatGPT and big -data based media-analytics with social media sentiment to aid analysing the reputation of a University. Results based on Finnish universities indicate, that differences between media visibility and sentiment exist, and can be to some extent utilized in rating universities in local level and also generalize to global level, finally targeting to URS (University reputation score) -index. Due to complexity of measuring the reputation of the university strictly via AI and automated opinion mining, several limitations exist. The context of Finnish universities were chosen in order to limit the scope of the analysis."
  },
  {
    "id": "nuortimo-2024-111",
    "citation": "Nuortimo, K., Harkonen, J., & Breznik, K. (2024). Global, regional, and local acceptance of solar power. In Renewable and Sustainable Energy Reviews (Vol. 193). PERGAMON-ELSEVIER SCIENCE LTD. https://doi.org/10.1016/j.rser.2024.114296",
    "title": "Global, regional, and local acceptance of solar power",
    "year": "2024",
    "doi": "https://doi.org/10.1016/j.rser.2024.114296",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United Kingdom",
      "Germany"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "This study aims to analyse solar power acceptance by different methods in various knowledge domains to gain a holistic view of global, regional, and local acceptance. This includes considering different related aspects of solar energy, including the overall concept, solar panel, the device converting sunlight into electricity, and photovoltaics, the technology. This multidisciplinary approach is possible through the advancement of artificial intelligence technology. Technology acceptance and sentiment, the emotion, are different concepts with slightly different influences on technology deployment. Acceptance can be granted as a social license and can be affected by how the media discusses the technologies. The acceptance further influences investment decisions and wider technology adoption. Sentiment can be obtained by machine or human-made analysis, in which the polarity (positive, negative, or neutral) is defined while the acceptance levels are indicative. This study applies opinion mining, chat generative pre-trained transformer, and generalised aggregated lexical tables methods to analyse the acceptance and sentiment of solar power at different levels. The findings and the original contribution involve highlighting the potential of artificial intelligence to study general acceptance. Artificial intelligence appears capable of providing a fast indication of both media sentiment and the level of acceptance of solar power. Traditional opinion mining seems to be more capable of acknowledging trends. This supports understanding the market environment and factors affecting technology development and deployment. Decisionmaking can benefit from a fast indication."
  },
  {
    "id": "olivos-2024-112",
    "citation": "Olivos, F., & Liu, M. (2024). ChatGPTest: Opportunities and cautionary tales of utilizing AI for questionnaire pretesting. FIELD METHODS, 2405.06329v1. https://doi.org/10.1177/1525822X241280574",
    "title": "ChatGPTest: opportunities and cautionary tales of utilizing AI for questionnaire pretesting",
    "year": "2024",
    "doi": "https://doi.org/10.1177/1525822X241280574",
    "publication_type": "Journal Article",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "The rapid advancements in generative artificial intelligence have opened up new avenues for enhancing various aspects of research, including the design and evaluation of survey questionnaires. However, the recent pioneering applications have not considered questionnaire pretesting. This article explores the use of GPT models as a useful tool for pretesting survey questionnaires, particularly in the early stages of survey design. Illustrated with two applications, the article suggests incorporating GPT feedback as an additional stage before human pretesting, potentially reducing successive iterations. The article also emphasizes the indispensable role of researchers' judgment in interpreting and implementing AI-generated feedback."
  },
  {
    "id": "park-2024-114",
    "citation": "Park, J. S., Zou, C. Q., Shaw, A., Hill, B. M., Cai, C., Morris, M. R., Willer, R., Liang, P., & Bernstein, M. S. (2024). Generative Agent Simulations of 1,000 People (arXiv:2411.10109). arXiv. https://doi.org/10.48550/arXiv.2411.10109",
    "title": "Generative Agent Simulations of 1,000 People",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2411.10109",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "interviewing",
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "The promise of human behavioral simulation--general-purpose computational agents that replicate human behavior across domains--could enable broad applications in policymaking and social science. We present a novel agent architecture that simulates the attitudes and behaviors of 1,052 real individuals--applying large language models to qualitative interviews about their lives, then measuring how well these agents replicate the attitudes and behaviors of the individuals that they represent. The generative agents replicate participants' responses on the General Social Survey 85% as accurately as participants replicate their own answers two weeks later, and perform comparably in predicting personality traits and outcomes in experimental replications. Our architecture reduces accuracy biases across racial and ideological groups compared to agents given demographic descriptions. This work provides a foundation for new tools that can help investigate individual and collective behavior."
  },
  {
    "id": "petrov-2024-116",
    "citation": "Petrov, N. B., Serapio-García, G., & Rentfrow, J. (2024). Limited Ability of LLMs to Simulate Human Psychological Behaviours: A Psychometric Analysis. arXiv. https://doi.org/10.48550/arXiv.2405.07248",
    "title": "Limited Ability of LLMs to Simulate Human Psychological Behaviours: a Psychometric Analysis",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2405.07248",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5, GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United Kingdom"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "The humanlike responses of large language models (LLMs) have prompted social scientists to investigate whether LLMs can be used to simulate human participants in experiments, opinion polls and surveys. Of central interest in this line of research has been mapping out the psychological profiles of LLMs by prompting them to respond to standardized questionnaires. The conflicting findings of this research are unsurprising given that mapping out underlying, or latent, traits from LLMs' text responses to questionnaires is no easy task. To address this, we use psychometrics, the science of psychological measurement. In this study, we prompt OpenAI's flagship models, GPT-3.5 and GPT-4, to assume different personas and respond to a range of standardized measures of personality constructs. We used two kinds of persona descriptions: either generic (four or five random person descriptions) or specific (mostly demographics of actual humans from a large-scale human dataset). We found that the responses from GPT-4, but not GPT-3.5, using generic persona descriptions show promising, albeit not perfect, psychometric properties, similar to human norms, but the data from both LLMs when using specific demographic profiles, show poor psychometrics properties. We conclude that, currently, when LLMs are asked to simulate silicon personas, their responses are poor signals of potentially underlying latent traits. Thus, our work casts doubt on LLMs' ability to simulate individual-level human behaviour across multiple-choice question answering tasks."
  },
  {
    "id": "porter-2021-117",
    "citation": "Porter, E., & Velez, Y. (2021). Placebo Selection in Survey Experiments: An Agnostic Approach. Political Analysis, 30, 481–494. https://doi.org/10.1017/pan.2021.16",
    "title": "Placebo Selection in Survey Experiments: An Agnostic Approach",
    "year": "2021",
    "doi": "https://www.doi.org/10.1017/pan.2021.16",
    "publication_type": "Journal Article",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-2",
    "interaction_approach": null,
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Although placebo conditions are ubiquitous in survey experiments, little evidence guides common practices for their use and selection. How should scholars choose and construct placebos? First, we review the role of placebos in published survey experiments, finding that placebos are used inconsistently. Then, drawing on the medical literature, we clarify the role that placebos play in accounting for nonspecific effects (NSEs), or the effects of ancillary features of experiments. We argue that, in the absence of precise knowledge of NSEs that placebos are adjusting for, researchers should average over a corpus of many placebos. We demonstrate this agnostic approach to placebo construction through the use of GPT-2, a generative language model trained on a database of over 1 million internet news pages. Using GPT-2, we devise 5,000 distinct placebos and administer two experiments (N = 2,975). Our results illustrate how researchers can minimize their role in placebo selection through automated processes. We conclude by offering tools for incorporating computer-generated placebo text vignettes into survey experiments and developing recommendations for best practice."
  },
  {
    "id": "qi-2024-118",
    "citation": "Qi, W., Lyu, H., & Luo, J. (2024). Representation Bias in Political Sample Simulations with Large Language Models. arXiv. https://doi.org/10.48550/arXiv.2407.11409",
    "title": "Representation Bias in Political Sample Simulations with Large Language Models",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2407.11409",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo",
    "interaction_approach": null,
    "language": null,
    "population": [
      "United States",
      "China",
      "Germany"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "This study seeks to identify and quantify biases in simulating political samples with Large Language Models, specifically focusing on vote choice and public opinion. Using the GPT-3.5-Turbo model, we leverage data from the American National Election Studies, German Longitudinal Election Study, Zuobiao Dataset, and China Family Panel Studies to simulate voting behaviors and public opinions. This methodology enables us to examine three types of representation bias: disparities based on the the country's language, demographic groups, and political regime types. The findings reveal that simulation performance is generally better for vote choice than for public opinions, more accurate in English-speaking countries, more effective in bipartisan systems than in multi-partisan systems, and stronger in democratic settings than in authoritarian regimes. These results contribute to enhancing our understanding and developing strategies to mitigate biases in AI applications within the field of computational social science."
  },
  {
    "id": "qi-2024-119",
    "citation": "Qi, W., Pan, J., Lyu, H., & Luo, J. (2024). Excitements and concerns in the post-ChatGPT era: Deciphering public perception of AI through social media analysis. In Telematics and Informatics (Vol. 92). ELSEVIER. https://doi.org/10.1016/j.tele.2024.102158",
    "title": "Excitements and concerns in the post-ChatGPT era: Deciphering public perception of AI through social media analysis",
    "year": "2024",
    "doi": "https://doi.org/10.1016/j.tele.2024.102158",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "BERTopic, GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": null,
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "As AI systems become increasingly prevalent in various aspects of daily life, gaining a comprehensive understanding of public perception towards these AI systems has become increasingly essential for several reasons such as ethical considerations, user experience, fear, disinformation, regulation, collaboration, and co-creation. In this study, we investigate how mass social media users perceive the recent rise of AI frameworks such as ChatGPT. We collect a total of 33,912 comments in 388 unique subreddits spanning from November 30, 2022 to June 8, 2023 using a list of AI-related keywords. We employ a combination of thematic and sentiment analysis, using advanced natural language processing techniques. Specifically, we use BERTopic to uncover the major themes regarding AI on Reddit. Our findings indicate that technology-focused subreddits primarily discuss the technical dimensions of AI, while non-technical subreddits more often address societal impacts, such as job displacement concerns. The disparity in focus between subreddits suggests a gap in the public understanding of AI. We leverage GPT-3.5 with zero-shot prompting and LIWC to analyze the sentiment and perception of AI among individual users. Through a comprehensive sentiment and emotion analysis, we discover that tech-centric communities exhibit greater polarization compared to non-tech communities when discussing AI topics. This suggests that individuals with a deeper understanding or familiarity with AI technologies might have more divided opinions, possibly reflecting a mix of optimism about technological advancements and skepticism about potential impacts. This research contributes to our broader understanding of public opinion surrounding artificial intelligence."
  },
  {
    "id": "qian-2024-120",
    "citation": "Qian, T. Y., Yu, B., Li, W., & Xu, C. (2024). Esports Debut as a Medal Event at 2023 Asian Games: Exploring Public Perceptions with BERTopic and GPT-4 Topic Fine-Tuning. arXiv. https://doi.org/10.48550/arXiv.2409.18798",
    "title": "Esports Debut as a Medal Event at 2023 Asian Games: Exploring Public Perceptions with BERTopic and GPT-4 Topic Fine-Tuning",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2409.18798",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "BERTopic, GPT-4-Turbo-preview",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": null,
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "This study examined the public opinions of esports at the 2023 Asian Games and value co-creation during the event using an LLM-enhanced BERTopic modeling analysis. We identified five major themes representing public perceptions, as well as how major stakeholders co-created value within and beyond the esports ecosystem. Key findings highlighted the strategic use of social media marketing to influence public opinion and promote esports events and brands, emphasizing the importance of event logistics and infrastructure. Additionally, the study revealed the co-creation value contributed by stakeholders outside the traditional esports ecosystem, particularly in promoting national representation and performance. Our findings supported the ongoing efforts to legitimize esports as a sport, noting that mainstream recognition remains a challenge. The inclusion of esports as a medal event showcased broader acceptance and helped mitigate negative public perceptions. Moreover, contributions from non-traditional stakeholders underscored the value of cross-subcultural collaborations in esports."
  },
  {
    "id": "qu-2024-121",
    "citation": "Qu, Y., & Wang, J. (2024). Performance and biases of Large Language Models in public opinion simulation. Humanities and Social Sciences Communications, 11(1), 1–13. https://doi.org/10.1057/s41599-024-03609-x",
    "title": "Performance and biases of Large Language Models in public opinion simulation",
    "year": "2024",
    "doi": "https://doi.org/10.1057/s41599-024-03609-x",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "Japanese",
      "Portuguese",
      "Swedish"
    ],
    "population": [
      "United States",
      "Japan",
      "Brazil"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "The rise of Large Language Models (LLMs) like ChatGPT marks a pivotal advancement in artificial intelligence, reshaping the landscape of data analysis and processing. By simulating public opinion, ChatGPT shows promise in facilitating public policy development. However, challenges persist regarding its worldwide applicability and bias across demographics and themes. Our research employs socio-demographic data from the World Values Survey to evaluate ChatGPT’s performance in diverse contexts. Findings indicate significant performance disparities, especially when comparing countries. Models perform better in Western, English-speaking, and developed nations, notably the United States, in comparison to others. Disparities also manifest across demographic groups, showing biases related to gender, ethnicity, age, education, and social class. The study further uncovers thematic biases in political and environmental simulations. These results highlight the need to enhance LLMs’ representativeness and address biases, ensuring their equitable and effective integration into public opinion research alongside conventional methodologies."
  },
  {
    "id": "renda-2023-124",
    "citation": "Renda, A., Hopkins, A., & Carbin, M. (2023). Can LLMs Generate Random Numbers? Evaluating LLM Sampling in Controlled Domains. ICML 2023 Workshop: Sampling and Optimization in Discrete Space (SODS 2023). https://people.csail.mit.edu/renda/llm-sampling-paper",
    "title": "Can LLMs Generate Random Numbers? Evaluating LLM Sampling in Controlled Domains",
    "year": "2023",
    "doi": "https://people.csail.mit.edu/renda/llm-sampling-paper",
    "publication_type": "Conference Paper",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "sampling"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "Llama",
      "Alpaca"
    ],
    "llm": "Alpaca 7B, Llama 7B, Llama 13B, Llama 30B, Llama 65B",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "Practitioners frequently take multiple samples from large language models (LLMs) to explore the distribution of completions induced by a given prompt. While individual samples from this distribution may give high-quality results for a given task, the overall induced distribution may not be satisfactory for a task requiring multiple samples. In this paper, we empirically evaluate LLMs’ capabilities as distribution samplers. We identify core concepts and metrics underlying LLM-based sampling, including different sampling methodologies and prompting strategies. Using a set of controlled domains with known target distributions, we evaluate the error and variance of the distributions induced by the LLM. We find that LLMs struggle to induce the target distributions over generated elements, suggesting that practitioners should more carefully consider the semantics and methodologies of sampling from LLMs."
  },
  {
    "id": "rogers-2024-125",
    "citation": "Rogers, R., & Zhang, X. (2024). The Russia-Ukraine War in Chinese Social Media: LLM Analysis Yields a Bias Toward Neutrality. In Social Media + Society (Vol. 10, Issue 2). SAGE Publications Ltd. https://doi.org/10.1177/20563051241254379",
    "title": "The Russia-Ukraine War in Chinese Social Media: LLM Analysis Yields a Bias Toward Neutrality",
    "year": "2024",
    "doi": "https://doi.org/10.1177/20563051241254379",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Claude"
    ],
    "llm": "Claude-2, GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "Chinese"
    ],
    "population": [
      "China"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "This study is a cross-platform analysis of the discourses surrounding the Russia-Ukraine war in Chinese social media. Making use of both manual as well as automated classification of discussion about the war, we found most significantly the mass amplification of Russian state positions on Weibo and the reframing of the war as being in the Chinese national self-interest on Douyin. We situate what we call cross-national amplification as well as the national self among other notions that seek to capture the broad discursive power of the Chinese state including digital nationalism, soft propaganda, and playful patriotism. A second set of findings include some agreement between the manual and automated classification, albeit with the artificial intelligence (AI)-assisted platforms showing what we call a bias toward neutrality. We also emphasize the importance of a cross-platform analysis (rather than a single-platform analysis) when seeking to capture public sentiment on social media and the types of orchestrated, state discursive power on display."
  },
  {
    "id": "rosenberg-2023-126",
    "citation": "Rosenberg, L., Willcox, G., & Schumann, H. (2023). Conversational Swarm Intelligence (CSI) Enables Rapid Group Insights. 2023 IEEE 14th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON), 2310.13702v1, 0534–0539. https://doi.org/10.48550/arXiv.2310.13702",
    "title": "Conversational Swarm Intelligence (CSI) Enables Rapid Group Insights",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2310.13702",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": null,
    "population": [
      "United States"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "When generating insights from human groups, conversational deliberation is a key method for exploring issues, surfacing ideas, debating options, and converging on solutions. Unfortunately, real-time conversations are difficult to scale, losing effectiveness in groups above 4 to 7 members. Conversational Swarm Intelligence (CSI) is a new technology that enables large human groups to hold real-time conversations using techniques modeled on the dynamics of biological swarms. Through a novel use of Large Language Models (LLMs), CSI enables real-time dialog among small groups while simultaneously fostering content propagation across a much larger group. This combines the benefits of small-scale deliberative reasoning and large-scale groupwise intelligence. In this study, we engage a group of 81 American voters from one political party in real-time deliberation using a CSI platform called Thinkscape. We then task the group with (a) forecasting which candidate from a set of options will achieve the most national support, and (b) indicating the specific reasons for this result. After only six minutes of deliberation, the group of 81 individuals converged on a selected candidate and surfaced over 400 reasons justifying various candidates, including 206 justifications that supported the selected candidate. We find that the selected candidate was significantly more supported by group members than the other options (p<0.001) and that this effect held even after six minutes of deliberation, demonstrating that CSI provides both the qualitative benefits of conversational focus groups and the quantitative benefits of largescale polling."
  },
  {
    "id": "rytting-2023-127",
    "citation": "Rytting, C. M., Sorensen, T., Argyle, L., Busby, E., Fulda, N., Gubler, J., & Wingate, D. (2023). Towards Coding Social Science Datasets with Language Models. arXiv. https://doi.org/10.48550/arXiv.2306.02177",
    "title": "Towards Coding Social Science Datasets with Language Models",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2306.02177",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Researchers often rely on humans to code (label, annotate, etc.) large sets of texts. This kind of human coding forms an important part of social science research, yet the coding process is both resource intensive and highly variable from application to application. In some cases, efforts to automate this process have achieved human-level accuracies, but to achieve this, these attempts frequently rely on thousands of hand-labeled training examples, which makes them inapplicable to small-scale research studies and costly for large ones. Recent advances in a specific kind of artificial intelligence tool - language models (LMs) - provide a solution to this problem. Work in computer science makes it clear that LMs are able to classify text, without the cost (in financial terms and human effort) of alternative methods. To demonstrate the possibilities of LMs in this area of political science, we use GPT-3, one of the most advanced LMs, as a synthetic coder and compare it to human coders. We find that GPT-3 can match the performance of typical human coders and offers benefits over other machine learning methods of coding text. We find this across a variety of domains using very different coding procedures. This provides exciting evidence that language models can serve as a critical advance in the coding of open-ended texts in a variety of applications."
  },
  {
    "id": "sanders-2023-128",
    "citation": "Sanders, N. E., Ulinich, A., & Schneier, B. (2023). Demonstrations of the Potential of AI-based Political Issue Polling. arXiv. https://doi.org/10.48550/arXiv.2307.04781",
    "title": "Demonstrations of the Potential of AI-based Political Issue Polling",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2307.04781",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "Other"
    ],
    "abstract": "Political polling is a multi-billion dollar industry with outsized influence on the societal trajectory of the United States and nations around the world. However, in recent years it has been severely challenged by rising nonresponse rates and other factors that stress its cost, availability, and accuracy. At the same time, artificial intelligence (AI) chatbots such as ChatGPT have become highly compelling stand-ins for a wide range of human behavior, powered by increasingly sophisticated large language models (LLMs). Because these LLMs are trained on huge corpora of writing by diverse people captured from across the Internet, they are potentially capable of representing a wide range of beliefs on many policy issues. Could AI chatbots be an effective tool for anticipating public opinion on controversial issues to the extent that they could be used by campaigns, interest groups, and polling firms? We have developed a prompt engineering methodology for eliciting human-like survey responses from ChatGPT, which simulate the response to a policy question of a person described by a set of demographic and ideological factors, and produce both an ordinal numeric response score and a textual justification. We execute large scale experiments using this method, querying GPT for thousands of simulated responses at a cost more than three orders of magnitude lower than human surveys. We compare this simulated data to human issue polling data from the Cooperative Election Study (CES)."
  },
  {
    "id": "santana-2024-129",
    "citation": "Santana-Monagas, E., Ferreira, P. da C., Sima, A. M. V., & Nunez, J. L. (2024). How (de)motivating teaching styles shape message framing outcomes on students’ self-efficacy, emotions, and grades. In Learning and Individual Differences (Vol. 110). ELSEVIER. https://doi.org/10.1016/j.lindif.2024.102420",
    "title": "How (de)motivating teaching styles shape message framing outcomes on students' self-efficacy, emotions, and grades",
    "year": "2024",
    "doi": "https://doi.org/10.1016/j.lindif.2024.102420",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "Spanish"
    ],
    "population": [
      "Spain"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "In this study, a mixed method and prospective design was followed to achieve two objectives: code student responses to an open-ended question about their teachers' teaching and examine how this classification relates with the associations among students' self-reports on teachers' message framing (gains or losses), their selfefficacy, academic achievement emotions, and teacher reported grades. 1107 Spanish students in grades 9 to 12 participated in the study. GPT-4 was used to code the open-ended question responses on teachers' teaching style. Structural equation modeling (SEM) tested the hypothesized relations among variables accounting for the teaching styles. Results from the SEM revealed that gain-framed messages related positively with student outcomes, as opposed to loss-framed messages, but only when teachers displayed a motivating teaching style. For demotivating teachers, messages did not relate with students' outcomes except for gain-framed messages and student adaptive emotions. Directions for future research and implications for educational practice are discussed. Educational relavance statement: These findings bridge critical gaps in the field, incorporating a self-determination theory lens into a qualitative design, and concurrently addressing message framing and its interaction with teaching style on student outcomes. The study's exploration of a wide range of emotions and its direct examination of teaching's predictive value on student emotions further enrich the existing scholarship. In practical terms, the results provide valuable insights for educators, highlighting that cultivating a motivating teaching style and employing gain-framed messages can positively influence students' emotions, self-efficacy beliefs, and grades. This research not only contributes to theoretical advancements in educational psychology but also offers a tangible and straightforward resource for teachers to enhance their instructional practices and positively relation with student outcomes. The major findings discussed above underscore the significance of these insights in informing both educational theory and classroom practices. For instance, the evidence gathered could be useful to develop interventions targeting teaching practices or those targeting students' behavioural change regarding following teachers' advice. Telling a teacher how to frame their messages is simple, does not require much time, expertise, or budget. Thus, it denotes the best scenario to conduct school-based interventions."
  },
  {
    "id": "santurkar-2023-130",
    "citation": "Santurkar, S., Durmus, E., Ladhak, F., Lee, C., Liang, P., & Hashimoto, T. (2023). Whose Opinions Do Language Models Reflect? Proceedings of the 40th International Conference on Machine Learning, 202, 29971–30004. https://proceedings.mlr.press/v202/santurkar23a.html",
    "title": "Whose Opinions Do Language Models Reflect?",
    "year": "2023",
    "doi": "https://proceedings.mlr.press/v202/santurkar23a.html",
    "publication_type": "Conference Paper",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3, j1",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Language models (LMs) are increasingly being used in open-ended contexts, where the opinions they reflect in response to subjective queries can have a profound impact, both on user satisfaction, and shaping the views of society at large. We put forth a quantitative framework to investigate the opinions reflected by LMs – by leveraging high-quality public opinion polls. Using this framework, we create OpinionQA, a dataset for evaluating the alignment of LM opinions with those of 60 US demographic groups over topics ranging from abortion to automation. Across topics, we find substantial misalignment between the views reflected by current LMs and those of US demographic groups: on par with the DemocratRepublican divide on climate change. Notably, this misalignment persists even after explicitly steering the LMs towards particular groups. Our analysis not only confirms prior observations about the left-leaning tendencies of some human feedback-tuned LMs, but also surfaces groups whose opinions are poorly reflected by current LMs (e.g., 65+ and widowed individuals)."
  },
  {
    "id": "seltzer-2023-132",
    "citation": "Seltzer, J., Pan, J., Cheng, K., Sun, Y., Kolagati, S., Lin, J., & Zong, S. (2023). SmartProbe: A Virtual Moderator for Market Research Surveys. https://doi.org/10.48550/arXiv.2305.08271",
    "title": "SmartProbe: A Virtual Moderator for Market Research Surveys",
    "year": "2023",
    "doi": "https://doi.org/10.48550/arXiv.2305.08271",
    "publication_type": "Preprint",
    "phase": [
      "pre-data collection",
      "data collection"
    ],
    "task": [
      "instrument development",
      "interviewing"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "InstructGPT",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English",
      "French"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "Market research surveys are a powerful methodology for understanding consumer perspectives at scale, but are limited by depth of understanding and insights. A virtual moderator can introduce elements of qualitative research into surveys, developing a rapport with survey participants and dynamically asking probing questions, ultimately to elicit more useful information for market researchers. In this work, we introduce [\\tt SmartProbe], an API which leverages the adaptive capabilities of large language models (LLMs), and incorporates domain knowledge from market research, in order to generate effective probing questions in any market research survey. We outline the modular processing flow of \\tt SmartProbe, and evaluate the quality and effectiveness of its generated probing questions. We believe our efforts will inspire industry practitioners to build real-world applications based on the latest advances in LLMs. Our demo is publicly available at https://nexxt.in/smartprobe-demo"
  },
  {
    "id": "shaikh-2023-133",
    "citation": "Shaikh, S., Daudpota, S. M., YILDIRIM, S. Y., & Sindhu, S. (2023). Exploring the potential of large-language models (LLMs) for student feedback sentiment analysis. 2023 International Conference on Frontiers of Information Technology (FIT), 214–219. https://doi.org/10.1109%25252FFIT60620.2023.00047",
    "title": "Exploring the potential of large-language models (LLMs) for student feedback sentiment analysis",
    "year": "2023",
    "doi": "https://doi.org/10.1109%2FFIT60620.2023.00047",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "ChatGPT-3.5, Twitter-RoBERTa",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": null,
    "population": [
      "Pakistan"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Large-language models (LLMs) have demonstrated remarkable performance across a wide range of natural language processing (NLP) tasks, including synthetic text generation, classification, question answering, and language translation. In this paper, we explore the potential of leveraging these LLMs for sentiment analysis or opinion mining of students’ feedback about their teachers, typically collected at the end of a course. Analyzing students’ sentiments is crucial for academic decision-making. We conducted our study by employing ChatGPT, a popular LLM, to perform sentiment classification on a diverse dataset of student feedback. This dataset was collected and scientifically labeled with sentiment annotations by our experienced annotators team. Our findings demonstrate the immense promise of using LLMs in accurately classifying students’ feedback into positive, negative, or neutral sentiments. The ChatGPT model achieved an impressive overall F1-score of 88%, outperforming state-of-the-art deep learning and transformer-based models. These results show the significance of LLMs in advancing sentiment analysis in educational contexts and provide valuable insights for educators and administrators to enhance the learning experience."
  },
  {
    "id": "sharma-2024-134",
    "citation": "Sharma, H., Din, F. U., & Ogunleye, B. (2024). Electric Vehicle Sentiment Analysis Using Large Language Models. Analytics, 3(4), 425–438. https://doi.org/10.3390/analytics3040023",
    "title": "Electric Vehicle Sentiment Analysis Using Large Language Models",
    "year": "2024",
    "doi": "https://doi.org/10.3390/analytics3040023",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "XLNet",
      "BERT"
    ],
    "llm": "BERT, RobERTa, XLNet",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": null,
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Sentiment analysis is a technique used to understand the public’s opinion towards an event, product, or organization. For example, sentiment analysis can be used to understand positive or negative opinions or attitudes towards electric vehicle (EV) brands. This provides companies with valuable insight into the public’s opinion of their products and brands. In the field of natural language processing (NLP), transformer models have shown great performance compared to traditional machine learning algorithms. However, these models have not been explored extensively in the EV domain. EV companies are becoming significant competitors in the automotive industry and are projected to cover up to 30% of the United States light vehicle market by 2030 In this study, we present a comparative study of large language models (LLMs) including bidirectional encoder representations from transformers (BERT), robustly optimised BERT (RoBERTa), and a generalised autoregressive pre-training method (XLNet) using Lucid Motors and Tesla Motors YouTube datasets. Results evidenced that LLMs like BERT and her variants are off-the-shelf algorithms for sentiment analysis, specifically when fine-tuned. Furthermore, our findings present the need for domain adaptation whilst utilizing LLMs. Finally, the experimental results showed that RoBERTa achieved consistent performance across the EV datasets with an F1 score of at least 92%."
  },
  {
    "id": "smolinski-2024-135",
    "citation": "Smolinski, P. R., Januszewicz, J., & Winiarski, J. (2024). Scaling Technology Acceptance Analysis with Large Language Model (LLM) Annotation Systems. arXiv. https://doi.org/10.48550/arXiv.2407.00702",
    "title": "Scaling Technology Acceptance Analysis with Large Language Model (LLM) Annotation Systems",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2407.00702",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5, GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "social media",
      "reviews"
    ],
    "abstract": "Technology acceptance models effectively predict how users will adopt new technology products. Traditional surveys, often expensive and cumbersome, are commonly used for this assessment. As an alternative to surveys, we explore the use of large language models for annotating online user-generated content, like digital reviews and comments. Our research involved designing an LLM annotation system that transform reviews into structured data based on the Unified Theory of Acceptance and Use of Technology model. We conducted two studies to validate the consistency and accuracy of the annotations. Results showed moderate-to-strong consistency of LLM annotation systems, improving further by lowering the model temperature. LLM annotations achieved close agreement with human expert annotations and outperformed the agreement between experts for UTAUT variables. These results suggest that LLMs can be an effective tool for analyzing user sentiment, offering a practical alternative to traditional survey methods and enabling deeper insights into technology design and adoption."
  },
  {
    "id": "sun-2024-137",
    "citation": "Sun, S., Lee, E., Nan, D., Zhao, X., Lee, W., Jansen, B. J., & Kim, J. H. (2024). Random Silicon Sampling: Simulating Human Sub-Population Opinion Using a Large Language Model Based on Group-Level Demographic Information. arXiv. https://doi.org/10.48550/arXiv.2402.18144",
    "title": "Random Silicon Sampling: Simulating Human Sub-Population Opinion Using a Large Language Model Based on Group-Level Demographic Information",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2402.18144",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Large language models exhibit societal biases associated with demographic information, including race, gender, and others. Endowing such language models with personalities based on demographic data can enable generating opinions that align with those of humans. Building on this idea, we propose \"random silicon sampling,\" a method to emulate the opinions of the human population subgroup. Our study analyzed 1) a language model that generates the survey responses that correspond with a human group based solely on its demographic distribution and 2) the applicability of our methodology across various demographic subgroups and thematic questions. Through random silicon sampling and using only group-level demographic information, we discovered that language models can generate response distributions that are remarkably similar to the actual U.S. public opinion polls. Moreover, we found that the replicability of language models varies depending on the demographic group and topic of the question, and this can be attributed to inherent societal biases in the models. Our findings demonstrate the feasibility of mirroring a group's opinion using only demographic distribution and elucidate the effect of social biases in language models on such simulations."
  },
  {
    "id": "suzuki-2024-139",
    "citation": "Suzuki, M., & Sakaji, H. (2024). Refined and Segmented Price Sentiment Indices from Survey Comments. arXiv. https://doi.org/10.48550/arXiv.2411.09937",
    "title": "Refined and Segmented Price Sentiment Indices from Survey Comments",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2411.09937",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "consumer research"
    ],
    "llm_family": [
      "GPT",
      "Claude",
      "Gemini",
      "BERT"
    ],
    "llm": "Claude-3, Claude-3.5, DeBERTa, FinBERT, Gemini-1.5, GPT-4o, GPT-4o-mini",
    "interaction_approach": [
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "Japanese"
    ],
    "population": [
      "Japan"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "We aim to enhance a price sentiment index and to more precisely understand price trends from the perspective of not only consumers but also businesses. We extract comments related to prices from the Economy Watchers Survey conducted by the Cabinet Office of Japan and classify price trends using a large language model (LLM). We classify whether the survey sample reflects the perspective of consumers or businesses, and whether the comments pertain to goods or services by utilizing information on the fields of comments and the industries of respondents included in the Economy Watchers Survey. From these classified price-related comments, we construct price sentiment indices not only for a general purpose but also for more specific objectives by combining perspectives on consumers and prices, as well as goods and services. It becomes possible to achieve a more accurate classification of price directions by employing a LLM for classification. Furthermore, integrating the outputs of multiple LLMs suggests the potential for the better performance of the classification. The use of more accurately classified comments allows for the construction of an index with a higher correlation to existing indices than previous studies. We demonstrate that the correlation of the price index for consumers, which has a larger sample size, is further enhanced by selecting comments for aggregation based on the industry of the survey respondents."
  },
  {
    "id": "symeonaki-2024-140",
    "citation": "Symeonaki, M., Stamou, G., Kazani, A., Tsouparopoulou, E., & Stamatopoulou, G. (2024). Examining the development of attitude scales using Large Language Models (LLMs). https://doi.org/10.48550/arXiv.2405.19011",
    "title": "Examining the development of attitude scales using Large Language Models (LLMs)",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2405.19011",
    "publication_type": "Preprint",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "ChatGPT",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "For nearly a century, social researchers and psychologists have debated the efficacy of psychometric scales for attitude measurement, focusing on Thurstone's equal appearing interval scales and Likert's summated rating scales. Thurstone scales fell out of favour due to the labour intensive process of gathering judges' opinions on the initial items. However, advancements in technology have mitigated these challenges, nullifying the simplicity advantage of Likert scales, which have their own methodological issues. This study explores a methodological experiment to develop a Thurstone scale for assessing attitudes towards individuals living with AIDS. An electronic questionnaire was distributed to a group of judges, including undergraduate, postgraduate, and PhD students from disciplines such as social policy, law, medicine, and computer engineering, alongside established social researchers, and their responses were statistically analysed. The primary innovation of this study is the incorporation of an Artificial Intelligence (AI) Large Language Model (LLM) to evaluate the initial 63 items, comparing its assessments with those of the human judges. Interestingly, the AI provided also detailed explanations for its categorisation. Results showed no significant difference between AI and human judges for 35 items, minor differences for 23 items, and major differences for 5 items. This experiment demonstrates the potential of integrating AI with traditional psychometric methods to enhance the development of attitude measurement scales."
  },
  {
    "id": "tamime-2024-141",
    "citation": "Tamime, R. A., Salminen, J. O., Jung, S.-G., & Jansen, B. J. (2024). Evaluating LLM-Generated Topics from Survey Responses: Identifying Challenges in Recruiting Participants through Crowdsourcing. 2024 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC), 412–416. https://doi.org/10.1109%25252FVL%25252FHCC60511.2024.00064",
    "title": "Evaluating LLM-Generated Topics from Survey Responses: Identifying Challenges in Recruiting Participants through Crowdsourcing",
    "year": "2024",
    "doi": "https://doi.org/10.1109%2FVL%2FHCC60511.2024.00064",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "The evolution of generative artificial intelligence (AI) technologies, particularly large language models (LLMs), has lead to consequences for the field of Human-Computer Interaction (HCI) in areas such as personalization, predictive analytics, automation, and data analysis. This research aims to evaluate LLM-generated topics derived from survey responses in comparison with topics suggested by humans, particularly participants recruited through a crowdsourcing experiment. We present an evaluation results to compare LLM-generated topics with human-generated topics in terms of Quality, Usefulness, Accuracy, Interestingness, and Completeness. This involves three stages: (1) Design and Generate Topics with an LLM (OpenAI’s GPT-4); (2) Crowdsourcing Human-Generated Topics; and (3) Evaluation of Human-Generated Topics and LLM-Generated Topics. However, a feasibility study with 33 crowdworkers indicated challenges in using participants for LLM evaluation, particularly in inviting humans participants to suggest topics based on open-ended survey answers. We highlight several challenges in recruiting crowdsourcing participants for generating topics from survey responses. We recommend using well-trained human experts rather than crowdsourcing to generate human baselines for LLM evaluation."
  },
  {
    "id": "tang-2024-142",
    "citation": "Tang, C., Li, Z., & Zhu, L. (2024). A Bagging RAG Public Opinion Analysis and Guidance Tool Driven by Large Language Model. 2024 IEEE International Conference on Cognitive Computing and Complex Data (ICCD), 1–6. https://doi.org/10.1109/ICCD62811.2024.10843657",
    "title": "A Bagging RAG Public Opinion Analysis and Guidance Tool Driven by Large Language Model",
    "year": "2024",
    "doi": "https://doi.org/10.1109/ICCD62811.2024.10843657",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification",
      "data analysis",
      "archiving"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "ChatGLM"
    ],
    "llm": "ChatGLM 3-6B and GLM-4V-9B",
    "interaction_approach": null,
    "language": [
      "Chinese"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "In the context of the information explosion, the analysis of online public opinion holds significant importance for maintaining social stability and fostering the healthy development of information dissemination. To enhance the automated analytical capabilities of online public opinion, this paper presents a Bagging Retrieval Augmented Generation (BRAG) method driven by a large language model. This method extracts feature text from a limited number of online public opinion samples using a large language model to build a public opinion analysis knowledge base. Through the bootstrap aggregating method, the feature text is segmented and recombined, selecting appropriate parts to form critical prompt words that assist the large language model in completing public opinion analysis tasks, thus constructing an effective analytical tool for Weibo public opinion. Experimental validation demonstrates that the proposed method significantly improves the accuracy, recall and f1-score of public opinion analysis."
  },
  {
    "id": "tewari-2024-143",
    "citation": "Tewari, T., & Hosein, P. (2024). Automating the Conducting of Surveys Using Large Language Models. In A. Fred, A. Hadjali, O. Gusikhin, & C. Sansone (Eds.), Deep Learning Theory and Applications (pp. 136–151). Springer Nature Switzerland. https://doi.org/10.1007/978-3-031-66705-3_9",
    "title": "Automating the Conducting of Surveys Using Large Language Models",
    "year": "2024",
    "doi": "https://doi.org/10.1007/978-3-031-66705-3_9",
    "publication_type": "Conference Paper",
    "phase": [
      "pre-data collection",
      "data collection",
      "post-data collection"
    ],
    "task": [
      "instrument development",
      "interviewing",
      "pre-processing"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4, Whisper",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "Conducting electronic surveys in remote areas can be challenging due to the lack of the required Internet infrastructure. Traditional phone surveys are typically used in such cases since mobile phones have become pervasive. However, this process can be time-consuming since a human is required to conduct the session and they must then upload responses to a database. We propose using Large Language Models (LLMs) to process an audio recording of the phone session to extract the responses and store them in a database. In our proof of concept humans were used to conduct the survey but further automation is planned whereby the phone session itself is carried out by a robot. We use OpenAI's Whisper for the speech-to-text process and we then pass the text to a Large Language Model (GPT-4) which is prompted to extract the responses. The responses are then uploaded to a database. Finally we use an LLM to provide answers to questions about the survey responses. For multiple choice questions we obtained an accuracy score of 97%."
  },
  {
    "id": "trott-2024-144",
    "citation": "Trott, S. (2024). Large Language Models and the Wisdom of Small Crowds. Open Mind : Discoveries in Cognitive Science, 8, 723–738. https://doi.org/10.1162/opmi_a_00144",
    "title": "Large Language Models and the Wisdom of Small Crowds",
    "year": "2024",
    "doi": "https://doi.org/10.1162/opmi_a_00144",
    "publication_type": "Journal Article",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "psychology/psychometrics"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "Other"
    ],
    "abstract": "Recent advances in Large Language Models (LLMs) have raised the question of replacing human subjects with LLM-generated data. While some believe that LLMs capture the “wisdom of the crowd”—due to their vast training data—empirical evidence for this hypothesis remains scarce. We present a novel methodological framework to test this: the “number needed to beat” (NNB), which measures how many humans are needed for a sample’s quality to rival the quality achieved by GPT-4, a state-of-the-art LLM. In a series of pre-registered experiments, we collect novel human data and demonstrate the utility of this method for four psycholinguistic datasets for English. We find that NNB > 1 for each dataset, but also that NNB varies across tasks (and in some cases is quite small, e.g., 2). We also introduce two “centaur” methods for combining LLM and human data, which outperform both stand-alone LLMs and human samples. Finally, we analyze the trade-offs in data cost and quality for each approach. While clear limitations remain, we suggest that this framework could guide decision-making about whether and how to integrate LLM-generated data into the research pipeline."
  },
  {
    "id": "tsai-2024-145",
    "citation": "Tsai, C.-H., Nandy, G., House, D., & Carroll, J. M. (2024). Ensuring Transparency in Using ChatGPT for Public Sentiment Analysis. Proceedings of the 25th Annual International Conference on Digital Government Research, 627–636. https://doi.org/10.1145/3657054.3657128",
    "title": "Ensuring Transparency in Using ChatGPT for Public Sentiment Analysis",
    "year": "2024",
    "doi": "https://doi.org/10.1145/3657054.3657128",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "ChatGPT-3.5",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "The advancement of generative AI, involving the utilization of large language models (LLMs) like ChatGPT to assess public opinion and sentiment, has become increasingly prevalent. However, this upsurge in usage raises significant questions about the transparency and interpretability of the predictions made by these LLM Models. Hence, this paper explores the imperative of ensuring transparency in the application of ChatGPT for public sentiment analysis. To tackle these challenges, we propose using a lexicon-based model as a surrogate to approximate both global and local predictions. Through case studies, we demonstrate how transparency mechanisms, bolstered by the lexicon-based model, can be seamlessly integrated into ChatGPT’s deployment for sentiment analysis. Drawing on the results of our study, we further discuss the implications for future research involving the utilization of LLMs in governmental functions, policymaking, and public engagement."
  },
  {
    "id": "tzachristas-2025-146",
    "citation": "Tzachristas, I., Narayanan, S., & Antoniou, C. (2025). Guided Persona-based AI Surveys: Can we replicate personal mobility preferences at scale using LLMs? arXiv. https://doi.org/10.48550/arXiv.2501.13955",
    "title": "Guided Persona-based AI Surveys: Can we replicate personal mobility preferences at scale using LLMs?",
    "year": "2025",
    "doi": "https://doi.org/10.48550/arXiv.2501.13955",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4o",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Germany"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "This study explores the potential of Large Language Models (LLMs) to generate artificial surveys, with a focus on personal mobility preferences in Germany. By leveraging LLMs for synthetic data creation, we aim to address the limitations of traditional survey methods, such as high costs, inefficiency and scalability challenges. A novel approach incorporating \"Personas\" - combinations of demographic and behavioural attributes - is introduced and compared to five other synthetic survey methods, which vary in their use of real-world data and methodological complexity. The MiD 2017 dataset, a comprehensive mobility survey in Germany, serves as a benchmark to assess the alignment of synthetic data with real-world patterns. The results demonstrate that LLMs can effectively capture complex dependencies between demographic attributes and preferences while offering flexibility to explore hypothetical scenarios. This approach presents valuable opportunities for transportation planning and social science research, enabling scalable, cost-efficient and privacy-preserving data generation."
  },
  {
    "id": "velez-2024-147",
    "citation": "Velez, Y. (2024). Crowdsourced Adaptive Surveys (arXiv:2401.12986). arXiv. https://doi.org/10.48550/arXiv.2401.12986",
    "title": "Crowdsourced Adaptive Surveys",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2401.12986",
    "publication_type": "Preprint",
    "phase": [
      "pre-data collection"
    ],
    "task": [
      "instrument development"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4",
    "interaction_approach": null,
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey",
      "reviews"
    ],
    "abstract": "Public opinion surveys are vital for informing democratic decision-making, but responding to rapidly evolving information environments and measuring beliefs within niche communities can be challenging for traditional survey methods. This paper introduces a crowdsourced adaptive survey methodology (CSAS) that unites advances in natural language processing and adaptive algorithms to generate question banks that evolve with user input. The CSAS method converts open-ended text provided by participants into survey items and applies a multi-armed bandit algorithm to determine which questions should be prioritized in the survey. The method's adaptive nature allows for the exploration of new survey questions, while imposing minimal costs in survey length. Applications in the domains of Latino information environments, national issue importance, and local politics showcase CSAS's ability to identify topics that might otherwise escape the notice of survey researchers. I conclude by highlighting CSAS's potential to bridge conceptual gaps between researchers and participants in survey research."
  },
  {
    "id": "von-2024-148",
    "citation": "von der Heyde, L., Haensch, A.-C., & Wenz, A. (2024b). Vox Populi, Vox AI? Using Language Models to Estimate German Public Opinion. https://doi.org/10.48550/arXiv.2407.08563 v",
    "title": "Vox Populi, Vox AI? Using Language Models to Estimate German Public Opinion",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2407.08563",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "German"
    ],
    "population": [
      "Germany"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "The recent development of large language models (LLMs) has spurred discussions about whether LLM-generated \"synthetic samples\" could complement or replace traditional surveys, considering their training data potentially reflects attitudes and behaviors prevalent in the population. A number of mostly US-based studies have prompted LLMs to mimic survey respondents, with some of them finding that the responses closely match the survey data. However, several contextual factors related to the relationship between the respective target population and LLM training data might affect the generalizability of such findings. In this study, we investigate the extent to which LLMs can estimate public opinion in Germany, using the example of vote choice. We generate a synthetic sample of personas matching the individual characteristics of the 2017 German Longitudinal Election Study respondents. We ask the LLM GPT-3.5 to predict each respondent's vote choice and compare these predictions to the survey-based estimates on the aggregate and subgroup levels. We find that GPT-3.5 does not predict citizens' vote choice accurately, exhibiting a bias towards the Green and Left parties. While the LLM captures the tendencies of \"typical\" voter subgroups, such as partisans, it misses the multifaceted factors swaying individual voter choices. By examining the LLM-based prediction of voting behavior in a new context, our study contributes to the growing body of research about the conditions under which LLMs can be leveraged for studying public opinion. The findings point to disparities in opinion representation in LLMs and underscore the limitations in applying them for public opinion estimation."
  },
  {
    "id": "on-2024-149",
    "citation": "on der Heyde, L., Haensch, A.-C., & Wenz, A. (2024a). United in Diversity? Contextual Biases in LLM-Based Predictions of the 2024 European Parliament Elections. https://doi.org/10.48550/arXiv.2409.09045",
    "title": "United in Diversity? Contextual Biases in LLM-Based Predictions of the 2024 European Parliament Elections",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2409.09045",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4-Turbo",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English",
      "German",
      "French",
      "Swedish",
      "Slovak",
      "Polish"
    ],
    "population": [
      "EU countries"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Large language models (LLMs) are perceived by some as having the potential to revolutionize social science research, considering their training data includes information on human attitudes and behavior. If these attitudes are reflected in LLM output, LLM-generated \"synthetic samples\" could be used as a viable and efficient alternative to surveys of real humans. However, LLM-synthetic samples might exhibit coverage bias due to training data and fine-tuning processes being unrepresentative of diverse linguistic, social, political, and digital contexts. In this study, we examine to what extent LLM-based predictions of public opinion exhibit context-dependent biases by predicting voting behavior in the 2024 European Parliament elections using a state-of-the-art LLM. We prompt GPT-4-Turbo with anonymized individual-level background information, varying prompt content and language, ask the LLM to predict each person's voting behavior, and compare the weighted aggregates to the real election results. Our findings emphasize the limited applicability of LLM-synthetic samples to public opinion prediction. We show that (1) the LLM-based prediction of future voting behavior largely fails, (2) prediction accuracy is unequally distributed across national and linguistic contexts, and (3) improving LLM predictions requires detailed attitudinal information about individuals for prompting. In investigating the contextual differences of LLM-based predictions of public opinion, our research contributes to the understanding and mitigation of biases and inequalities in the development of LLMs and their applications in computational social science."
  },
  {
    "id": "wahidur-2023-150",
    "citation": "Wahidur, R. S. M., Tashdeed, I., Kaur, M., & Heung-No-Lee. (2023). Enhancing Zero-Shot Crypto Sentiment with Fine-tuned Language Model and Prompt Engineering. IEEE Access, 12, 10146–10159. https://doi.org/10.1109/ACCESS.2024.3350638",
    "title": "Enhancing Zero-Shot Crypto Sentiment with Fine-tuned Language Model and Prompt Engineering",
    "year": "2023",
    "doi": "https://doi.org/10.1109%2FACCESS.2024.3350638",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "finance"
    ],
    "llm_family": [
      "BERT"
    ],
    "llm": "DistilBERT, Flan-T5, MiniLM",
    "interaction_approach": [
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Blockchain technology has revolutionized the financial landscape, with cryptocurrencies gaining widespread adoption for their decentralized and transparent nature. As the sentiment expressed on social media platforms can significantly influence cryptocurrency discussions and market movements, sentiment analysis has emerged as a crucial tool for understanding public opinion and predicting market trends. Motivated by the aim to enhance sentiment analysis accuracy in the cryptocurrency domain, this paper investigates fine-tuning techniques on large language models. This paper also investigates the efficacy of supervised fine-tuning and instruction-based fine-tuning on large language models for unseen tasks. Experimental results demonstrate a significant average zero-shot performance gain of 40% after fine-tuning, highlighting the potential of this technique in optimizing pre-trained language model efficiency. Additionally, the impact of instruction tuning on models of varying scales is examined, revealing that larger models benefit from instruction tuning, achieving the highest average accuracy score of 75.16%. In contrast, smaller-scale models may experience reduced generalization due to the complete utilization of model capacity. To gain deeper insight about how instruction works with these language models, this paper presents an experimental investigation into the response of an instruction-based model under different instruction tuning setups. The investigation demonstrates that the model achieves an average accuracy score of 72.38% for short and simple instructions. This performance significantly outperforms its accuracy under long and complex instructions by over 12%, thereby effectively highlighting the profound significance of instruction characteristics in maximizing model performance."
  },
  {
    "id": "wang-2024-153",
    "citation": "Wang, M., Zhang, D. J., & Zhang, H. (2024). Large Language Models for Market Research: A Data-augmentation Approach. https://doi.org/10.48550/arXiv.2412.19363",
    "title": "Large Language Models for Market Research: A Data-augmentation Approach",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2412.19363",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo, GPT-4, GPT-4o",
    "interaction_approach": [
      "zero-shot",
      "one-/few-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Large Language Models (LLMs) have transformed artificial intelligence by excelling in complex natural language processing tasks. Their ability to generate human-like text has opened new possibilities for market research, particularly in conjoint analysis, where understanding consumer preferences is essential but often resource-intensive. Traditional survey-based methods face limitations in scalability and cost, making LLM-generated data a promising alternative. However, while LLMs have the potential to simulate real consumer behavior, recent studies highlight a significant gap between LLM-generated and human data, with biases introduced when substituting between the two. In this paper, we address this gap by proposing a novel statistical data augmentation approach that efficiently integrates LLM-generated data with real data in conjoint analysis. Our method leverages transfer learning principles to debias the LLM-generated data using a small amount of human data. This results in statistically robust estimators with consistent and asymptotically normal properties, in contrast to naive approaches that simply substitute human data with LLM-generated data, which can exacerbate bias. We validate our framework through an empirical study on COVID-19 vaccine preferences, demonstrating its superior ability to reduce estimation error and save data and costs by 24.9% to 79.8%. In contrast, naive approaches fail to save data due to the inherent biases in LLM-generated data compared to human data. Another empirical study on sports car choices validates the robustness of our results. Our findings suggest that while LLM-generated data is not a direct substitute for human responses, it can serve as a valuable complement when used within a robust statistical framework."
  },
  {
    "id": "wuttke-2024-154",
    "citation": "Wuttke, A., Aßenmacher, M., Klamm, C., Lang, M. M., Würschinger, Q., & Kreuter, F. (2024). AI Conversational Interviewing: Transforming Surveys with LLMs as Adaptive Interviewers (arXiv:2410.01824). arXiv. https://doi.org/10.48550/arXiv.2410.01824",
    "title": "AI Conversational Interviewing: Transforming Surveys with LLMs as Adaptive Interviewers",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2410.01824",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "interviewing"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-4-Turbo",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Germany"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Traditional methods for eliciting people’s opinions face a trade-off between depth and scale: structured surveys enable large-scale data collection but limit respondents’ ability to express unanticipated thoughts in their own words, while conversational interviews provide deeper insights but are resource-intensive. This study explores the potential of replacing human interviewers with large language models (LLMs) to conduct scalable conversational interviews. Our goal is to assess the performance of AI Conversational Interviewing and to identify opportunities for improvement in a controlled environment. We conducted a small-scale, indepth study with university students who were randomly assigned to be interviewed by either AI or human interviewers, both employing identical questionnaires on political topics. Various quantitative and qualitative measures assessed interviewer adherence to guidelines, response quality, participant engagement, and overall interview efficacy. The findings indicate the viability of AI Conversational Interviewing in producing quality data comparable to traditional methods, with the added benefit of scalability. Based on our experiences, we present specific recommendations for effective implementation."
  },
  {
    "id": "yan-2023-155",
    "citation": "Yan, Y., Du, W., Yang, D., & Yin, D. (2023). CIPTA: Contrastive-based Iterative Prompt-tuning Using Text Annotation from Large Language Models. 2023 4th International Conference on Electronic Communication and Artificial Intelligence (ICECAI), 174–178. https://doi.org/10.1109/ICECAI58670.2023.10176586",
    "title": "CIPTA: Contrastive-based Iterative Prompt-tuning Using Text Annotation from Large Language Models",
    "year": "2023",
    "doi": "https://doi.org/10.1109/ICECAI58670.2023.10176586",
    "publication_type": "Conference Paper",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "XLNet",
      "ChatGLM",
      "BERT"
    ],
    "llm": "BERT, RoBERTa, ChatGLM, GPT-2, GPT-3.5-Turbo, XLNet",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": null,
    "population": [
      "Other"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "In recent years, public opinion analysis has become increasingly important due to the widespread use of social media platforms and the growing influence of online information on public security. Prompt tuning, a typical few-shot learning method, ensures that the model quickly adapts to opinion analysis with different classification rules. However, existing prompt tuning for opinion analysis cannot guarantee the effectiveness of the model in zero-shot or one-shot cases. In this study, we propose the Contrastive-based Iterative Prompt-tuning method using Text-Annotation from Large Language Models (LLMs), CIPTA, for low-resource public opinion analysis. Specifically, with a small amount of manually labeled data, CIPTA leverages the knowledge from LLMs to text annotation and utilizes unsupervised contrastive embedding training to optimize text representation. Based on the prompt tuning method and the iterative training over unlabeled data, the model further utilizes the knowledge from the pre-training stage. Experiment results on tweet data show that our CIPTA achieves encouraging performance in public opinion analysis."
  },
  {
    "id": "yang-2024-156",
    "citation": "Yang, J. C., Dailisan, D., Korecki, M., Hausladen, C. I., & Helbing, D. (2024). LLM Voting: Human Choices and AI Collective Decision-Making. Proceedings of the AAAI ACM Conference on AI, Ethics, and Society, 7(1), 1696–1708. https://doi.org/10.1609/aies.v7i1.31758",
    "title": "LLM Voting: Human Choices and AI Collective Decision Making",
    "year": "2024",
    "doi": "https://doi.org/10.1609/aies.v7i1.31758",
    "publication_type": "Conference Paper",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "consumer research"
    ],
    "llm_family": [
      "GPT",
      "Llama"
    ],
    "llm": "GPT-4-Turbo, Llama-2 70B",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": null,
    "population": [
      "Switzerland"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "This paper investigates the voting behaviors of Large Language Models (LLMs), particularly OpenAI's GPT4 and LLaMA2, and their alignment with human voting patterns. Our approach included a human voting experiment to establish a baseline for human preferences and a parallel experiment with LLM agents. The study focused on both collective outcomes and individual preferences, revealing differences in decision-making and inherent biases between humans and LLMs. We observed a trade-off between preference diversity and alignment in LLMs, with a tendency towards more uniform choices as compared to the diverse preferences of human voters. This finding indicates that LLMs could lead to more homogenized collective outcomes when used in voting assistance, underscoring the need for cautious integration of LLMs into democratic processes."
  },
  {
    "id": "yu-2024-157",
    "citation": "Yu, J., Zhao, J., Miranda-Moreno, L., & Korp, M. (2024). Modular Conversational Agents for Surveys and Interviews. arXiv. https://doi.org/10.48550/ARXIV.2412.17049",
    "title": "Modular Conversational Agents for Surveys and Interviews",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2412.17049",
    "publication_type": "Preprint",
    "phase": [
      "data collection",
      "post-data collection"
    ],
    "task": [
      "interviewing",
      "data analysis"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT",
      "Claude"
    ],
    "llm": "Claude-3 Sonnet, GPT-4, GPT-4o",
    "interaction_approach": null,
    "language": [
      "English",
      "French"
    ],
    "population": [
      "Canada"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Surveys and interviews (structured, semi-structured, or unstructured) are widely used for collecting insights on emerging or hypothetical scenarios. Traditional human-led methods often face challenges related to cost, scalability, and consistency. Recently, various domains have begun to explore the use of conversational agents (chatbots) powered by large language models (LLMs). However, as public investments and policies on infrastructure and services often involve substantial public stakes and environmental risks, there is a need for a rigorous, transparent, privacy-preserving, and cost-efficient development framework tailored for such major decision-making processes. This paper addresses this gap by introducing a modular approach and its resultant parameterized process for designing conversational agents. We detail the system architecture, integrating engineered prompts, specialized knowledge bases, and customizable, goal-oriented conversational logic in the proposed approach. We demonstrate the adaptability, generalizability, and efficacy of our modular approach through three empirical studies: (1) travel preference surveys, highlighting multimodal (voice, text, and image generation) capabilities; (2) public opinion elicitation on a newly constructed, novel infrastructure project, showcasing question customization and multilingual (English and French) capabilities; and (3) transportation expert consultation about future transportation systems, highlighting real-time, clarification request capabilities for open-ended questions, resilience in handling erratic inputs, and efficient transcript post-processing. The results show the effectiveness of this modular approach and how it addresses key ethical, privacy, security, and token consumption concerns, setting the stage for the next-generation surveys and interviews."
  },
  {
    "id": "yun-2024-158",
    "citation": "Yun, H. S., Arjmand, M., Sherlock, P. R., Paasche-Orlow, M. K., Griffith, J. W., & Bickmore, T. W. (2024). Keeping Users Engaged During Repeated Interviews by a Virtual Agent: Using Large Language Models to Reliably Diversify Questions. Proceedings of the 24th ACM International Conference on Intelligent Virtual Agents, 13:1-13:10. https://doi.org/10.1145/3652988.3673929",
    "title": "Keeping Users Engaged During Repeated Interviews by a Virtual Agent: Using Large Language Models to Reliably Diversify Questions",
    "year": "2024",
    "doi": "https://doi.org/10.1145/3652988.3673929",
    "publication_type": "Conference Paper",
    "phase": [
      "pre-data collection",
      "data collection"
    ],
    "task": [
      "instrument development",
      "interviewing"
    ],
    "silicon_sampling": null,
    "domain": null,
    "llm_family": [
      "GPT"
    ],
    "llm": "ChatGPT, GPT-3",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": null,
    "data_type": [
      "survey"
    ],
    "abstract": "Standardized, validated questionnaires are vital tools in research and healthcare, offering dependable self-report data. Prior work has revealed that virtual agent-administered questionnaires are almost equivalent to self-administered ones in an electronic form. Despite being an engaging method, repeated use of virtual agent-administered questionnaires in longitudinal or pre-post studies can induce respondent fatigue, impacting data quality via response biases and decreased response rates. We propose using large language models (LLMs) to generate diverse questionnaire versions while retaining good psychometric properties. In a longitudinal study, participants interacted with our agent system and responded daily for two weeks to one of the following questionnaires: a standardized depression questionnaire, question variants generated by LLMs, or question variants accompanied by LLM-generated small talk. The responses were compared to a validated depression questionnaire. Psychometric testing revealed consistent covariation between the external criterion and focal measure administered across the three conditions, demonstrating the reliability and validity of the LLM-generated variants. Participants found that the variants were significantly less repetitive than repeated administrations of the same standardized questionnaire. Our findings highlight the potential of LLM-generated variants to invigorate agent-administered questionnaires and foster engagement and interest, without compromising their validity."
  },
  {
    "id": "zeng-2025-159",
    "citation": "Zeng, Q., Liu, G., Xue, Z., Ford, D., Voigt, R., Hagen, L., & Li, L. (2025). Sympathy over Polarization: A Computational Discourse Analysis of Social Media Posts about the July 2024 Trump Assassination Attempt. arXiv. https://doi.org/10.48550/ARXIV.2501.09950",
    "title": "Sympathy over Polarization: A Computational Discourse Analysis of Social Media Posts about the July 2024 Trump Assassination Attempt",
    "year": "2025",
    "doi": "https://doi.org/10.48550/arXiv.2501.09950",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Claude",
      "DeepSeek",
      "BERT"
    ],
    "llm": "Claude-3.5, DeepSeek-V2.5, GPT-4o, GPT-4o-mini, BERTopic, all-MiniLM-L6-v2",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "On July 13, 2024, at the Trump rally in Pennsylvania, someone attempted to assassinate Republican Presidential Candidate Donald Trump. This attempt sparked a large-scale discussion on social media. We collected posts from X (formerly known as Twitter) one week before and after the assassination attempt and aimed to model the short-term effects of such a “shock” on public opinions and discussion topics. Specifically, our study addresses three key questions: first, we investigate how public sentiment toward Donald Trump shifts over time and across regions (RQ1) and examine whether the assassination attempt itself significantly affects public attitudes, independent of the existing political alignments (RQ2). Finally, we explore the major themes in online conversations before and after the crisis, illustrating how discussion topics evolved in response to this politically charged event (RQ3). By integrating large language model-based sentiment analysis, difference-in-differences modeling, and topic modeling techniques, we find that following the attempt the public response was broadly sympathetic to Trump rather than polarizing, despite baseline ideological and regional disparities."
  },
  {
    "id": "zenimoto-2024-160",
    "citation": "Zenimoto, Y., Hasegawa, R., Utsuro, T., Yoshioka, M., & Kando, N. (2024). Coding Open-Ended Responses using Pseudo Response Generation by Large Language Models. Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, (Volume 4: Student Research Workshop), 242–254. https://doi.org/10.18653/v1/2024.naacl-srw.26",
    "title": "Coding Open-Ended Responses using Pseudo Response Generation by Large Language Models",
    "year": "2024",
    "doi": "https://doi.org/10.18653/v1/2024.naacl-srw.26",
    "publication_type": "Conference Paper",
    "phase": [
      "data collection",
      "post-data collection"
    ],
    "task": [
      "data generation",
      "classification"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "BERT"
    ],
    "llm": "BERT, GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot",
      "fine-tuning"
    ],
    "language": [
      "Chinese"
    ],
    "population": [
      "Japan"
    ],
    "data_type": [
      "open-ends"
    ],
    "abstract": "Survey research using open-ended responses is an important method that contributes to the discovery of unknown issues and new needs. However, survey research generally requires time and cost-consuming manual data processing, indicating that it is difficult to analyze large dataset. To address this issue, we propose an LLM-based method to automate parts of the grounded theory approach (GTA), a representative approach of the qualitative data analysis. We generated and annotated pseudo open-ended responses, and used them as the training data for the coding procedures of GTA. Through evaluations, we showed that the models trained with pseudo open-ended responses are quite effective compared with those trained with manually annotated open-ended responses. We also demonstrate that the LLM-based approach is highly efficient and cost-saving compared to human-based approach."
  },
  {
    "id": "zhang-2024-161",
    "citation": "Zhang, B., Chen, T., Wang, X., Li, Q., Zhang, W., & Wang, F.-Y. (2024). Decoding Activist Public Opinion in Decentralized Self-Organized Protests Using LLM. IEEE Transactions on Computational Social Systems, 11(4), 5525–5535. https://doi.org/10.1109/TCSS.2024.3398815",
    "title": "Decoding Activist Public Opinion in Decentralized Self-Organized Protests Using LLM",
    "year": "2024",
    "doi": "https://doi.org/10.1109/TCSS.2024.3398815",
    "publication_type": "Journal Article",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "classification"
    ],
    "silicon_sampling": null,
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "0"
    ],
    "llm": "MiniLM, ChatGLM2-6B, ChatGLM3-6B, Llama2-7B",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English",
      "Chinese"
    ],
    "population": [
      "France"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "Based on an investigation of online public opinion on the Nahel Merzouk protests in France, an approach for analyzing and predicting public opinion on protests based on large language model (LLM) is proposed, revealing the impact of emerging social media on the protests. We demonstrate that protests generate public opinion on social media with some lag, but that comment sentiment and expression are consistent with protest trends. As the protests unfolded, we analyzed the evolution of public sentiment. We constructed the prompt based on historical data to predict the protests using the p-tuning and Lora approach to fine-tune LLM. In addition, we discuss how to use blockchain technology to optimize distributed, self-organizing protests and reduce the potential for disinformation and violent conflict."
  },
  {
    "id": "zhang-2024-162",
    "citation": "Zhang, M., Lindsay, E. D., Thorbensen, F. B., Poulsen, D. B., & Bjerva, J. (2024). Leveraging Large Language Models for Actionable Course Evaluation Student Feedback to Lecturers (Version 2). arXiv. https://doi.org/10.48550/ARXIV.2407.01274",
    "title": "Leveraging Large Language Models for Actionable Course Evaluation Student Feedback to Lecturers",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2407.01274",
    "publication_type": "Preprint",
    "phase": [
      "post-data collection"
    ],
    "task": [
      "data analysis"
    ],
    "silicon_sampling": null,
    "domain": [
      "education"
    ],
    "llm_family": [
      "Llama"
    ],
    "llm": "Llama-2 7B",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "Denmark"
    ],
    "data_type": [
      "survey",
      "open-ends"
    ],
    "abstract": "End of semester student evaluations of teaching are the dominant mechanism for providing feedback to academics on their teaching practice. For large classes, however, the volume of feedback makes these tools impractical for this purpose. This paper explores the use of open-source generative AI to synthesise factual, actionable and appropriate summaries of student feedback from these survey responses. In our setup, we have 742 student responses ranging over 75 courses in a Computer Science department. For each course, we synthesise a summary of the course evaluations and actionable items for the instructor. Our results reveal a promising avenue for enhancing teaching practices in the classroom setting. Our contribution lies in demonstrating the feasibility of using generative AI to produce insightful feedback for teachers, thus providing a cost-effective means to support educators' development. Overall, our work highlights the possibility of using generative AI to produce factual, actionable, and appropriate feedback for teachers in the classroom setting."
  },
  {
    "id": "zhang-2024-163",
    "citation": "Zhang, X., Lin, J., Sun, L., Qi, W., Yang, Y., Chen, Y., Lyu, H., Mou, X., Chen, S., Luo, J., Huang, X., Tang, S., & Wei, Z. (2024). ElectionSim: Massive Population Election Simulation Powered by Large Language Model Driven Agents. arXiv. https://doi.org/10.48550/ARXIV.2410.20746",
    "title": "ElectionSim: Massive Population Election Simulation Powered by Large Language Model Driven Agents",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2410.20746",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT",
      "Claude",
      "Gemini"
    ],
    "llm": "GPT-4o, GPT-4o-mini, Claude-3.5-Sonnet, Qwen-2-7b-Instruct, Qwen-2-72b-Instruct, Qwen-2.5-72b-Instruct, Llama-3-70b-Instruct",
    "interaction_approach": [
      "zero-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "social media"
    ],
    "abstract": "The massive population election simulation aims to model the preferences of specific groups in particular election scenarios. It has garnered significant attention for its potential to forecast real-world social trends. Traditional agent-based modeling (ABM) methods are constrained by their ability to incorporate complex individual background information and provide interactive prediction results. In this paper, we introduce ElectionSim, an innovative election simulation framework based on large language models, designed to support accurate voter simulations and customized distributions, together with an interactive platform to dialogue with simulated voters. We present a million-level voter pool sampled from social media platforms to support accurate individual simulation. We also introduce PPE, a poll-based presidential election benchmark to assess the performance of our framework under the U.S. presidential election scenario. Through extensive experiments and analyses, we demonstrate the effectiveness and robustness of our framework in U.S. presidential election simulations."
  },
  {
    "id": "zhou-2024-164",
    "citation": "Zhou, M., Yu, L., Geng, X., & Luo, L. (2024). ChatGPT vs Social Surveys: Probing the Objective and Subjective Human Society. https://doi.org/10.48550/arXiv.2409.02601",
    "title": "ChatGPT vs Social Surveys: Probing the Objective and Subjective Human Society",
    "year": "2024",
    "doi": "https://doi.org/10.48550/arXiv.2409.02601",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": [
      "public opinion"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5",
    "interaction_approach": [
      "one-/few-shot"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "The extent to which Large Language Models (LLMs) can simulate the data-generating process for social surveys remains unclear. Current research has not thoroughly assessed potential biases in the sociodemographic population represented within the language model's framework. Additionally, the subjective worlds of LLMs often show inconsistencies in how closely their responses match those of groups of human respondents. In this paper, we used ChatGPT-3.5 to simulate the sampling process and generated six socioeconomic characteristics from the 2020 US population. We also analyzed responses to questions about income inequality and gender roles to explore GPT's subjective attitudes. By using repeated random sampling, we created a sampling distribution to identify the parameters of the GPT-generated population and compared these with Census data. Our findings show some alignment in gender and age means with the actual 2020 US population, but we also found mismatches in the distributions of racial and educational groups. Furthermore, there were significant differences between the distribution of GPT's responses and human self-reported attitudes. While the overall point estimates of GPT's income attitudinal responses seem to align with the mean of the population occasionally, their response distributions follow a normal distribution that diverges from human responses. In terms of gender relations, GPT's answers tend to cluster in the most frequently answered category, demonstrating a deterministic pattern. We conclude by emphasizing the distinct design philosophies of LLMs and social surveys: LLMs aim to predict the most suitable answers, while social surveys seek to reveal the heterogeneity among social groups."
  },
  {
    "id": "li-2024-165",
    "citation": "Li, J., Peris, C., Mehrabi, N., Goyal, P., Chang, K.-W., Galstyan, A., Zemel, R., & Gupta, R. (2024). The steerability of large language models toward data-driven personas. In K. Duh, H. Gomez, & S. Bethard (Eds.), Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers) (pp. 7290–7305). Association for Computational Linguistics. https://doi.org/10.18653/v1/2024.naacl-long.405",
    "title": "The steerability of large language models toward data-driven personas",
    "year": "2024",
    "doi": "https://doi.org/10.18653/v1/2024.naacl-long.405",
    "publication_type": "Conference Paper",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "silicon sampling",
    "domain": null,
    "llm_family": [
      "0"
    ],
    "llm": "GPT-Neo-1.3B, GPT-Neo-2.7B, GPT-j-6B, Falcon-7B-Instruct",
    "interaction_approach": [
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Large language models (LLMs) are known to generate biased responses where the opinions of certain groups and populations are underrepresented. Here, we present a novel approach to achieve controllable generation of specific viewpoints using LLMs, that can be leveraged to produce multiple perspectives and to reflect the diverse opinions. Moving beyond the traditional reliance on demographics like age, gender, or party affiliation, we introduce a data-driven notion of persona grounded in collaborative filtering, which is defined as either a single individual or a cohort of individuals manifesting similar views across specific inquiries. As individuals in the same demographic group may have different personas, our data-driven persona definition allows for a more nuanced understanding of different (latent) social groups present in the population. In addition to this, we also explore an efficient method to steer LLMs toward the personas that we define. We show that our data-driven personas significantly enhance model steerability, with improvements of between 57%-77% over our best performing baselines."
  },
  {
    "id": "brand-2023-166",
    "citation": "Brand, J., Israeli, A., & Ngwe, D. (2023). Using GPT for Market Research. https://dx.doi.org/10.2139/ssrn.4395751",
    "title": "Using GPT for Market Research",
    "year": "2023",
    "doi": "https://dx.doi.org/10.2139/ssrn.4395751",
    "publication_type": "Preprint",
    "phase": [
      "data collection"
    ],
    "task": [
      "data generation"
    ],
    "silicon_sampling": "no silicon sampling",
    "domain": [
      "consumer research"
    ],
    "llm_family": [
      "GPT"
    ],
    "llm": "GPT-3.5-Turbo",
    "interaction_approach": [
      "zero-shot",
      "fine-tuning"
    ],
    "language": [
      "English"
    ],
    "population": [
      "United States"
    ],
    "data_type": [
      "survey"
    ],
    "abstract": "Large language models (LLMs) have quickly become popular as labor-augmenting tools for programming, writing, and many other processes that benefit from quick text generation. In this paper we explore the uses and benefits of LLMs for marketing researchers and practitioners. In contrast to prior work, we focus on the distributional nature of LLM responses. We offer two sets of results. First, we show that the Generative Pre-trained Transformer 3 (GPT-3) model, a widely-used LLM, responds to sets of survey questions in ways that are consistent with economic theory and well-documented patterns of consumer behavior, including downward-sloping demand curves and state dependence. Second, we show that estimates of willingness-to-pay for products and features generated by GPT-3 are of reasonable magnitudes and match estimates from a recent study that elicited preferences from human consumers. We also offer preliminary guidelines for how best to query information from GPT-3 for marketing purposes and discuss potential limitations."
  }
];
