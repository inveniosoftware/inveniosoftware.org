---
title: "Introducing the InvenioRDM GitHub Archiver (IGA)"
author: Mike Hucka and Tom Morrell
date: 2023-06-26
team: InvenioRDM
permalink: "/blog/2023-06-26-june-inveniordm-github-archiver/"
---

![](/assets/images/blog-posts/CaltechDATA.jpg)

The InvenioRDM GitHub Archiver (IGA) is a new software tool created by the Caltech Library. [InvenioRDM](https://inveniosoftware.org/products/rdm/) is the basis for many institutional repositories, such as [CaltechDATA](https://data.caltech.edu/), that enable users to preserve software and data sets in a long-term archive. The metadata contained in the record of a deposit is critical to making the record widely discoverable by other people. However, creating detailed records and uploading assets can be a tedious and error-prone process if done manually. This is where our new tool comes in. 

IGA creates metadata records and sends releases automatically from GitHub to an InvenioRDM-based repository server. It constructs a metadata record using information it gathers from the software release, the GitHub repository, the GitHub API, and various other APIs as needed. Here are some of IGA’s other notable features:

- Automatic metadata extraction from GitHub releases, repositories, and ``codemeta.json`` and ``CITATION.cff`` files
- Thorough coverage of [InvenioRDM record metadata](https://inveniordm.docs.cern.ch/reference/metadata) using painstaking procedures
- Recognition of identifiers that appear in CodeMeta and CFF files, including [ORCiD](https://orcid.org/), [ROR](https://ror.org/), [DOI](https://www.doi.org/), [arXiv](https://arxiv.org/), and [PMCID](https://www.ncbi.nlm.nih.gov/pmc/about/public-access-info/)
- Automatic lookup of publication data in [DOI.org](https://www.doi.org/), [PubMed](https://pubmed.ncbi.nlm.nih.gov/), Google Books, & other sources if needed
- Automatic lookup of organization names in [ROR](https://ror.org/) (assuming ROR id’s are provided)
- Automatic lookup of human names in [ORCiD.org](https://orcid.org/) if needed (assuming ORCID id’s are provided)
- Automatic splitting of human names into family and given names using [ML](https://en.wikipedia.org/wiki/Machine_learning)-based methods if necessary
- Support for record versioning
- Support for InvenioRDM [communities](https://invenio-communities.readthedocs.io/en/latest/)
- Support for overriding the metadata record IGA creates, for complete control if you need it
- Ability to use the GitHub API without a [GitHub access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in many cases
- Extensive use of logging so you can see what’s going on under the hood

Data and software archived in a repository need to be described thoroughly and richly cross-referenced in order to be widely discoverable by other people. Of particular interest to software developers is that a repository like CaltechDATA offers the means to preserve software projects in a long-term archive managed by their institution. IGA helps make the creation of metadata and InvenioRDM records for software and data managed in GitHub as easy as possible.

More information about the InvenioRDM GitHub Archiver is available at [caltechlibrary.github.io/iga/](https://caltechlibrary.github.io/iga/).