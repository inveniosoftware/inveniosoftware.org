---
title: "Sprint: JSONB, bugs & bouncing search"
authors:
  - lnielsen
date: 2017-10-20
doi: https://doi.org/10.63517/g0q4y-02859
tags: 
  - Invenio
permalink: "/blog/2017-10-20-invenio-sprint/"
---

This sprint was focused on:
- Metadata bundle: Finalize Invenio-Records, Invenio-Search, Invenio-JSONSchemas.
- Fixing new bugs in Base/Auth bundles.

As a result of 40 developer days, 37 commits and 2.8k lines touched (2k additions and 0.8k deletions), the following improvements were implemented:
- Fixed bouncing of search results (sorting of the same query could change depending on which Elasticsearch node your query would be answered by).
- JSONB now being used for record storage (Thanks to Javier for the PR).
- Rendering of JSONSchemas, meaning `allOf` and `$refs` can now be resolved on-the-fly to generate an self-contained schema for e.g. deposit forms (Thanks to Pamfilos for the PR).
- Boring fixes that makes sure the Base and Auth bundles are stable.

## List of changes:
- Invenio-Records (v1.0.0b4):
  - Beta release (release checklist).
  - Changed data storage from JSON to JSONB (requires data migration and PostgreSQL v9.4+) Thanks to Javier for PR.
  - Changed signals receiver signatures (**backward-incompatible!**).
  - Fixed invalid MARC in demo records causing export errors.
  - Fixed CLI for deletion of records.
  - Fixed fractional seconds problem in MySQL causing tests to fail.
- Invenio-Search (v1.0.0b1):
  - Beta release (release checklist, documentation)
  - Fix bouncing search results.
  - Bumped Travis PostgreSQL to v9.4 to support JSONB.
- Invenio-JSONScheams (v1.0.0a7):
  - Fixed double registration of schema endpoint on both UI and API app.
  - Added support for resolving allOf and JSONRefs in JSONSchemas (thanks to Pamfilos for PR).
  - Fixed some documentation issues.
- Invenio-Records-REST (v1.0.0b3):
  - Fix bouncing search results.
  - Bumped Travis PostgreSQL to v9.4 to support JSONB.
- Invenio-OAuth2Server (v1.0.0b2):
  - Improved authorization template design (text alignment, cover page usage and display number of users).
  - Broken tests fix due to cryptography package changes.
- Invenio-DB (v1.0.0b8):
  - Alembic documentation refactored and integrated in docs.
- Invenio-Records-UI:
  - Bumped Travis PostgreSQL to v9.4 to support JSONB.
- Invenio-OAIServer (v1.0.0a14):
  - Invenio-Records signals signature compatibility.
- Invenio-App-ILS:
  - Test for ensuring all records export formats are working.