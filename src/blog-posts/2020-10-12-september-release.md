---
title: "InvenioRDM September Release"
author: Lars Holm Nielsen, Sara Gonzales, Guillaume Viger
date: 2020-10-12
team: Invenio
permalink: "/blog/2020-10-12-september-release/"
---

We are glad to announce InvenioRDM Alpha 11 (September release)!

### What's new?

We now have support for drafts, meaning you can now start a deposit, save it, and come back many days later to publish it.

![](https://codimd.web.cern.ch/uploads/upload_2a5637ca669df53e811eac65b690f4f0.png)

This simple change marks a very big milestone for the backend of InvenioRDM. During the past months we have been revamping the entire data and control flow of the backend. The flow is what is supporting the core of InvenioRDM - submitting, editing and searching for records - and it determines what is possible and what's not possible in InvenioRDM. These changes enable the customizations needed by partners including customizations to permissions, publishing workflows, metadata fields, indexing and serializations just to name a few.

A high-level overview of the new flow is shown below:

![](/assets/images/blog-posts/status_platform.png)

This new flow is implemented in the following Invenio modules:

- [Flask-Resources](https://github.com/inveniosoftware/flask-resources)
- [Invenio-Records-Resources](https://github.com/inveniosoftware/invenio-records-resources)
- [Invenio-Drafts-Resources](https://github.com/inveniosoftware/invenio-drafts-resources)


### Install (TL;DR)

If you previously installed InvenioRDM, make sure you have the latest Docker image of your choice according to the Python version:

```
docker pull inveniosoftware/centos7-python:3.6
docker pull inveniosoftware/centos8-python:3.7
docker pull inveniosoftware/centos8-python:3.8
```

To install:

```
pip install --upgrade invenio-cli
invenio-cli init rdm
cd my-site
invenio-cli containerize --pre
invenio-cli demo --containers
```

To destroy the Python virtualenv, and remove the docker containers, you can now just run:

```
cd my-site
invenio-cli destroy
```

It's the first feature by Rodrigo Almeida, the newest addition to our team!