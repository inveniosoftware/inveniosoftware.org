---
title: "Invenio v3.4.0 released"
authors:
  - lnielsen
date: 2020-12-17
doi: https://doi.org/10.5555/qbar2-04k33
tags: 
  - Invenio
permalink: "/blog/2020-12-17-invenio-v340-released/"
---

We are proud to announce the release of Invenio v3.4.0.

Head over to our [Getting started](/products/framework/) to see it in action.

Read the full [release notes](https://invenio.readthedocs.io/en/latest/releases/releases/v3.4.0.html).

# What's new in Invenio v3.4?

## New UI Framework: Semantic UI

The largest new feature in Invenio v3.4 is the release of Semantic UI as the new UI framework. This works has been under way since we released version 3.0 with a deprecation notice on AngularJS 2.5 years ago.

Semantic UI is now the new default UI framework for Invenio, replacing the existing Bootstrap v3 framework. Most importantly, we have added support in Invenio v3.4 for supporting multiple UI frameworks concurrently. This means that Bootstrap 3 is still supported in v3.4 together with Semantic UI, and that we in the future can support new frameworks.

UI Frameworks evolve very rapidly and we expect that Invenio eventually will have to go through multiple UI frameworks over it’s life-time. Allowing support for multiple frameworks, isolate future changes, and even allow third-parties to develop custom themes for Invenio without impacting the business logic Invenio.

Technically the support for multiple UI frameworks works by having specialised Jinja template loading and themable webassets build systems.

Read more about the new system in [User interface styling](https://invenio.readthedocs.io/en/latest/documentation/main-concepts/user-interface-styling.html#user-interface-styling).

## Reorganised documentation

We have reorganised the Invenio documentation, to make it easier for new developers to get started with Invenio.

In particular we now have a documentation overview page on https://inveniosoftware.org/documentation/ that gathers both Framework, RDM and ILS documentation under one umbrella.

We have also reorganised the main Invenio Framework documentation on https://invenio.readthedocs.io/en/latest/

### Records improvements

Invenio v3.4 marks the start of some larger improvements we want to make to the overall data flow for records in Invenio. With Invenio v3.4 we are releasing new features for Invenio-Records. These improvements are not being used by other Invenio modules yet, but allows us to ensure the backward compatibility of the changes.

Overall, the changes made to Invenio-Records focuses on having records stored in separate database tables/Elasticsearch indexes and making a simplified programmatic API that is less error prone to use.

The following only describes the new featuers at a high-level.

#### Dumping/Loading support

Records now supports dumping and loading of records. This will eventually replace the using signals for customising the JSON being indexed, as well as standardising the record being loaded from Elasticsearch, database or other sources.

#### Type support

Currently, a record only supports native JSON data types. In particular, date/time data types are not supported. We have now added the possiblity to support that certain fields inside your JSON have custom data types (such as datetime).

#### Extensions

We have added support record extensions as a mechanism for replacing signals. Overall the signals were causing issues, because you often needed signals per type of record you were dealing with. With the extensions, you can now more easily hook into

#### System fields

A typical issue you would deal with in Invenio is to create a record and a persistent identifier. System fields allows you to easily compose a record type with new features, so that e.g. ``Record.create(...)`` will also automatically create a persistent identifer.

#### Backward compatibility

All changes are backward compatible thus existing source code and stored records will continue to work with the latest release.

### Testing improvements

#### GitHub Actions instead of Travis CI

We have moved almost all our 100+ repositories from using Travis CI as the continues integration system to GitHub Actions. This was due to Travis CI imposing a migration from .org to .com and lowering the total number of resources availble for open source projects. Overall, this meant very long waiting times for pull-request builds as well as PyPI releases. We have therefore migration to GitHub Actions. We would like to thank Travis CI for the service they have provided through out the years to the open source community.

#### Reprodicible tests

We have developed a new tool [Docker-Services-CLI](http://github.com/inveniosoftware/docker-services-cli), that helps bring up/down required services such as databases, Elasticsearch, etc for testing. This makes it easier to investigate specific test failures locally, as well as making it easier to migrate between continuous integration systems.

#### Centralised test dependencies and Pytest-Invenio

With the release of Pytest-Invenio v1.4 we have centralised test dependencies to a single module, and can more easily control breaking changes from third-party packages. Previously new version of isort and pytest have been causing wide-spread test failures due to minor changes.

# Minor changes in v3.4

- Invenio-Accounts:

    - Password length validation during login was removed.
    - "Log in" instead of "Sign in" is now being used consistently throughout the application. Previously both version could be found.

- Invenio-App:
    - The ``/ping`` endpoint (used by e.g. load balancers for aliveness checks) now also supports ``HEAD`` and ``OPTIONS`` HTTP verbs as recommended by e.g. HAProxy documentation.

- Invenio-Celery

    - Only Celery to 4.4.x to 5.0.x releases are supported. Note, Celery have declared Celery 4.4.x as a Long Term Support release. Note, that Celery changed command line arguments from ``celery worker -A <app>`` to ``celery -A <app> worker`` between version 4 and 5.

- Invenio-DB
    - Now support SQLAlchemy <1.4 which include e.g. PostgreSQL 12 support.
    - Hides the database password from CLI output when running ``db init`` or ``db create``.

- Invenio-Indexer

    - Elasticsearch delete requests now uses optimistic concurrency control by providing the the ``version`` and ``version_type`` in delete requests. The previous behavior can restored by calling ``RecordIndexer().delete(record, version=None, version_type=None)`` instead. This fixes an issue where deleting and recreating a document right after would fail.


- Invenio-JSONSchemas

    - Fixes an issue related to nested `allOf` being ignored.

- Invenio-OAuthClient

    - Added support for CERN OpenID contrib.

- Invenio-Records-REST

    - The header ``Cache-Control: 'no-cache'`` is now sent on successful HTTP 200 responses to ensure that browsers will not cache responses client side and ETag will be evaluated.


- Invenio-REST

    - Fixes a bug with CSRF checking when the endpoint did not exist.

# Deprecations in v3.4

## Bootstrap 3

Bootstrap v3 has reached end-of-life and will no longer receive further updates from their maintainers. Migrating to Bootstrap v4 or v5 is as difficult as upgrading to Semantic UI and there are no easy migration paths.

We will continue to support the Bootstrap v3 integration throughout the maintenance period of Invenio v3.4. Invenio v3.5 *may* move all Bootstrap 3 templates to a separate Invenio package, that you could install, however v3.5 will not add new Bootstrap 3 templates.

**You should plan allocating time for a migration from Bootstrap 3 to Semantic UI during 2021**

# Features removed in v3.4

### Elasticsearch v2 and v5 support

We have removed support for Elasticsearch v2 and v5 as announced in v3.3. Elasticsearch v2 and v5 have reached end-of-life and is no longer maintained with security fixes, thus you should strongly consider upgrading in case you have not already done so.

### AMD/RequireJS

The old AMD/RequireJS assets build system, that was deprecated and replaced with Webpack in Invenio v3.1 has now been completely removed from the code base.

# Maintenance policy

Invenio v3.4 will be supported with bug and security fixes until the release of Invenio v3.6 and minimum until 2021-12-17.

See our [Maintenance Policy](https://invenio.readthedocs.io/en/latest/releases/maintenance-policy.html).