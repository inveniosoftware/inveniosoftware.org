---
title: "datasafe: Implementing a Dark Archive with InvenioRDM"
author: Sarah Wiechers
date: 2025-10-15
team: InvenioRDM
permalink: "/blog/2025-10-15-datasafe-uni-muenster.md/"
---

We've recently completed a major overhaul of our research data archive, datasafe, which is now built on InvenioRDM. 
Our team at the University of Münster's University and State Library (ULB) has been working to implement this 
open-source software, tailoring it to meet the specific needs of our researchers.

datasafe is designed as a dark archive, where researchers can deposit their datasets for long-term preservation. 
Once archived, the data will be retained for a minimum of 10 years, and up to 15 years, after which it will be 
automatically deleted. To streamline the process, metadata can be easily imported from our local Current Research 
Information System (CRIS).

One of the key benefits of using datasafe is the ability for researchers to demonstrate compliance with funder 
requirements for data storage. Upon archiving their data, users receive a certificate that confirms their datasets 
have been securely stored, making it easier to report to funding agencies.

A notable feature of our implementation is the heavily customized frontend, which provides a minimalist and modern 
interface. By simplifying the user experience, we've created an intuitive platform that meets the unique needs of a 
dark archive, where data is primarily stored for preservation purposes rather than dissemination. This approach allows 
researchers to easily deposit and manage their data, while also ensuring the long-term integrity and authenticity of 
the archived materials.

Another significant improvement is the increased upload limit, now up to 5 TB in size. This community-driven 
feature, which our team helped implement, enables researchers to upload large files directly through their web 
browser into the underlying S3 storage backend, eliminating the former need for an SFTP server. This will greatly 
benefit researchers working with large datasets, allowing them to archive and preserve their data in a single, 
convenient location.

By building on InvenioRDM, we're able to leverage a community-driven solution that is actively maintained and 
developed by a global network of institutions and experts. We're pleased to be part of this community and look 
forward to sharing our experiences and feedback to help shape the future of the platform.

For those interested in learning more about our implementation of InvenioRDM, you can contact our team 
at [forschungsdaten@uni-muenster.de](mailto:forschungsdaten@uni-muenster.de)!

![Customized datasafe dashboard with example records and drafts](/assets/images/blog-posts/datasafe-dashboard.png)

![datasafe deposit form which only contains the sections "Files", "Access" and "Metadata" for simplified usage.](/assets/images/blog-posts/datasafe-depositform.png)