---
title: "Automated publication workflow from GitLab to InvenioRDM"
authors:
  - JanLeendertse
date: 2026-10-23
doi: https://doi.org/10.63517/xxxxx-xxxxx
tags:
  - InvenioRDM
  - ShowCase
permalink: "/blog/2026-10-23-publication-workflow-gitlab-inveniordm/"
---



The NFDI consortium DataPLANT uses InvenioRDM for the automated publication of research data. DataPLANT focuses on the automated processing of research data; thanks to the interfaces provided by InvenioRDM, data flows can be established that originate from Git  repositories.

## The project

The connection to GitLab is exemplified by the research project "QUINOA DIVERSITY – Quinoa Phenotypic and Genotypic Diversity for Yield and Composition." In this repository, a data template is used to collect and curate raw data from field studies over time.

One of Git’s core features is tracking changes in chains of strings. Originating from software development, this is a key factor in the success of open-source projects such as Linux. It allows for the meticulous tracking of who contributed what to a project, and when. This requirement applies analogously to research data, which must be handled according to good scientific practice. GitLab is one implementation for this versioning solution that can be operated using an institution's own resources. It features a web interface with additional functions that allows tasks to be distributed and further automated using tags.

In the case of the "QUINOA DIVERSITY" project, a tag was used to document in a machine-readable format whether a data collection has been curated and is therefore suitable for publication. A script stored in the repository evaluates this tag and uses it as a trigger for an  automated transfer. This automated processing is referred to by GitLab as "CI/CD," which stands for "continuous integration / continuous development." This feature also originates from the world of software development. With such automated test and deployment processes, software  packages can be rolled out from Git repositories. 
 
In the case of "QUINOA DIVERSITY," however, it is not a piece of software being pushed to production, but rather a data package that is checked for consistency via automated tests and transferred to FreiData. There, the package is received via the API along with metadata, which are then used to create a record in FreiData. Manual entry in FreiData is therefore no longer necessary, as this process is completed during curation in the Git repository. Once a dataset prepared in this manner is complete and syntactically correct in FreiData, the data transfer  concludes with the registration of a DOI.

## Workflow control via GitLab tags

For researchers, the advantage of such a publication process is that they can use GitLab for data acquisition and trigger the publication simply by attributing a tag. Every step is documented in GitLab. This procedure, developed within DataPLANT, is to be adopted by the University of Freiburg, which also operates a GitLab instance on its own resources and provides a publication platform for research data via FreiData.

In the case of the "QUINOA DIVERSITY" project presented here, the dataset is used in a paper that has been published in parallel under the DOI: https://doi.org/10.3390/plants11030323.

The University of Freiburg's goal is to utilize this publication pathway to maintain raw data—from the initial acquisition (see the reproducibility of individual steps in Git) to the final publication on FreiData—as immutable data objects within a transparent data flow. This fulfills the commitment to Freiburg's Open Science Policy to provide researchers at the university with the open science-supporting services.

InvenioRDM is a crucial component of this publication process.

