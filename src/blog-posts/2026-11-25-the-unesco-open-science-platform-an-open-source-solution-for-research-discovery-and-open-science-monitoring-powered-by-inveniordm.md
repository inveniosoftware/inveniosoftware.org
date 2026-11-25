---
title: "The UNESCO Open Science Platform: an open-source solution for research discovery and open science monitoring powered by InvenioRDM"
authors:
  - hshmagun
  - mbaldassarre
  - emunoz
date: 2026-11-25
doi: https://doi.org/10.63517/0smyx-qsx25
tags:
  - InvenioRDM
  - Showcase
permalink: "/blog/2026-11-25-the-unesco-open-science-platform-an-open-source-solution-for-research-discovery-and-open-science-monitoring-powered-by-inveniordm/"
---

![UNESCO Open Science Platform homepage](/assets/images/blog-posts/2026-11-24-UNESCO.jpg)

The [UNESCO Open Science Platform](https://open-science.unesco.org/) has been developed using open-source technologies, with InvenioRDM at its core, and includes customisations to support three main functions: (i) discovering research outputs from UNESCO's science programmes, awards and fellowship initiatives, with detailed metadata; (ii) presenting curated research highlights and plain-language summaries that translate findings from this collection of research outputs into actionable insights for policymakers and non-specialist audiences; and (iii) monitoring global progress in implementing the 2021 UNESCO Recommendation on Open Science, using the interactive dashboard that present quantitative and qualitative survey data collected through UNESCO's first consultation on implementation of the Recommendation.

These functions are supported by two distinct technical stacks. While the first two functions are primarily supported by InvenioRDM, the third, the open science dashboard, relies on a separate technical stack comprising Drupal for survey data management and OpenSearch for indexing and searching survey responses. 

The platform's hosting infrastructure comprises two Ubuntu 24.04 Linux servers, one for development and one for production, both using K3s, a lightweight Kubernetes distribution, to orchestrate the platform's containerised application components and supporting services. 

## Research discovery portal powered by InvenioRDM

InvenioRDM provides the foundation for managing and searching bibliographic metadata for a curated collection of research outputs identified through a targeted Lens.org search and enriched with additional metadata.  

A dedicated workflow, consisting of a set of data pipelines implemented in the Dataiku platform, imports publication metadata from Lens.org into a dedicated data model, from which the records are subsequently transferred to InvenioRDM. The workflow reads records from a Lens.org JSON export file, maps their metadata to InvenioRDM's metadata schema, including required core bibliographic fields such as title, authors, and publication date, together with identifiers where available, and creates the corresponding records through the InvenioRDM REST API. The imported records also include additional metadata from Lens.org, such as funding details and citations from academic literature and patents. The InvenioRDM-based research discovery portal is further customised for UNESCO's requirements through additional metadata fields, including the type of UNESCO involvement and open-access status, and interface adaptations that present this information and facilitate research discovery.

The research discovery portal provides metadata and links to external resources, allowing users to access full texts where available, but it does not host the full texts of the outputs it indexes.

![UNESCO Open Science Platform homepage](/assets/images/blog-posts/2026-11-24-UNESCO-portal.jpg)

## Curated research highlights and plain-language summaries

The platform uses InvenioRDM's built-in content management capabilities to feature selected research highlights and plain-language summaries (PLS) on its homepage. PLS cards direct users to dedicated static landing pages, purpose-built for the platform using customised HTML/Jinja2 templates and frontend assets, including stylesheets and static images. Each PLS landing page provides a link to the corresponding publication record in the research discovery portal, where users can explore bibliographic metadata and follow the link to the original publication.

## Open science dashboard

The dashboard draws on information submitted by UNESCO Member States through UNESCO's consultation on the implementation of the 2021 Recommendation on Open Science. These submissions provide the quantitative and qualitative data used to develop indicators for assessing progress in implementing the Recommendation.

The survey data are managed in a separate headless Drupal 11 content management system. Drupal uses custom entities to store and organise survey responses and provides REST/JSON API endpoints for retrieving country information, survey questions and responses. These endpoints enable the dashboard application to retrieve survey data from Drupal for processing and visualisation.

Survey responses are also indexed in OpenSearch to support search and retrieval. A dedicated search API endpoint queries the index and returns matching responses to the dashboard application in paginated results. 


## Further information

* [Platform overview](https://www.unesco.org/en/articles/launch-unesco-open-science-platform?hub=686)
* [Open-source code on GitHub](https://github.com/unesco/open-sciences/)
* [Preservation of the open-source code in Software Heritage](https://archive.softwareheritage.org/swh:1:dir:9b8421192f4f503bdd4ceaf9e0cdc7ec42c63d91;origin=https://github.com/unesco/open-sciences;visit=swh:1:snp:e0a2b9fb002f78e843f8dece9d0f3a72ea69fa4c;anchor=swh:1:rev:77349c41a0eec63acb799f17ba81ea2fb14a84f6)
* [Technical documentation](https://github.com/unesco/open-sciences/blob/main/docs/pdf/documentation.pdf)
