---
title: "Invenio v3.2 released"
authors: 
  - lnielsen
date: 2019-12-20
doi: https://doi.org/10.63517/pt6rt-6mz56
tags: 
  - Invenio
permalink: "/blog/invenio-v32-released/"
---

We are proud to announce the release of Invenio v3.2.0. With this release,
Invenio v3.0.x reaches end of life, and will no longer be maintained.

**Python compatibility**

Invenio v3.2 supports Python 2.7 (until 2019-12-31), Python 3.5 and Python 3.6.

# Getting started

See our [quick start](https://invenio.readthedocs.io/en/maint-3.2/quickstart/quickstart.html) guide.

# Upgrading

See our [upgrade guide](https://invenio.readthedocs.io/en/maint-3.2/upgrading.html).

# Release notes

Please see the full [release notes](https://invenio.readthedocs.io/en/maint-3.2/releases/v3.2.0.html) for
details about minor changes, deprecations etc.


# Highlights for Invenio v3.2

## Files bundle

We have released four new modules as part of the new Files bundle:

- [Invenio-Files-REST](http://invenio-files-rest.readthedocs.io): Object store REST API for managing files in Invenio.
- [Invenio-Records-Files](http://invenio-records-files.readthedocs.io): Integration layer between records and files.
- [Invenio-Previewer](http://invenio-previewer.readthedocs.io): File previewers support.
- [Invenio-IIIF](http://invenio-iiif.readthedocs.io): IIIF Image API support for thumbnail and zooming on images.

To understand more about how to use the new Files bundle see our integration
guide on https://invenio.readthedocs.io/en/latest/tutorials/handling-files.html.


## Elasticsearch v7 support

Invenio now supports Elasticsearch v7.

## Marshmallow 3 compatibility

Invenio now support both Marshmallow v2 or v3. The support is done via a
compatibility layer, that allows Invenio to work with either schemas from v2 or
v3. This should allow users to upgrade to Invenio v3.2 without being forced to
upgrade their Marshmallow schemas immediately to v3.

We advice all users to start planning an upgrade of their Marshmallow schemas
from v2 to v3 as the upgrade is non-trivial and needs proper testing due to
significant differences between Marshmallow v2 and v3.

Invenio will continue support for both Marshmallow v2 and v3 for a transition
period to allow users to upgrade at their own pace. After the transition period
Marshmallow v2 support will be deprecated and removed from Invenio.

For information about how to upgrade see https://invenio.readthedocs.io/en/latest/tutorials/upgrade-marshmallow.html.

## Search index prefixing

Elasticsearch does not support the concept of virtual hosts and thus with
previous versions of Invenio it was not possible to share an Elasticsearch
cluster between multiple Invenio instances.

We have now added support for index/alias/template prefixing, so that all
names can be prefixed with a string and thus allows multiple Invenio instances
to share an Elasticsearch cluster. Note, that this is only name prefixing, thus
technically two Invenio instances will can read each other indexes and thus
must trust each other.

Read more about the new feature on
https://invenio-search.readthedocs.io/en/latest/configuration.html#index-prefixing.




# Maintenance policy

Invenio v3.2 will be supported with bug and security fixes until the release of
Invenio v3.4 and minimum until 2020-12-20.

See our [maintenance policy](https://invenio.readthedocs.io/en/maint-3.2/releases/maintenance-policy.html).

What's next?
-------------
In Invenio v3.3 we are planning to release the **Statistics** bundle including:

- [invenio-stats](https://invenio-stats.readthedocs.io)
    - Invenio module for statistical data processing and querying with support
      for collecting COUNTER Research Data Usage Metrics compliant statistics.
- [counter-robots](https://counter-robots.readthedocs.io)
    - Library for COUNTER-compliant detection of machines and robots.

In addition to the Statistics bundle, we will also release final versions of
the following two modules:

- [invenio-index-migrator](https://invenio-index-migrator.readthedocs.io)
    - Elasticsearch index migrator for Invenio (aka zero down-time reindexing
      and index migration).