---
title: "InvenioRDM Partner Meeting / Developer Workshop: Action Items"
author: Sarah Wiechers
date: 2024-04-24
team: InvenioRDM
permalink: "/blog/2024-04-25-project-meeting-actions/"
---

![](/assets/images/blog-posts/20_workgroup_structure_governance_image01.jpg)

From March 18 - 22 the InvenioRDM partner community met in Münster, Germany, to discuss current challenges and plans for the future of the project. While many smaller questions and issues were addressed immediately on-site, e.g. during one of the “merge parties” or in work sessions resulting from and building upon previous discussions, many sessions ended with clear lists of planned actions for the coming weeks and months.

To showcase the kinds of actions we decided on, and to have something to measure our success by at the next developer workshop, we're sharing here our full list of action items. In the fall, approximately at the half-way-point between the last and the next workshop, the community will meet at a themed Telecon to evaluate this list and see what the status on these plans is.

In the following you can find a list of all sessions and the actions decided upon by the participants. Some of the plans mentioned were already set into action - a huge thank you goes to the motivated community members working on all these actions!

## **Community engagement and handling pull requests**

- document this process in invenio-docs (curator role, responsibilities, templates, schedule, reviewer guide)
- make PR checklist more extensive (criticality, bug/feature, packages impacted, target release (old, current, new brach))
- merge party this afternoon and on a regular basis
- dream parties (form pitch to architecture proposal, mockups)
- demo parties
- public documentation of people to talk to for packages and features (e.g. list of module maintainers)
- dedicated role for community contribution management
- identify people involved from the community and their involvement (e.g. searchable expertise board)

## **Translations / i18n, i10n**

- test if yaml-files can have four letter codes
- group tests Münster approach way of overwriting python strings, java-script
- Zack and David try to implement the Münster approach into the official cookiecutter so its easier to use and has a global storage of frontend translations

## **Large file management**

