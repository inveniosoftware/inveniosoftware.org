---
title: "InvenioRDM July Release"
authors:
  - saragon02
  - fenokku
date: 2020-08-04
doi: https://doi.org/10.5555/ap3nt-jh372
tags:   
  - InvenioRDM
permalink: "/blog/2020-08-01-july-release/"
---

We are happy to announce InvenioRDM Alpha 9 (July release)! Thank you to our team members for their efforts on this release.

### What's new?

The July release adds translation support and starts integrating the [major backend development of last release](https://invenio-talk.web.cern.ch/t/inveniordm-alpha-8-june-release/115) into InvenioRDM. In particular, draft functionality has been added at the API level and is used under the hood for deposits. To achieve this integration, the hard problems like responsibility separation, error handling, pagination, linking, and internal PID management were solved. Other improvements and more details follow.

Update invenio-cli to version 0.15.0 and follow the [documentation](https://inveniordm.docs.cern.ch/) to get started.


#### Module translation

Thanks to the efforts of [TÜBITAK](https://ulakbim.tubitak.gov.tr/), InvenioRDM was set up for internationalization: all text has been registered for translation and the [Transifex service](https://www.transifex.com/) has been enabled. The team is currently at work on a VSCode extension to help future translators. Turkish was added as a first alternative language! How to go about translating and using the various tools will be laid out next month once we have more experience under our belt!

![](/assets/images/blog-posts/module_translation.png)


#### Library improvements

Error handling, default MIME type headers, and uniform body + querystring deserialization have been added to [Flask-Resources](https://github.com/inveniosoftware/flask-resources), our Invenio-agnostic Flask REST library.

![](/assets/images/blog-posts/flask-resources.png)

Note that invenio-resources is now [invenio-records-resources](https://github.com/inveniosoftware/invenio-records-resources) (it includes the former invenio-records-agent) and [invenio-drafts-resources](https://github.com/inveniosoftware/invenio-drafts-resources) is the new package that houses the draft functionality.

Behind the scenes, persistent identifiers have also seen some work.


#### New API integration (including draft functionality)

The deposit page now uses the new API to create records by creating drafts and publishing them immediately. In the next release, we hope you will be able to save and publish records separately. That being said, you can already do so on the command-line! Make sure to follow the updated documentation to see creation, publication, retrieval, and search in action there.

In addition to these tent-pole features, Python 3.7 support and general containerization was further improved thanks to [Cottage Labs](https://cottagelabs.com/) through an updated base image.


#### Community domains vocabulary

The list of available domains/disciplines that can be added to a community is now based on a pre-defined (and configurable) vocabulary.


### What do you need to do?

Follow the documentation site: https://inveniordm.docs.cern.ch/ and install the latest invenio-cli v0.15.0, create a new instance and see what it looks like!

**Install (TL;DR)**

If you previously installed InvenioRDM, make sure you have the latest Docker image of your choice according to the Python version:

```bash
docker pull inveniosoftware/centos7-python:3.6
docker pull inveniosoftware/centos8-python:3.7
docker pull inveniosoftware/centos8-python:3.8
```

To install:

```bash
pip install --upgrade invenio-cli
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

As always, we welcome your feedback. When you [provide feedback on Discourse](https://invenio-talk.web.cern.ch/t/inveniordm-alpha-9-july-release/123) your message should be pre-populated with the classic template (bugs, what worked well, what didn't work well, wishes for documentation). 

Here is the template to give feedback if it's not automated:

```
## Bugs

## What worked well

## What didn't work well

## Wishes for documentation
```

Take care and stay safe!