---
title: "Sprint: v3.0.0RC1, Elasticsearch v6 and MIT license"
author: Lars Holm Nielsen
date: 2018-03-23
team: Invenio Framework
permalink: "/blog/2018-03-23-invenio-sprint/"
---

This sprint was focused on releasing the Invenio v3.0.0 Release Candidate 1.

As a result of 95 developer days, 485 commits and 88k lines touched (33k additions and 55k deletions):
- *Invenio v3.0.0 Release Candidate 1* was released.
- License has been changed from GPL to MIT for ~30 repositories (part of v3RC1).
- Documentation for API authentication in Invenio was added (in OAuth2Server).
- Elasticsearch v6 support was added.

## Releases

- invenio: v3.0.0rc1
- invenio-access: v1.0.0
- invenio-accounts: v1.0.0
- invenio-admin: v1.0.0
- invenio-app: v1.0.0
- invenio-assets: v1.0.0
- invenio-base: v1.0.0
- invenio-cache: v1.0.0
- invenio-celery: v1.0.0
- invenio-config: v1.0.0
- invenio-db: v1.0.0
- invenio-formatter: v1.0.0
- invenio-i18n: v1.0.0
- invenio-indexer: v1.0.0
- invenio-jsonschemas: v1.0.0
- invenio-logging: v1.0.0
- invenio-mail: v1.0.0
- invenio-oaiserver: v1.0.0
- invenio-oauth2server: v1.0.0
- invenio-oauthclient: v1.0.0
- invenio-pidstore: v1.0.0
- invenio-records: v1.0.0
- invenio-records-rest: v1.0.0
- invenio-records-ui: v1.0.0
- invenio-rest: v1.0.0
- invenio-search: v1.0v.0
- invenio-search-ui: v1.0.0
- invenio-theme: v1.0.0
- invenio-userprofiles: v1.0.0
- dcxml: v0.1.1
- citeproc-py-styles: v0.1.1
- pytest-invenio: v1.0.0
- invenio-marc21: v1.0.0a8

### Backward incompatible changes

- invenio-oauthclient:
    - Added creation/modification timestamps to database models. Requires upgrade of database using the included Alembic recipe. The recipe will set the creation/modification timestamp to the current date + time (same value for all rows).

- invenio-oaiserver:
    - XSL stylesheet that allow nice rendering of the OAI-PMH feed have been removed as it was GPL licensed. [Documentation](https://invenio-oaiserver.readthedocs.io/en/latest/usage.html#xsl-stylesheet) describes how to add it back.

### List of all changes:

- All packages:
    - License change and general repository clean up.
- cookiecutter-invenio-datamodel:
    - New template for bootstrapping data models in Invenio.
- cookiecutter-invenio-instance:
    - New template for bootstrapping new instances.
- invenio-accounts:
    - Removed Invenio-Admin dependency.
- invenio-base:
    - Documentation for CLI commands.
- invenio-config:
    - Documentation for how to set complex values in environment variables.
- invenio-db:
    - Changed dependency psycopg2 to psycopg2-binary due to warning message.
- invenio-indexer:
    - Elasticsearch v6 support
- invenio-jsonschemas:
    - Fixed functools dependency for Python 2
- invenio-marc21:
    - Elasticsearch v6 support
- invenio-oaiserver:
    - Elasticsearch v6 support
    - XSL stylesheet removal and documentation.
    - Removal of invenio-query-parser dependency
- invenio-oauth2server:
    - Usage documentation
    - Fixed missing field length validation in form.
- invenio-oauthclient:
    - Added timestamps to all models
    - Hide part of access token when displayed.
- invenio-pidstore:
    - Allow modifying "control_number" field for recid minter via config.
- invenio-records-rest:
    - Usage documentation
    - Elasticsearch v6 support
    - Removed invenio-query-parser dependency.
- invenio-rest:
    - Always install Flask-CORS dependency. Please update your install from `invenio-rest[cors]` to just `invenio-rest`.
    - Add sentry event ID in error response.
    - Change from dicttoxml to xmltodict (to avoid GPL dependency).
- invenio-search-js:
    - Upgrade jquery to v3.3.1
    - Fixed facet selection with no results
- invenio-search-ui:
    - Fixed facet selection with no results
- invenio-search:
    - Elasticsearch v6 support
    - Removed invenio-query-parser dependency.
- invenio:
    - Removed provisioning scripts and docker configuration (in favour of cookiecutter-invenio-instance).
    - Bump all dependencies to v1.0.0
- pytest-invenio:
    - Fixed click logging output with latest Flask development version.