- **Multipart uploader**
    - [Issue 2612](https://github.com/inveniosoftware/invenio-app-rdm/issues/2612)
- **File linking API**
    - [Issue 2613](https://github.com/inveniosoftware/invenio-app-rdm/issues/2613)
- **File metadata**
    - [Issue 2614](https://github.com/inveniosoftware/invenio-app-rdm/issues/2614)

## **Invenio RDM Version 12**

- fix the blockers until end of April
- document features
- translate in May
- going forward and release v12 before open repositories

## **Invenio CRIS**

- further call for interest in InvenioRDM visio conferences (presentation)
- Created a GitHub Discussion to gather more use cases and interest from the community [inveniosoftware/product-rdm#153](https://github.com/inveniosoftware/product-rdm/discussions/153)
- decide between specific in communities and more ambitious in a specific module based on traction
- If invenio-communities is the way to go, try to put specific fields in community data model in a bucketed way
- deepen code review

## **Customising Schema**

- Write a feature request for overlay config for required fields per instance / community.
- Improve docs on Custom Fields - checklist on when they're useful, community examples.
- Case studies / knowledge sharing of the 'hard way' customisations that have been achieved.

## **Deployment**

- do a Session on small one VM deployments
- do a Session on Helm charts
- update deployment documentation

## **Digital Preservation**

- Brush up Invenio-SIPStore (Max) Check out Invenio-Archivematica, or look at the AM Python client (Max) Check if an AM plugin for Invenio is needed (Panna?)

## **Workflow to keep internal roadmap updated**

1. [GitHub Discussions](https://github.com/inveniosoftware/product-rdm/discussions/new?category=ideas) implemented for feature request forum 
2. CERN will do quarterly cleaning & updates of roadmap items (Jan, Apr, Jul, and Oct) and will host talks about issues at corresponding Telecons

## **RDM Curation Workflow**

- open question is if/how this could go into the core or if it should remain an extra package maintained by TU Graz
- ensure possibility to configure aspects in order to meet discussed requirements, use cases, and user stories
- upload package to GitHub for future collaboration
- after follow-up discussion, one idea is to extend the functionality of the requests in the core and build the curation on top of these changes
    - [more details](https://codimd.web.cern.ch/_pB2IO2sTy2U6MB67ExW2w#)
    - Split approval and acceptance of requests
    - Requests can be extended with requirements/checks. These have to be fulfilled before a request can be accepted.
        - Can be specified per request type
        - Repository wide requirements are applied to all request types

## **Harvesting vocabularies**

- Start a coordinated sprint in May (CERN and Uni Münster).

## **Creating a place to collect Invenio modules etc.**

- [Awesome Invenio](https://inveniosoftware.github.io/awesome-invenio/) - links to the actual GitHub Repository where everyone with a GitHub account can add their or other projects and create a PR for it. It's mainly curated by @egabancho for the time being.

## **Community workflow improvements**

- Pitch governance documentation update
- Propose group structure (InvenioRDM Interest and Task Groups)
- Propose new/additional way of subscribing to the list-serv
- Pin and list welcome message and resource list to the welcome channel in Discord

## **Developing with Devbox**

- share repository with all used scripts with community

## Repeatable installs

- always copy `package-lock.json` from `../var/instance/assets/` to `my-site/`. Make sure that `git` ignores the creation/modification file dates if the file content didn't change
- have an extra CLI param in `invenio-cli` that will:
    - copy the `package-lock.json` from `my-site` to `../var/instance/assets/`
    - if the `my-site/pipfile.lock` is newer than `my-site/package-lock.json`, then overwrite or fail (some python deps might have changed)
    - run `npm ci` instead of `npm install`
- the development workflow with linked editable (watched) modules should be tested, to ensure nothing breaks
- when in `NODE_ENV=production`, the above should always happen. When in `NODE_ENV=dev`, then I can use a new param `invenio-cli install --keep-deps`
- New issue tracked here: [inveniosoftware/product-rdm#179](https://github.com/inveniosoftware/product-rdm/issues/179)

## **One VM Deployment**

- improve documentation with the deployment
    - [Docu PR work in progress](https://pad.gwdg.de/hEje65dOTIWuejjf2r30RA#)
- cookiecutter issue: [inveniosoftware/cookiecutter-invenio-rdm#278](https://github.com/inveniosoftware/cookiecutter-invenio-rdm/issues/278)
    - have a finished docker-compose without dev container
    - improve secrets by default

## **Preservation of workshop outcomes**

- Create a Google form for filling in session information (→ Steve)
- Process information from the Google form entries (→ Markus)
- Create a repo in the inveniosoftware namespace (→ someone from CERN)

## **Kubernetes Helm-charts requirements**

- Issues on the `[helm-invenio` Github repo](https://github.com/inveniosoftware/helm-invenio/issues)
    - [Configurable resources for deployments](https://github.com/inveniosoftware/helm-invenio/issues/109)
    - [Configurable {liveness,readiness,startup}Probes](https://github.com/inveniosoftware/helm-invenio/issues/110)
    - [Init and Sidecar containers config for web/worker deployments](https://github.com/inveniosoftware/helm-invenio/issues/111)
    - [Granular env-based solution for "connection string"-like config](https://github.com/inveniosoftware/helm-invenio/issues/112)
- Share of current community charts:
    - University of Münster: `helm pull oci://harbor.uni-muenster.de/ulb/invenio --version 0.4.0`

## **Workgroup structure - Governance**

- please contact Lars if you know a good mailing list software! - in progress

## **InvenioRDM feature request form**

- [GitHub Discussions](https://github.com/inveniosoftware/product-rdm/discussions/new?category=ideas) feature request forum implemented 

## **Usage statistics**

- Created discussions
    - [inveniosoftware/product-rdm#181](https://github.com/inveniosoftware/product-rdm/discussions/181)[inveniosoftware/product-rdm#182](https://github.com/inveniosoftware/product-rdm/discussions/182)

## **Evaluate proposed strategies for handling PRs**

- regular merge parties right after Telecons (cut Telecons to 30 minutes) (Sara)
- train more people as maintainers with merge rights (in on-site meetings) (CERN)
- figure out a clear labeling system (Karolina)