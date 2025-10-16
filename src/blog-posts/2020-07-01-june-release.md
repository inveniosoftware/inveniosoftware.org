---
title: "InvenioRDM June Release"
authors: 
  - lkeefe
  - ppanero
date: 2020-07-01
doi: https://doi.org/10.5555/ddtx7-4cg23
tags: 
  - InvenioRDM
permalink: "/blog/2020-07-01-june-release/"
---

We are happy to announce InvenioRDM Alpha 8 (June release). Thank you to our team members for their efforts on this release.

### What's new?

The June release is a major backend development release. We developed three new modules that lay the foundation for the new core data flow of Invenio(RDM). Our work goes far to provide a better developer experience. You will be able to work on and customize Invenio(RDM) in an easier and cleaner way.

The primary focus for the release was:

- Continue the migration from Bootstrap to SemanticUI
- Bug fixes and improvements on the frontend (mainly on deposit)
- Develop new core modules for Invenio(RDM) backend

#### UI Customization

You are able to customize your templates again. The JSX customizations are not functional yet though, which means the search page results are not customizable.

#### Visual appearance

We have migrated the file previewer, the OAuth login, and the settings pages to SemanticUI.

You might still notice some issues related to visual appearance (e.g. the name previewed file is not in a panel as before). We will be working on making all this perfect in the next sprint on SemanticUI (end of August). In the meantime, it is, at least, better.

![](/assets/images/blog-posts/record_page.jpeg)

#### Creators, Contributors and Affiliations Identifiers

The Deposit page now accepts [ORCID iDs](https://orcid.org/) for people (creators and contributors) and [ROR identifiers](https://ror.org/) for organizations (creators, contributors and affiliations). An icon with a link to the respective entity on the record landing page reflects this connection.

Contributors are now optional on the deposit page as well.

#### Python versions

There are now Invenio images for Python 3.7 and Python 3.8! This means that you can use Python 3.6, 3.7 and 3.8 for local development and the full containerized mode.

#### Backend and REST APIs

We have put a significant amount of work in refactoring some of the core API flow of Invenio. This addresses many of the issues that Invenio was facing in this domain. As a result, three modules were created:

- https://github.com/inveniosoftware/flask-resources: A generic Flask module to implement REST APIs and make their customization easy.
- https://github.com/inveniosoftware/invenio-resources: A module customizing Flask-Resources for Invenio(RDM) APIs.
- https://github.com/ppanero/invenio-records-agent: An experimental module to bridge the representational and data access worlds in Invenio. This module hosts the business logic and might be merged back into invenio-resources.

### What do you need to do?

Follow the documentation site: https://inveniordm.docs.cern.ch/ and install the latest invenio-cli v0.14.2+, create a new instance and see how it looks like!

**Install (TL;DR)**

If you previously installed InvenioRDM, make sure you have the latest Docker image of your choice according to the Python version:

```bash
docker pull inveniosoftware/centos7-python:3.6
docker pull inveniosoftware/centos8-python:3.7
docker pull inveniosoftware/centos8-python:3.8
```

To install:

```bash
pip install invenio-cli --upgrade
invenio-cli init rdm
cd my-site
invenio-cli containerize --pre
invenio-cli demo --containers
```

To destroy the Python virtualenv, and remove the docker containers run:

```bash
cd my-site
pipenv --rm
docker-compose -f docker-compose.full.yml down
```

### Feedback

As always, we welcome your feedback. We are experimenting with Discourse's built in post template. This means when you [provide feedback on Discourse](https://invenio-talk.web.cern.ch/t/inveniordm-alpha-8-june-release/115) your message should be pre-populated with the classic template:

```
## Bugs

## What worked well

## What didn't work well

## Wishes for documentation
```

Thank you for your patience and support. We are working hard all the time to improve things. Take care and stay safe!