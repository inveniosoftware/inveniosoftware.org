---
title: "Invenio v3.3 released"
author: Pablo Panero
date: 2020-05-20
team: Invenio
permalink: "/blog/invenio-v33-released/"
---

We are proud to announce the release of Invenio v3.3.0. With this release,
Invenio v3.1.x reaches end of life, and will no longer be maintained.

**Python compatibility**

Invenio v3.3 supports Python versions 3.6 and 3.7. Python 2 support in Invenio
ended on January 1st, 2020 with the official end of life for Python 2 on the
same date.

# Getting started

See our [quick start](https://invenio.readthedocs.io/en/maint-3.3/quickstart/quickstart.html) guide.

# Upgrading

See our [upgrade guide](https://invenio.readthedocs.io/en/maint-3.3/upgrading.html).

# Release notes

Please see the full [release notes](https://invenio.readthedocs.io/en/maint-3.3/releases/v3.3.0.html) for
details about minor changes, deprecations etc.

# Highlights for Invenio v3.3

## Python 3.7

Python 3.7 is now supported by Invenio!

## Improved support for Single Page Applications

Invenio v3.3 improves the support for Single Page Applications (SPA) by adding
REST APIs for account management operations such as login, logout, user registration,
password change, email confirmation and more. The integrated OAuth client
also adds a new REST API so that you can login via your OAuth providers such
as GitHub, ORCID and Globus.

## CSRF Protection

Invenio-REST adds a CSRF middleware, called `CSRFProtectMiddlewate` to protect
API views against CSRF attacks. The CSRF checks can be skipped in REST API
calls when using a personal OAuth API token.

## Dependency management

We have revamped management of third-party dependencies. New releases
of some of the many third-party packages Invenio depends on could often
cause dependency conflicts. Invenio v3.3 introduces the concept of coordinator
packages, who are responsible for properly specifying third-party dependencies.

The [release notes](https://invenio.readthedocs.io/en/maint-3.3/releases/v3.3.0.html)
contain a table with all the current coordinator modules.

## Helm chart (BETA)

Helm-Invenio provides a helm chart to deploy an Invenio application along with
all its required services: Redis, RabbitMQ, HAProxy, Nginx, Elasticsearch,
Logstash and PostgreSQL.

This chart is currently in beta version. Its templates are currently specific
for OpenShift. However, work is on-going to support bare Kubernetes deployments.

# Maintenance policy

Invenio v3.3 will be supported with bug and security fixes until the release of
Invenio v3.5 and minimum until 2021-05-18.

See our [maintenance policy](https://invenio.readthedocs.io/en/maint-3.3/releases/maintenance-policy.html).

# What's next?

In Invenio v3.4 we are planning to release two major new features:

- Theming support and a new Semantic UI theme.
- A statistics bundle that adds support for collecting COUNTER Research Data Usage Metrics compliant statistics.
- Index migration support for migrating between Elasticsearch clusters (aka zero down-time reindexing and index migration).