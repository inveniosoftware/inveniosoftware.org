---
title: "Repositories and libraries: Invenio features InvenioILS!"
authors: 
  - kpsherva
date: 2026-01-01
doi: https://doi.org/10.63517/hwttq-f5r06
tags: 
  - InvenioILS
  - Showcase
permalink: "/blog/2025-12-04-invenioils-product.md/"
---


For years, the Invenio community has been known for powerful open-source repository solutions - especially InvenioRDM. But many institutions need more than a repository: they need a modern, flexible platform that also supports collections, loans, acquisitions, and patron services.

**InvenioILS brings these capabilities into the Invenio family**, offering a fully open, customizable **Integrated Library System** built on the same modular framework as InvenioRDM.


## A modern, feature-rich ILS (Integrated Library System)

InvenioILS delivers the essential tools libraries rely on:

- **Circulation & patron services**: loans, renewals, requests, notifications, and configurable policies.
- **Cataloguing & metadata**: flexible JSONSchema-based records, holdings, items, and fast discovery powered by Elasticsearch/OpenSearch.
- **Acquisitions & ILL**: vendor management, orders, budgets, document delivery, and interlibrary loan workflows.
- **Clean, responsive UI**: a modern interface designed for both librarians and patrons.


## Flexible and extensible by design

InvenioILS is highly modular and, like InvenioRDM, based on Invenio Framework. It becomes easier to share the expertise between these two products.
Institutions can customize metadata, circulation rules, UI components, and system behaviour - or integrate with external services through the REST API. This flexibility allows libraries to adopt InvenioILS “as is” or tailor it into a specialized solution that fits their workflows and identity.

## CERN: A Showcase Installation

An example of an advance deployment of InvenioILS is at **CERN** - [CERN Library Catalogue](https://catalogue.library.cern), where the platform powers daily library operations and serves thousands of users.

![](/assets/images/blog-posts/2025-12-04-invenioils-product/clc.png)

### Smooth SSO integration

InvenioILS connects seamlessly to CERN’s institutional Single Sign-On, providing automatic user provisioning, role synchronization, and a unified login experience across CERN services.

### Bulk e-book importer (CERN customisation)

CERN uses an automated bulk importer to process large vendor MARC packages. Metadata is transformed, validated, and ingested with minimal staff intervention - turning what once took days into an efficient, scalable workflow.

### Mobile self-checkout & campus navigation (CERN customisation)

CERN’s library offers mobile self-checkout, enabling patrons to borrow items directly from their phones. Through InvenioILS APIs, the system also integrates with CERN’s internal navigation app, guiding users to shelf locations and showing real-time item availability.

![](/assets/images/blog-posts/2025-12-04-invenioils-product/clc_maps.png)

![](/assets/images/blog-posts/2025-12-04-invenioils-product/clc_self-checkout.png)

### Reliable at scale
The CERN installation demonstrates how InvenioILS can support large user bases, extensive collections, and demanding operational environments - all while integrating with CERN Institutional repository, based on InvenioRDM.

![](/assets/images/blog-posts/2025-12-04-invenioils-product/clc_search.png)

## Part of a product family

InvenioILS complements InvenioRDM and the broader Invenio framework, providing a cohesive platform for managing both library collections and research outputs. With shared components and infrastructure, institutions benefit from consistent authentication, indexing, APIs, and development practices across products.

**Invenio does not only power repositories.**

**It powers libraries as well - with power of Free Open-Source Software**


## Join the Invenio community

InvenioILS and InvenioRDM thrive thanks to a global community of libraries, research organizations, developers, and service providers. Whether you’re evaluating Invenio, looking to contribute, or simply curious, you’re warmly invited to join. The InvenioRDM community meets regularly to discuss features, share insights, and collaborate on the future of open knowledge systems - we would like to recreate this approach for InvenioILS and hear your feedback.
Your voice is welcome - [come help](https://inveniosoftware.org/getinvolved/), shape what’s next.
