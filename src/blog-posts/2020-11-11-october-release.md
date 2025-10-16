---
title: "InvenioRDM October Release"
authors: 
  - lnielsen
  - saragon02
date: 2020-11-11
doi: https://doi.org/10.5555/wbm60-xha84
tags: 
  - InvenioRDM
permalink: "/blog/2020-11-11-october-release/"
---

We're happy to announce the InvenioRDM October release. Thank you to our team members for their efforts on this release.

In early October we held a virtual project workshop. As part of the workshop we have updated the roadmap. The roadmap is now publicly available in two versions, one simplified and one for project tracking. See below:

1- [Simplified](https://inveniosoftware.org/products/rdm/roadmap/)

![](/assets/images/blog-posts/roadmap_simplified.png)


2- [GitHub for project tracking](https://github.com/inveniosoftware/product-rdm/milestones?direction=asc&sort=due_date&state=open)

![](/assets/images/blog-posts/roadmap_tracking.png)

### What's new?

#### Metadata Schema

The entire metadata schema for bibliographic records has been updated, and is now ready for a thorough review by all project partners. The update includes changes to the JSONSchema, Elasticsearch mappings, the REST API data validation layer as well as addition of many fields to the deposit form.

See (https://inveniordm.docs.cern.ch/reference/metadata/) for a full reference of the new metadata schema.

#### User Experience

We have done a lot of work on improving the UX of the primary pages such as the frontpage, search results and record landing page. Below you can see some screenshots of before/after:

**Search results**

The search results have been tightened up as well. Also, we’ve added support for nested facets, so you can expand broader categories into subcategories (e.g., Publication and Image).

![](/assets/images/blog-posts/search_before_after.png)

**Landing page**

The landing page you’ll notice now has Edit and New version buttons (only the Edit button currently works). The right column has been tightened up, and most of the new metadata fields are now properly displayed on the landing page.

![](/assets/images/blog-posts/landing_before_after.png)

**Human readable labels**

In the facets you’ll notice we now have human readable labels. Instead of 'publication' it will say 'Publication'; instead of 'open' it will say 'Open Access'.

Similarly to search results and landing pages, you’ll now see the correct resource type as well as icons on Open Access.

![](/assets/images/blog-posts/badges.png)

**Localization**

Dates, like the publication date which supports Extended Date Time Format is now properly localized as well using the Unicode Common Locale Data Repository. For instance here an English and Turkish localization:

![](/assets/images/blog-posts/localization_english.png)

![](/assets/images/blog-posts/localization_turkish.png)

**Affiliations**

The affiliation display was redone:

![](/assets/images/blog-posts/affiliations.png)

**Manage section**

There’s a new manage section on the record landing page, which allows you to edit a record.

![](/assets/images/blog-posts/manage.png)

#### CLI Improvements

We have made it easier to get started with developing InvenioRDM. Partially to make our own developers' life easier, but also to make it easier to customize InvenioRDM.

**Shells**

You can now easily activate the Python virtualenv shell as well start a Python terminal from your instance using the following commands:

```bash
invenio-cli shell
invenio-cli pyshell
```

**Watching assets**

We have now simplified how you can change styling via automatic watching of file changes on assets. Previously you had to manually rebuild the assets. Now instead you can simply execute the following commands, and the styling will automatically rebuild once the file changes:

```bash
invenio-cli assets --force --development
invenio-cli assets watch
```

**Develop an Invenio module**

Developers often need to install the latest development versions of Invenio modules to work on them. This can now easily be done with:

```bash
invenio-cli ext module-install ~/src/invenio-app-rdm ~/src/invenio-rdm-records
invenio-cli assets --force --development
```

**Develop a React module**

The above works only for Python packages. If instead, you are working on one of our React libraries, you can now easily install and watch the module for changes as well:

```bash
invenio-cli assets watch-module --link ~/src/react-invenio-deposit
```

### Install

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

To stop the instance without destroying the records that were created, you can just run:

```bash
cd my-site
invenio-cli stop
```

To destroy the Python virtualenv, and remove the docker containers, you can now just run:

```bash
cd my-site
invenio-cli destroy
```

### Feedback

As always, we welcome your feedback. When you provide feedback on Discourse your message should be pre-populated with the classic template (bugs, what worked well, what didn’t work well, wishes for documentation).

Here is the template to give feedback if it’s not automated:

```

## Bugs

## What worked well

## What didn't work well

## Wishes for documentation

```

Take care and stay safe!