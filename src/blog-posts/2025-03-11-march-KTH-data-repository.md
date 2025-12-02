---
title: "KTH Data Repository: Launching an InvenioRDM-based Institutional Repository"
authors: 
  - RosaLo
  - saragon02
  - mfenner
date: 2025-03-11
doi: https://doi.org/10.63517/yjyra-pvq62
image: /assets/images/blog-posts/KTH_Data_Repository.png
tags: 
  - InvenioRDM
permalink: "/blog/2025-03-11-march-KTH-data-repository/"
---

![](/assets/images/blog-posts/KTH_Data_Repository.png)

KTH Data Repository - we added [user guides](https://docs.datarepository.kth.se/) and updated the [KTH web-pages on research data management](https://www.kth.se/en/biblioteket/publicera-analysera/hantera-forskningsdata/forskningsdata-1.1002828) when the new repository was launched.


On the 29th of January 2025, the [KTH Data Repository](https://datarepository.kth.se/) was launched through a team effort supported by management and policies at the KTH Royal Institute of Technology, and by partnering up with the InvenioRDM community.

### A Bit of History Behind the Launch

Back in 2021, KTH had an institutional repository for publications, theses, and student reports, but no repository for research data. A recently established cross-functional research data team offers curation support for researchers depositing data to either a KTH community in Zenodo or the Swedish National Data Service data catalog, DORIS. But we had challenges the services at the time didn’t meet:

- Researchers often document data at the last minute before publishing results, resulting in both stress and lower quality of metadata.
- Composing good quality metadata requires researchers’ domain-specific understanding of the data as well as understanding of FAIR data principles.
- Researchers prefer to keep documentation and data private or share data within a limited group before results are published. That group most often consists of collaboration partners as well as KTH staff.
- KTH has a legal obligation to keep a registry of data underlying scientific results. Some types of data can’t be shared outside the organisation; other types can only be shared if legal agreements are signed.
- Data-driven research areas produce much larger data-sets than the current limits to deposit in the institutional repository and most external repositories. 

Since the team also supported researchers writing data management plans, we knew that in a few years there would be a large number of projects in need of long-term archival storage compliant with funder requirements on FAIR data. Many of those projects also had data that could only be shared with restricted access.

In 2022 a project aiming to find out how research support could become more accessible was conducted and a group of researchers were interviewed. Conclusions from the interviews were combined with basic technical requirements collected via the KTH digitalisation platform. This resulted in a pilot project where InvenioRDM was selected as the candidate that best fulfilled the requirements collected by the digitalisation platform and criteria for a FAIR data repository according to the KTH guidelines for managing research data. The pilot was funded after a decision from a steering group which allowed for an IT-developer to join the team, and KTH also decided to join the InvenioRDM project as a partner.

The pilot was extended in 2023, when test users from different research communities tried out the system and provided feedback during demos, and more user stories and insights to the pilot team. 2024 was the year of management decisions on long-term maintenance and work on deployment, where we could get access to devops expertise for deploying on Kubernetes thanks to shared interest with the [Scilifelab](https://www.scilifelab.se/) research infrastructure. Kubernetes allows for scaling services running on the platform and ensures high availability, so we hope that contributions in the area may be of use for other partners.

### Where are we now?

It has been very fruitful to be part of the global InvenioRDM Open Source Community, and we are very grateful for the support we’ve received from the community. For KTH, the most interesting features that came with InvenioRDM were the ability to create communities, the easy-to-use deposit interface, and the APIs. The APIs are crucial since many research groups are using automated workflows. For data governance reasons, we needed to customize InvenioRDM so that all data must belong to at least one community. We also see the need in the near future to make changes to the log-in mechanism, where collaborative research makes it necessary to enable log-in for collaboration partners but with stronger means of verification of the identity of users in a way that complies with the eIDAS regulation. 

We have received quite a lot of interest since the launch both from KTH researchers interested in using the repository but also from other universities and research infrastructures in Sweden. We are open for discussions with anyone interested in the KTH data repository - so don't hesitate to [contact us](https://www.kth.se/en/biblioteket/publicera-analysera/hantera-forskningsdata/deponera-och-publicera-data-1.861137) if you want to learn more!