---
title: "Sprint: v3.0.0RC2 + updated website"
authors:
  - lnielsen
date: 2018-05-28
doi: https://doi.org/10.5555/vwjbt-zez56
tags: 
  - Invenio
permalink: "/blog/2018-05-28-invenio-sprint/"
---

This sprint (May 14-25) was focused on preparing Invenio for the final v3.0.0
release so it is ready for launch at the Open Repositories 2018 Conference,
June 4th-7th in Bozeman, Montana.

## Overview

Result of the sprint (45 developer days, 107 commits, 8.5k lines touched):

- inveniosoftware.org now has shiny new [blog](/blog) and [roadmap](/products/rdm/roadmap).
- inveniosoftware.org was moved to [Lektor](http://getlektor.com) static CMS
  and is now also hosted on GitHub Pages.
- Cookiecutter templates for Invenio instances and Invenio data models where
  finalised and made part of the "Getting started" guide.
- Invenio v3.0.0 Release Candidate 2 was released.
- Flask v1.0 support

## Releases

- invenio-access v1.0.1
- invenio-accounts v1.0.1
- invenio-base v1.0.1
- invenio-db v1.0.1
- invenio-formatter v1.0.1
- invenio-oauth2server v1.0.1
- invenio-records-rest v1.1.0
- invenio-userprofiles v1.0.1
- pytest-invenio v1.0.2


### List of all changes

- cookiecutter-invenio-datamodel:
    - Fixing, testing, documenting and cleaning.
- cookiecutter-invenio-instance:
    - Fixing, testing, documenting and cleaning.
    - The development server is now by default running SSL thanks to the
      recently release Flask v1.0.
- invenio-access:
    - Fixed annoying warning message.
- invenio-accounts:
    - Fixed build failure due to Flask-CeleryExt version.
- invenio-base:
    - Added support for blueprint factory functions in the
      ``invenio_base.blueprints``/``invenio_base.api_blueprints`` entry point
      groups. In addition to specifying an import path to an already created
      blueprint, you can now specify an import path of a blueprint factory
      function with the signature
      ``create_blueprint(app)``, that will create and return a blueprint. This
      allows moving dynamic blueprint creation from the extension
      initialization phase to the blueprint registration phase.
- invenio-formatter:
    - Fixed issue where badges would be cached wrongly.
- invenio-jsonschemas:
    - Fixed build error related to Flask v1.0
- invenio-oaiserver:
    - Fixed build error related to Flask v1.0
- invenio-oauth2server:
    - Fixed build error related to Flask v1.0
- invenio-oauth2server:
    - Fixed build error related to Flask v1.0
- invenio-oauthclient:
    - Fixed build error related to Flask v1.0
- invenio-records-rest:
    - Added marshmallow fields used for record deserialization.
    - Added support for other Invenio extensions to auto-register REST API
      record endpoints.
    - Fixed build error related to Flask v1.0
- invenio-rest:
    - Fixed build error related to Flask v1.0
- invenio-userprofiles:
    - Fixed build error related to Flask v1.0
- invenio:
    - Documentation updates.
- inveniosoftware.org:
    - Rewritten using Lektor Static CMS system.
    - Retargeted website to pass the message that Invenio is now a framework.
    - Added a blog.
    - Added a roadmap
    - Moved all information about legacy releases to separate page.
    - Many fixes to design and style.
    - Reworked most text sections.
    - Moved hosting to GitHub Pages.
- pytest-invenio:
    - Fixed problem with the ``celery_config`` fixture.
    - Fixed issue with elasticsearch import.