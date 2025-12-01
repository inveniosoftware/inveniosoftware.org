---
title: "Sprint: Elasticsearch v5 support"
authors:
  - lnielsen
date: 2017-12-01
doi: https://doi.org/10.63517/t6dvz-0jh43
tags: 
  - Invenio
permalink: "/blog/2017-12-01-invenio-sprint/"
---

This sprint was focused on:
- Elasticsearch v5 support
- Preparing to release the metadata bundle.
- Removing remaining Invenio-DB warnings.

During the sprint 60 developer days were spent, 52 commits were created and 4.3k lines were touched (3.1k additions and 1.2k deletions).

## List of changes:
- Cookiecutter-Invenio-Module:
    - Minor various fixes for build issues.
- IDUtils (v1.0.0):
    - global: fix DOI Unicode issues
- Invenio-Base (v1.0.0b1)
    - Cookiecutter template removal (to be replaced by upcoming cookiecutter-invenio-instance).
    - Release checklist, docs build errors, 100% test coverage.
- Invenio-DB (v1.0.0b9)
    - Remove annoying warning.
- Invenio-I18N (v1.0.0b4)
    - Example app rendering on ReadTheDocs
- Invenio-Indexer (v1.0.0b1):
    - **New BulkRecordIndexer class with RecordIndexer-compatible API (to be used
      by Invenio-Records-REST).**
    - Elasticsearch v5 support.
    - Release checklist.
- Invenio-JSONSchemas (v1.0.0a7)
    - Documentation improvements.
    - Release checklist.
- Invenio-Mail (v1.0.0b1)
    - Broken docs build fix (related to Celery problem).
- Invenio-OAIServer (v1.0.0b1)
    - **Description support in Identify verb (eprints, friends etc).**
    - Elasticsearch v5 support.
    - Release checklist + documentation improvements.
    - License change PR
- Invenio-OAuth2Server (v1.0.0b3)
    - Unpinned oauthlib.
- Invenio-PIDStore (v1.0.0b2)
    - Release checklist.
- Invenio-Records-REST (v1.0.0b5)
    - **Index after create, update and delete record creation (this will later
      impact Invenio-Deposit).**
    - **Serializers refactored to be more easily composable.**
    - **Improved tombstone handling for the REST API (e.g. include removal
      reason).**
    - Elasticsearch v5 support.
    - Improved documentation.
    - Dynamic aggregations.
    - Release checklist.
- Invenio-Records-UI (v1.0.0b2)
    - Release checklist + example app docs fix for RTD.
- Invenio-Search (v1.0.0b4)
    - **Elasticsearch v5 support (via version-specific mappings).**
    - Support for creating only specific indexes.
    - CLI for listing all indexes and aliases.
- Invenio-Search-UI (v1.0.0a9)
    - Release checklist.
- Invenio-MARC21 (v1.0.0a6)
    - Elasticsearch v5 support.

## Elasticsearch 5 support

Search, Indexer, Records-REST, OAIServer and MARC21 have all been upgraded to
support Elasticsearch v2 and v5. Elasticsearch v6 is not yet support due to the
elasticsearch-dsl package not yet supporting v6 (support already merged in master branch but not yet released).

Other Invenio packages have not yet been upgraded to Elasticsearch v5. E.g.
Records-Files, OpenAIRE, Stats, Collections, OpenDefinition, Query-Parser have
not yet been tested with Elasticsearch v5.

### Choosing version

You will need to know at install-time which version of Elasticsearch you'd like
to use. For instance to use Elasticsearch 5 you need to install Invenio-Search
like this:

```console
$ pip install invenio-search[elasticsearch5]
```

### Mappings
Due to the differences between Elasticsearch versions, we have opted for
*version-specific mappings*. This means that Invenio modules must provide a
mapping per Elasticsearch version they wish to support. E.g. today, the mapping
is placed in a directory like e.g.:

```
mappings/records/record-v1.0.0.json
```

To support Elasticsearch v2 and v5 you now need two mappings:

```
mappings/v2/records/record-v1.0.0.json
mappings/v5/records/record-v1.0.0.json
```

Note that mappings for Elasticsearch v2 may use either the ``mappings/v2``
directory or the ``mappings/`` directory like previously (for backward
compatibility).

### Adding Elasticsearch v5 support to a module

In case you have site-specific modules and would like to add Elasticsearch v5
support here's a rough guide:

- Update ``travis.yml`` to test both v2 and v5 ([example](https://github.com/inveniosoftware/invenio-indexer/pull/75/files#diff-354f30a63fb0907d4ad57269548329e3))
- Update ``setup.py`` by moving Invenio-Search dependency to ``extra_require`` ([example](https://github.com/inveniosoftware/invenio-records-rest/pull/177/files#diff-2eeaed663bd0d25b7e608891384b7298)).
- Move existing mappings and add new mappings for v5 ([example](https://github.com/inveniosoftware/invenio-records-rest/pull/177/files#diff-35e3e3c8ab14c00d11908b83ffa1fc36))
    - Most common change from v2 to v5 is the change from ``string`` type to either ``text`` or ``keyword`` type.
- Update ``docs/requirements.txt`` by adding ``elasticsearch5`` as an extra requirement to ensure ReadTheDocs builds will be fine.
- Fix any API specific calls (see below).

### Canonical way of checking for ES version.

```python
from elasticsearch import VERSION as ES_VERSION

if ES_VERSION[0] == 2:
    # ...
```

### Completion Suggesters

The Completion Suggesters have changed from v2 to v5. In v2, suggesters
supported an index-time ``payloads`` option, which was used to store and
return metadata with suggestions. In v5, completions are now returned with
their associated document in the ``_source`` field.

If you have completion suggesters for v2 you will need to make them compatible
with v5. This involves:

- API clients should read metadata from ``_source`` instead of ``payload``. For
  v2 the payload is copied to ``_source`` by Records-REST, which allows you to
  already now upgrade API clients to use the new ``_source`` field.
- On indexing, you need to add the payload only for v2.

### Elasticsearch v2 end-of-life

Elasticsearch v2 reaches end of life in
[February 2018](https://www.elastic.co/support/eol). Elasticsearch v2 support in
Invenio will be removed in Invenio v3.1, thus Invenio v3.0 will be released
with Elasticsearch v2 support and be maintained until v3.0 end of life
(currently TBD).