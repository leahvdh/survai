class Paper:
    def __init__(self, json, query, query_term, paper_num_within_query):
        # save the params
        self.json = json
        self.query = query
        self.query_term = query_term
        self.paper_num_within_query = paper_num_within_query

        # parse the details
        self.parse_json()

    def parse_json(self):
        self.id = self.json["paperId"]
        self.url = self.json["url"]
        self.title = self.json["title"]
        self.abstract = self.clean(self.json["abstract"])
        self.year = self.json["year"]
        self.publication_types = self.json["publicationTypes"]
        self.journal = self.json["journal"]
        self.authors = self.json["authors"]

    def clean(self, entry):
        if entry is None:
            return entry

        return entry.replace("{", "[").replace("}", "]")

    def convert_query_term(self):
        return self.query_term.strip("\"").replace(" ", "_")

    def convert_authors(self):
        return " and ".join([author["name"] for author in self.authors])

    def is_arXiv(self):
        if (self.publication_types is not None
                and "arXiv" in self.publication_types):
            return True
        elif (self.journal is not None
                and "name" in self.journal
                and "arxiv" in self.journal["name"].lower()):
            return True
        else:
            return False

    def is_journal(self):
        # Note: order is important because sometimes "JournalArticle" is included
        # with "Conference" or "Book"
        if self.publication_types is None:
            # default to journal so we use @article for BibTeX
            return True
        elif ("Conference" in self.publication_types
              or "Book" in self.publication_types):
            return False
        elif ("JournalArticle" in self.publication_types
              or "Review" in self.publication_types
              or "Editorial" in self.publication_types
              or "CaseReport" in self.publication_types):
            return True
        elif self.journal is not None:
            # default to journal so we use @article for BibTeX
            return True
        else:
            return False

    def is_conference(self):
        if (self.publication_types is not None
                and "Conference" in self.publication_types):
            return True
        elif (self.journal is not None
              and ("name" in self.journal)
              and ("proceedings" in self.journal["name"].lower()
                   or "conference" in self.journal["name"].lower()
                   or "symposium" in self.journal["name"].lower()
                   or "workshop" in self.journal["name"].lower())):
            return True
        else:
            return False

    def is_inbook(self):
        if self.publication_types is None:
            return False
        elif ("Book" in self.publication_types
              and not ("Conference" in self.publication_types)):
            if self.journal is not None and "name" in self.journal:
                # this is a chapter in a book
                return True
            else:
                # this is a book
                return False
        else:
            return False

    def is_book(self):
        if self.publication_types is None:
            return False
        elif ("Book" in self.publication_types
              and not ("Conference" in self.publication_types)):
            if self.journal is not None and "name" in self.journal:
                # this is a chapter in a book
                return False
            else:
                # this is a book
                return True
        else:
            return False

    def convert_journal(self):
        if self.journal is None:
            return ""

        if self.is_arXiv():
            arxiv = f'  journal = {{CoRR}},\n'

            have_volume = False
            if (self.journal is not None
                    and "volume" in self.journal):
                volume = self.journal["volume"]
                have_volume = volume != ""

                if have_volume:
                    arxiv += f'  volume = {{{self.journal["volume"]}}},\n'

            if not have_volume and "arxiv.org" in self.url:
                arxiv_id = self.url.split("/")[-1]
                arxiv += f'  volume = {{{arxiv_id}}},\n'

            return arxiv
        if self.is_conference():
            conference = ""

            if "name" in self.journal:
                conference += f'  booktitle = {{{self.journal["name"]}}},\n'

            if "pages" in self.journal:
                conference += f'  pages = {{{self.journal["pages"]}}},\n'

            return conference
        elif self.is_inbook():
            inbook = ""

            if "name" in self.journal:
                inbook += f'  title = {{{self.journal["name"]}}},\n'

            return inbook
        elif self.is_book():
            book = ""

            return book
        elif self.is_journal():
            journal = ""

            if "name" in self.journal and self.journal["name"]:
                journal += f'  journal = {{{self.journal["name"]}}},\n'

            if "volume" in self.journal and self.journal["volume"]:
                journal += f'  volume = {{{self.journal["volume"]}}},\n'

            if "number" in self.journal and self.journal["number"]:
                journal += f'  number = {{{self.journal["number"]}}},\n'

            if "pages" in self.journal and self.journal["pages"]:
                journal += f'  pages = {{{self.journal["pages"]}}},\n'

            return journal


    def to_bibtex(self):
        if self.is_arXiv():
            return self.arxiv_bibtex()
        elif self.is_conference():
            return self.conference_bibtex()
        elif self.is_journal():
            return self.journal_bibtex()
        elif self.is_inbook():
            return self.inbook_bibtex()
        elif self.is_book():
            return self.book_bibtex()

    def arxiv_bibtex(self):
        query_term = self.convert_query_term()
        authors = self.convert_authors()
        arxiv_details = self.convert_journal()

        bibtex = (
            f"@article{{{query_term}_{self.paper_num_within_query},\n"
            f"  title = {{{self.title}}},\n"
            f"  author = {{{authors}}},\n"
            f"  year = {{{self.year}}},\n"
            f"{arxiv_details}"
            f"  abstract = {{{self.abstract}}},\n"
            f"  url = {{{self.url}}}\n"
            f"}}\n")

        return bibtex

    def conference_bibtex(self):
        query_term = self.convert_query_term()
        authors = self.convert_authors()
        conference_details = self.convert_journal()

        bibtex = (
            f"@inproceedings{{{query_term}_{self.paper_num_within_query},\n"
            f"  title = {{{self.title}}},\n"
            f"  author = {{{authors}}},\n"
            f"  year = {{{self.year}}},\n"
            f"{conference_details}"
            f"  abstract = {{{self.abstract}}},\n"
            f"  url = {{{self.url}}}\n"
            f"}}\n")

        return bibtex

    def journal_bibtex(self):
        query_term = self.convert_query_term()
        authors = self.convert_authors()
        journal_details = self.convert_journal()

        bibtex = (
            f"@article{{{query_term}_{self.paper_num_within_query},\n"
            f"  title = {{{self.title}}},\n"
            f"  author = {{{authors}}},\n"
            f"  year = {{{self.year}}},\n"
            f"{journal_details}"
            f"  abstract = {{{self.abstract}}},\n"
            f"  url = {{{self.url}}}\n"
            f"}}\n")

        return bibtex

    def inbook_bibtex(self):
        query_term = self.convert_query_term()
        authors = self.convert_authors()
        book_details = self.convert_journal()

        bibtex = (
            f"@inbook{{{query_term}_{self.paper_num_within_query},\n"
            f"  chapter = {{{self.title}}},\n"
            f"  author = {{{authors}}},\n"
            f"  year = {{{self.year}}},\n"
            f"{book_details}"
            f"  abstract = {{{self.abstract}}},\n"
            f"  url = {{{self.url}}}\n"
            f"}}\n")

        return bibtex

    def book_bibtex(self):
        query_term = self.convert_query_term()
        authors = self.convert_authors()
        book_details = self.convert_journal()

        bibtex = (
            f"@book{{{query_term}_{self.paper_num_within_query},\n"
            f"  title = {{{self.title}}},\n"
            f"  author = {{{authors}}},\n"
            f"  year = {{{self.year}}},\n"
            f"{book_details}"
            f"  abstract = {{{self.abstract}}},\n"
            f"  url = {{{self.url}}}\n"
            f"}}\n")

        return bibtex
