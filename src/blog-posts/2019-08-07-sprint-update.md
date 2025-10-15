---
title: "Towards Invenio v3.2 and Elasticsearch 7 support"
authors:
  - lnielsen
date: 2019-08-07
doi: https://doi.org/10.5555/afep7-29828
tags: 
  - Invenio
permalink: "/blog/2019-08-07-sprint-update/"
---

Two CERN sprint teams with a total of 14 developers have just each finished a two-week sprint:

- Sprint team 1: Focused on the Invenio v3.2 release which will include the new  Files bundle.
- Sprint team 2: Focused on adding Elasticsearch 7 support as well prepare  the Invenio v3.3 release which will include the new index migration utilities.

## Highlights
A total of 23 new module releases where made during the sprint.  The highlights from the two sprints include:

- Elasticsearch 7 support.
- Elasticsearch index prefixing and suffixing support for shared clusters (this is needed for the upcoming index migrator utilities).
- Marshmallow v2 and v3 compatibility. Invenio is now able to accept both Marshmallow v2 and v3 schemas. In your Invenio instance you will need to pin the Marshmallow version that matches your schemas, and follow the upgrade guide provided by Marshmallow to upgrade your schemas.
- Sentry support is now using the Sentry-Python library instead of Raven library (you can still switch back to Raven by setting `SENTRY_SDK = False` in your configuration).
- Rate limiting now differentiates between guests and authenticated users, and allows for external modules to provide per user rate limits.
- Improved HTML sanitisation support in several modules.
- Improved support for client-side infinite scroll in the REST API.
- Housekeeping: we have fixed a significant number of  build failures as well as deprecation warnings from other libraries.

All of above highlights will be released together with Invenio v3.2. Most of the individual modules have already been released, however you are still on your own if you decide to go head with them prior to the Invenio v3.2 release (if you encounter problems, we are of course very interested in hearing about it, so that we can solve them before the v3.2 release).

## Future plans
### Invenio v3.2 and Files Bundle
The primary focus is still to release Invenio v3.2. The  pending issues are limited to final testing and documentation.

### Elasticsearch v2 and v5 deprecation
Invenio v3.3 will add index migration utilities that will allow Invenio users to   upgrade their Elasticsearch clusters to supported Elasticsearch versions. In Invenio v3.4 we plan to then remove support for Elasticsearch v2 and v5.

### Python v2 support ends January 1st 2020.
Python v2.7 will reach end of life on January 1st, 2020. Invenio will only support Python 2.7 until that date. From January 1st, 2020 we will remove Python 2.7 from our test matrixes, and thus new module releases after January 1st 2020 will very likely no longer work on Python 2.7.

We are already seeing a large number of our dependent Python libraries that have removed Python 2 support, and thus we will not be able to continue Python 2 support beyond January 1st, 2020.

### Invenio v3.3 - Index migration and usage statistics
Invenio v3.3 is planned for release in late 2019 or early 2020.  The primary focus for Invenio v3.3 will be adding support for Elasticsearch index migration as well as releasing the Statistics Bundle (COUNTER-compliant usage statistics). The Statistics Bundle includes the following modules:

- Invenio-Stats
- Invenio-Queues
- COUNTER-Robots

Invenio v3.3 may also see the release of a new module, Invenio-Records-Permissions, which will significantly simplify the defining and managing access control for records.

## Releases overview
- invenio-access: v1.2.0
	- Removed DynamicPermission from Invenio-Access (deprecated since v1.0.0)
- invenio-app: v1.2.0
	- Fixed issue with `instance_path` and `static_folder` being globals evaluated once which caused problems with fixtures in pytest-invenio.
	- Improved the rate limiting to differentiate between guests and authenticated users.
	- Added possibility for external modules to provide per user rate limits via the Flask `g` global request object.
	- Fixed deprecation warnings from Werkzeug.
- invenio-assets: v1.1.3
	- Changed module to hide webpack warnings (primarily needed for the cookiecutter-invenio-instance to reduce output clutter).
- invenio-base: v1.1.0
	- Added support for allowing `instance_path` and `static_folder` to be callables which are evaluated before being passed to the Flask application class  (related to invenip-app fix ).
- invenio-celery: v1.1.0
	- Fixed missing release on PyPI.
- invenio-config: v1.0.2
	- Added `ALLOWED_HTML_TAGS` and `ALLOWED_HTML_ATTRS`  default configuration for bleach HTML sanitisation library (values are used by Invenio-Records-REST, Invenio-Formatter and Invenio-Previewer).
- invenio-db: v1.0.4
	- Added  PostgreSQL v10 into the test matrix to ensure future compatibility.
- invenio-formatter: v1.0.2
	- Added a new Jinja filter `sanitize_html` that uses the bleach library to sanitise data and to be used in combination with the `safe` template filter to prevent Cross-Side Scripting (XSS) vulnerabilities.
- invenio-indexer: v1.1.0
	- Added Elasticsearch 7 support.
	- Added `before_record_index.dynamic_connect()` signal utility for connecting index receivers directly to specific indexes.
	- Fixed Elasticsearch index prefixing support.
- invenio-logging: v1.2.0
	- Changed Sentry integration to use the sentry-python module instead of raven library. Raven library is still supported for backward compatibility.
- invenio-oaiserver: v1.1.1
	- Added Elasticsearch 7 support.
	- Added Marshmallow v3 support  (with v2 backward compatibility).
	- Improved documentation on how to configure Elasticsearch (https://invenio-search.readthedocs.io/en/latest/configuration.html)
- invenio-oauthclient: v1.1.3
	- Fixed deprecation warnings from Flask-OAuthlib
	- Fixed issue with the ?next parameter not supporting a query string.
- invenio-records: v1.3.0
	- Removed the CLI (deprecated since v1.1.0)
- invenio-records-rest: v1.5.0
	- Added Elasticsearch 7 support
	- Added CSV serialiser (for allowing CSV exports)
	- Added Marshmallow v3 support
	- Added “from” and “aggs” query parameters for better supporting client-side infinite scroll use cases.
	- Changed SanitizedHTML marshmallow field to use central configuration from Invenio-Config.
	- Fixed a deprecation warning.
	- Fixed Elasticsearch index prefixing support.
	- Fixed bug with browsers not respecting the content type when caching the REST API responses. (PENDING merge)
- invenio-rest: v1.1.1
	- Added compatibility layer for marshmallow v2 and v3
- invenio-search: v1.2.1
	- Added Elasticsearch v7 support
	- Fixed bug with Elasticsearch index prefixing support.
	- Added index suffixing and write aliases.
	- Deprecated Elasticsearch v5 support.
	- Changed default library used for making request to Elasticsearch from requests to urllib3 (default recommended library).
- invenio-theme: v1.1.4
	- Added an error handler for HTTP 429 (rate limiting error).
- xrootdpyfs v0.1.6
	- Fixed bug preventing previewing large ZIP files (2GB+).

## Files Bundle
The Files Bundle also saw releases of the following modules:

- invenio-files-rest: v1.0.1
- invenio-records-files: v1.1.1
- invenio-previewer: v1.0.1
- invenio-iiif: v1.0.1
- pytest-invenio v1.2.0

We don’t recommend upgrading to these versions until Invenio v3.2 have been released. In particular, we have made breaking changes to Invenio-Records-Files from the v1.0.0a11 to v1.0.0, that are likely to impact you if you depended on the unsupported alpha releases.

Stay tuned for the Invenio 3.2 release!