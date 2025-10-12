---
title: "InvenioRDM August Release"
author: Sara Gonzales, Guillaume Viger
date: 2020-09-01
team: Invenio
permalink: "/blog/2020-09-01-august-release/"
---

We are happy to announce InvenioRDM Alpha 10 (August release)! Thank you to our team members for their efforts on this release.

### What's new?

We made some limited changes this month. However, three key areas *were* tackled.

* The concurrent Invenio Sprint brought the final Semantic-UI updates across all modules! If something does not show up right in your default RDM instance, then it's a legitimate bug now.
* These UI updates complement the updates to Search. The record search page now uses the new API endpoint from the last release. Customization of the search results is back (with documentation forthcoming). Different search pages are easier to set up.
* More library improvements across the board were merged.

Update `invenio-cli` to version 0.16.0 and follow the updated [documentation](https://inveniordm.docs.cern.ch/) to get started.


#### Semantic UI transition wrap-up

![](/assets/images/blog-posts/SemanticUI.png)
*One of the many pages that were transitioned to Semantic-UI*

The transition to Semantic-UI is for all intents and purposes complete. Future additions will use this framework and have a consistent look with the rest of InvenioRDM. Close to 15 styling issues were closed in the process.


#### Search customization and transition to new API

The search page now uses the new API (`/api/rdm-records` endpoint) we introduced in the last release. The new endpoint supports pagination and sorting, but aggregations were disabled to focus on the transitioning only.

![](/assets/images/blog-posts/SearchCustomization.png)

Aggregations will be re-enabled soon.

Custom styling of search results is possible again: documentation to explain the new way is pending however.


#### Library Improvements

Finally, various improvements and fixes were made across modules including:

* an overhaul to how links are generated in API responses,
* a way to hook callbacks into action endpoints,
* the convergence of validation for drafts and records, and
* the introduction of record versioning behind the scenes (which will be made more visible in coming releases).

Some of these changes are visible in the API responses:

```json
{
    "links": {
        "self": "https://127.0.0.1/api/rdm-records/jnmmp-51n47",
        "self_html": "https://127.0.0.1/records/jnmmp-51n47",
        "files": "https://127.0.0.1/api/rdm-records/jnmmp-51n47/files",
        "edit": "https://127.0.0.1/api/rdm-records/jnmmp-51n47/draft"
    },
    "metadata": {
         "conceptrecid": "5fk5g-mq814",
         ...
    },
    ...
}
```

### What do you need to do?

You can install the latest `invenio-cli` v0.16.0, create a new instance and see what it looks like. Make sure to follow the [updated documentation](https://inveniordm.docs.cern.ch/) - there are a couple of caveats to be made aware of.

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

As always, we welcome your feedback. When you [provide feedback on Discourse](https://invenio-talk.web.cern.ch/t/inveniordm-alpha-10-august-release/129) your message should be pre-populated with the classic template (bugs, what worked well, what didn't work well, wishes for documentation).

Here is the template to give feedback if it's not automated:

```
## Bugs

## What worked well

## What didn't work well

## Wishes for documentation
```

Take care and stay safe! The next release will be big.