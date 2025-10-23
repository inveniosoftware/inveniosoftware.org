---
title: "Sprint: Security and annoying warnings"
authors:
  - lnielsen
date: 2017-08-11
doi: https://doi.org/10.5555/21bf8-cds33
tags: 
  - Invenio
permalink: "/blog/2017-08-11-invenio-sprint/"
---

This sprint was focused on:
- Data model issues (in Invenio-Access and Invenio-OAIServer).
- Security issues (permanent sessions, "remember me", content security policy).
- Working demo site (remove annoying warnings, fixed docs, SSL problems, bugs, admin interfaces, ...).

As a result of 89 developer days, 126 commits and 6.6k lines touched (4.7k additions and 1.8k deletions) `auth bundle` has been stabilized and released in beta version (Accounts, Access, Profiles, OAuthClient and OAuth2Server).

## List of changes:
- DoJSON (v1.3.2):
  - Remove `'Undo' is experimental` warning
- Flask-Menu (v0.6.0):
  - Python 3 warnings fixes
- Invenio
  - Fixed login problem
- Invenio-Access (v1.0.0b1):
  - Reviewed module and fixed data model issues.
  - Deprecated DynamicPermission in favor of Permission (aligning with Flask-Principal's deny by default behavior)
  - Added system roles with support for any user and authenticated user (could be extended to support IP-based access control). `ActionUsers` was previously used for similar feature by setting `user_id` to `None` but this is no longer possible.
  - Updated administration interface.
  - Added usage documentation (https://invenio-access.readthedocs.org).
  - Fixed superuser issues.
- Invenio-Accounts (v1.0.0b8):
  - Fixed Content Security Policy issues
  - Removed remember me login support in favor of using permanent sessions (remember me support could be used to circumvent a revoked session).
  - Removed support for login via headers (enabled by Flask-Security by default).
  - Fixed Content Security Policy problems in templates.
  - Upgraded to Flask-Security v3 (thanks to @jacquire).
- Invenio-Admin (v1.0.0b3):
  - Disabled Content Security Policy on admin interface.
- Invenio-App (v1.0.0b1):
  - Adds Jinja byte code caching support.
  - iPython is now the default shell.
- Invenio-App-ILS (v1.0.0a3):
  - Added initial Selenium integration tests.
  - Fixed email sending when in debug mode.
  - Bumped all packages to latest versions.
  - Fixed Celery 4 configuration warnings.
  - Clarified force HTTPS behaviour and adapted the user guide.
- Invenio-Celery (v1.0.0b3):
  - Fixed Celery 4 configuration warnings.
- Invenio-DB (v1.0.0b8):
  - Disabled SQL statement printing when in debug mode (has to be enabled manually now).
- Invenio-I18N (v1.0.0b4):
  - Fixed Content Security Policy issues in templates.
- Invenio-OAIServer (v1.0.0a13):
  - Fixed selective harvesting by timestamp caused by Marshmallow field parsing bug.
  - Removed updated timestamp `_oai.updated` from record in favor of using the record models updated date (fixes issue with selective datetime harvesting).
  - Add support for searching by spec in admin interface.
- Invenio-OAuth2Server (v1.0.0b1):
  - Added feature to show scopes related to an authorized application.
  - Added client example application to enable easier testing.
  - Added new scope `user:email` which when granted will return the user's email address in the access token.
  - Updated "authortize this application" template.
  - Fixed security issue that allowed obtaining a session cookie via an access token and thus bypassing scope protection.
  - Fixed Content Security Policy issues in templates.
  - Fixed issue when strings where not strictly URL encoded (better error message).
  - Fixed template rendering issues when no scopes where given and with example URLs.
- Invenio-OAuthClient (v1.0.0b2):
  - Added admin interface for UserIdentity.
  - Fixed Flask-WTF v0.14/v0.13 CSRF validation issues.
  - Reorganized documentation to new structure.
  - Removed support for remember me feature.
  - Remove "Linked accounts" menu item when no providers where defined.
  - Fixed Content Security Policy issues in templates.
  - Fixed issue with always redirecting to "Linked accounts" after a login.
- Invenio-PIDStore (v1.0.0b2):
  - New release.
- Invenio-Search-JS (v1.2.0):
  - Fixed strict URL encoding of query strings.
  - Fixed Content Security Policy issues in CSS.
- Invenio-Search-UI (v1.0.0a7):
  - Fixed template issue.
- Invenio-Theme (v1.0.0b4)
  - Fixed Content Security Policy issues in templates.
- Invenio-Cache (v1.0.0b1):
  - New module which provided Redis/Memcahed caching support.


## What's next?

Next Invenio Sprint will focus on:
- Metadata bundle:
  - JSONSchemas, PIDStore, Records, Indexer, Records-UI, Search, OAIServer, Records-REST
- General documentation
- Framework launch (process, branches, maintenance plan, user experience)