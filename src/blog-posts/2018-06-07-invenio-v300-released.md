---
title: "Invenio v3.0.0 Released"
authors:
  - lnielsen
date: 2018-06-07
doi: https://doi.org/10.63517/xkf7p-89h55
tags: 
  - Invenio
permalink: "/blog/invenio-v300-released/"
---

Welcome to Invenio 3!

We are proud to announce the release of Invenio v3.0.0. Invenio has been completely rewritten from scratch with a radically  improved architecture and technical implementation. Invenio 3 is now a framework, like a Swiss Army knife, complete with battle-tested, safe and secure modules providing all the features you need to build and run a trusted digital repository.

Whilst Invenio 3 is officially released to the world today, in reality it has already been relied upon in large-scale production systems for more than 1.5 years on sites such as:

- [Zenodo](https://www.zenodo.org)
- [CERN Open Data](http://opendata.cern.ch)
- [CDS Videos](https://videos.cern.ch)

Also other sites are already in process of being built on Invenio 3:

- INSPIRE HEP - an aggregator for High-Energy Physics.
- WEKO3 - repository platform for 500+ Japanese universities.

# What's new
Invenio functionality is being released in **bundles** of modules. Invenio v3 contains the following bundles totaling more than 27 individual Invenio modules:

- **Base:** the core application framework with e.g. distributed task queue support.
- **Auth:** accounts management, role-based access control, OAuth 2.0 client and provider, user profiles management.
- **Metadata:** record and persistent identifier management including indexing, querying and OAI-PMH server.

The following bundles are being prepared for release in v3.1:

- **Files**: advanced file management with multi-backend support as well as [IIIF Image API](http://iiif.io/) support.
- **Statistics**: [COUNTER-compliant](https://www.projectcounter.org/) statistics.

See our [roadmap](/products/rdm/roadmap/) for further details.

# Getting started

In order to get started developing with Invenio v3 follow our [getting started](/gettingstarted/) guide.

Next, head over https://invenio.readthedocs.io to understand how to develop with Invenio.

In addition, each Invenio module also has extensive documentation:

**Base bundle**

- [invenio-admin](http://invenio-admin.readthedocs.io)
- [invenio-app](http://invenio-app.readthedocs.io)
- [invenio-assets](http://invenio-assets.readthedocs.io)
- [invenio-base](http://invenio-base.readthedocs.io)
- [invenio-celery](http://invenio-celery.readthedocs.io)
- [invenio-config](http://invenio-config.readthedocs.io)
- [invenio-db](http://invenio-db.readthedocs.io)
- [invenio-formatter](http://invenio-formatter.readthedocs.io)
- [invenio-i18n](http://invenio-i18n.readthedocs.io)
- [invenio-logging](http://invenio-logging.readthedocs.io)
- [invenio-mail](http://invenio-mail.readthedocs.io)
- [invenio-rest](http://invenio-rest.readthedocs.io)
- [invenio-theme](http://invenio-theme.readthedocs.io)

**Auth bundle**

- [invenio-access](http://invenio-access.readthedocs.io)
- [invenio-accounts](http://invenio-accounts.readthedocs.io)
- [invenio-oauth2server](http://invenio-oauth2server.readthedocs.io)
- [invenio-oauthclient](http://invenio-oauthclient.readthedocs.io)
- [invenio-userprofiles](http://invenio-userprofiles.readthedocs.io)

**Metadata bundle**

- [invenio-indexer](http://invenio-indexer.readthedocs.io)
- [invenio-jsonschemas](http://invenio-jsonschemas.readthedocs.io)
- [invenio-oaiserver](http://invenio-oaiserver.readthedocs.io)
- [invenio-pidstore](http://invenio-pidstore.readthedocs.io)
- [invenio-records](http://invenio-records.readthedocs.io)
- [invenio-records-rest](http://invenio-records-rest.readthedocs.io)
- [invenio-records-ui](http://invenio-records-ui.readthedocs.io)
- [invenio-search](http://invenio-search.readthedocs.io)
- [invenio-search-ui](http://invenio-search-ui.readthedocs.io)

# Compatibilities

### Python compatibility

Invenio v3.0 supports Python 2.7, 3.5, 3.6. We highly recommend only using the latest official release in each series.

Python 2.7 end-of-life is scheduled for April 2020. Invenio will only support Python 2.7 until that date. We highly recommend that all new projects are started on the latest available Python 3 version.

### Elasticsearch compatibility

Invenio v3.0 supports Elasticsearch 2, 5 and 6.

Elasticsearch v2 has reached end-of-life (February 2018) and Invenio v3.0 is the last release to support Elasticsearch v2.

### PostgreSQL compatibility

Invenio v3.0 supports PostgreSQL 9.4, 9.5 and 9.6. We have not yet tested Invenio v3.0 with PostgreSQL 10.

### MySQL compatibility

Invenio v3.0 supports MySQL 5.6+.

# Deprecations

### AMD/RequireJS

Invenio v3.0's current static assets management system is based on e.g. RequireJS will be replaced with Webpack.
We expect this work to be ready for Invenio v3.1, and thus we are already deprecating the current support. Specifically this
means that Invenio-Assets and Invenio-Theme will change significantly in Invenio v3.1. We would have liked to
already have this ready for this v3.0 release, but unfortunately it was time-wise not possible.

### AngularJS

Invenio v3.0 comes with one AngularJS 1.4 application (Invenio-Search-JS). AngularJS is by now already outdated, and we are
planning a rewrite of the application in another JavaScript framework that is currently in process of being selected.
Essentially this means that you should not extend Invenio-Search-JS at this point, since it will change significantly.

# Maintenance policy

Invenio v3.0 will be supported with bug and security fixes until the release of
Invenio v3.2 and minimum one year.

We aim at one Invenio release with new features every 6 months. We expect
upgrades between minor versions (e.g. v3.1 to v3.2) to be fairly straight-forward
as in most cases only new features are added.