---
title: "InvenioRDM April Release"
authors: 
  - lnielsen
  - lkeefe
  - fenekku
date: 2020-05-05
doi: https://doi.org/10.5555/mcw20-dng91
tags: 
  - InvenioRDM
permalink: "/blog/2020-05-05-april-release/"
---

We are pleased to announce the InvenioRDM April release. The Deposit page has been our focus and that meant designing the frontend and the backend based on lessons learned from the beta invenio-deposit python module and from the invenio-records-js and invenio-files-js previous angularjs modules. We will be implementing most of these designs in May.

Thank you all for testing the last release and for your many contributions.

### Some Highlights include:

- Requests for comments (RFCs) from the numerous conversations. These are living and changing documents.
  * Deposit frontend: https://github.com/inveniosoftware/rfcs/issues/27
  * Deposit backend: https://github.com/inveniosoftware/rfcs/issues/22
- Two new modules have been created to improve the REST API and deal with the deposit backend
  * https://github.com/inveniosoftware/flask-resources
  * https://github.com/inveniosoftware/invenio-resources
- On the frontend we have added a proof of concept deposit page with 2 fields (title and resource type).
- These are in part powered by an improved controlled vocabulary backend and an all-new React frontend.
- This page is accessible through the Upload link of the search page.
- Invenio-S3 v1.0.3 has been released with better big file upload support
- Various dependency fixes have been applied and the cookiecutter slugification made more solid
- Auto-reloading of webpack has been made possible allowing us to work much more effectively with React

### Want to get involved?

Although in this release, we haven’t made significant visual changes, you are always welcomed to try new releases - invenio-cli v0.12.X, this time around- by following the documentation site: https://inveniordm.docs.cern.ch/ . Give us feedback on Discourse: https://invenio-talk.web.cern.ch/t/inveniordm-alpha-6-april-release/104 for this release.

As mentioned, apart from the /deposits/new proof of concept page you won’t see much other differences. Take it easy this time. We will be asking a lot of feedback from you next month!

Thank you for your interest, take care and stay safe!