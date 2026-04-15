---
title: "datastore: Relaunch of our research data repository"
authors: 
  - SarahW91
date: 2026-04-14
doi: https://doi.org/10.63517/312pg-rah44
tags: 
  - InvenioRDM
  - Showcase
permalink: "/blog/2026-04-14-datastore-uni-muenster.md/"
---

![datastore landing page](/assets/images/blog-posts/datastore.png)

We’ve recently completed a major overhaul of **datastore**, the research data repository of the University of Münster. The service has been fully rebuilt and is now running on **InvenioRDM v14.0.0b4**.

This relaunch also marks a major technology shift: the previous datastore service was based on a **Java/React** stack. Moving to InvenioRDM helps us ensure **sustainable maintenance** and long-term **future viability** by building on a shared, actively developed codebase.

datastore is available at: [https://datastore.uni-muenster.de/](https://datastore.uni-muenster.de/)

### What’s improved

The new system brings major improvements, both functionally and in terms of usability:

- **Publish datasets up to 5 TB**  
  Records can now include datasets up to 5 terabytes, better supporting data-intensive projects.
- **Modern, streamlined UI**  
  A clearer interface and updated design make creating and publishing records easier.
- **Improved deposit guidance**  
  More structured submission steps support more consistent documentation.
- **Standardized metadata**  
  Richer, more consistent metadata improves discoverability and supports long-term reuse.

### CRIS-assisted metadata entry (local integration)

To reduce manual entry and improve metadata quality, we implemented a local integration with the University of Münster’s **Current Research Information System (CRIS)**. During deposit, users can retrieve project-related metadata from CRIS and use it as a basis for describing their dataset.

### Curation workflow with invenio-curations

All submissions are curated by the University and State Library (ULB) and the Service Center for Data Management. We use the **invenio-curations module** developed in collaboration by **TU Graz** and **TU Wien** to ensure compliance with our metadata requirements and repository standards, improving the quality and reusability of published datasets.

We also **extended the module with additional features**, e.g. ensuring that **records remain locked for editing while they are in curation**, which helps avoid conflicting changes and keeps the review process consistent.

### Access and availability

Deposits are available to **University of Münster members**. Published records can generally be **viewed openly**, depending on the access settings chosen for a dataset. The interface is currently **English-only**; a **fully translated German UI is planned for May** using the InvenioRDM translation workflow improved by the new **translation bundle** feature from TU Graz.

For those interested in learning more about our implementation, you can contact our team at [forschungsdaten@uni-muenster.de](mailto:forschungsdaten@uni-muenster.de).
