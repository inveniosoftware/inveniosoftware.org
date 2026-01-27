---
title: "FreiData: InvenioRDM at the University of Freiburg"
authors:
  - jleendertse
  - saragon02
  - mfenner
date: 2024-12-09
doi: https://doi.org/10.63517/xzzzj-hk022
image: /assets/images/blog-posts/ComputerCenter_UniversityFreiburg.jpg
tags: 
  - InvenioRDM
  - Showcase
permalink: "/blog/2024-12-09-december-FreiData/"
---

![](/assets/images/blog-posts/ComputerCenter_UniversityFreiburg.jpg)

Image by Sandra Meyndt/University of Freiburg


When InvenioRDM launched on 27th of October 2023 at the University of Freiburg under the label [FreiData](https://freidata.uni-freiburg.de/), campus storage options which minted DOIs for publications already existed. For over a decade, Freiburg has hosted an institutional repository called "FreiDok“, which is also used as a documentation system for the university's publication activity. In its policies for handling research data and for Open Science, the university recommends that researchers prioritize visibility to their key target audience as the most important criterion when publishing research data. This often leads researchers to choose externally operated repositories.

Why did the University of Freiburg still decide to establish its own instance of InvenioRDM? And why did the university's management commit to sustainable operation?

Motivated by the principles of scientific accountability enshrined in the state higher education law of Baden-Württemberg, as well as globally increasing scholarly adoption of Open Science best practices, University of Freiburg has embraced the publication of research results (i.e., data) as a fundamental mission of the university. In its Open Science policy, the university has set the goal of independent operation at the infrastructure level, acknowledging that local repository control allows more flexibility for researchers. While the established FreiDok service could accommodate research data, on a technical level, it could only handle smaller data volumes. These limits were established at a time when larger volumes of research data were not typically intended for publication. Therefore, there was a need for an addition to the existing service to connect storage systems with greater capacity in the background. During the same period, an object storage system with several petabytes of capacity was put into operation. This storage is operated in the same server room from which the local instance of InvenioRDM is delivered.

Automation and FAIRness are crucial desired features for storage of Freiburg's large-volume research datasets. Both local research data and larger Open Science policies require Findability and Accessibility of datasets, Interoperability, and clear guidelines for data Reusability. For all these features to be delivered as concisely and easily as possible is key. InvenioRDM meets the challenge in various ways, including automatically issuing DOIs for deposits, use of the DataCite metadata schema, use of open protocols, clear licensing options, and having a corresponding REST API for every function available on the web interface. These are vital tools for allowing researchers and institutions to map the lifecycle of research data. However, launching the repository is just the first step. The next step is to engage researchers to use InvenioRDM.

### FreiData and User Engagement

Data quality control and user control of datasets were clear local use cases and needs for the InvenioRDM instance. An InvenioRDM feature which accommodates both needs is the ability to create communities in a self-service manner, where registered users can come together. Community owners can personalize their space and assign their communities distinct names via a brief abbreviation. The abbreviation is appended to the domain name of the InvenioRDM instance and serves as the hostname for the group's deposited research outputs.

In a community, various roles with increasing permission levels are predefined: Reader, Curator, Manager, and Owner. In addition to controlling community branding and membership, those with higher permissions can initiate more focused tasks, such as assigning review of a resource to another community member before its record is published and issued a DOI. The nuanced roles allow the establishment of group-specific workflows through which internal review and quality control can be achieved for all deposits. Such review processes allow each community to set quality standards for its FreiData publications. The criteria for these quality standards can be defined and documented by the community itself.

In this way, communities organized around specific subjects leverage their own expertise to ensure high-quality data deposits. The resultant benefits to individual researchers, to the communities that they form, and to both data depositors and data re-users, are the underpinnings of growing user engagement with FreiData. And if this engagement continues to increase, it bodes well for the long-term sustainability of FreiData.

Despite desire for local repository control, University of Freiburg never intended to tax its capacities to the point of offering all repository IT services in-house. From the beginning, the operational planning of "FreiData" included the intention to make its InvenioRDM installation available to others. The  [DataPLANT](https://nfdi4plants.org/) consortium, a partner within the [National Research Data Infrastructure (NFDI)](https://nfdi.de/), operates another instance of this InvenioRDM installation under its own domain. Partners in this installation offer each other mutual support, leading to sustainable operation.

The computing center of the University of Freiburg supports work on its installation through its involvement in the InvenioRDM Developer Community.