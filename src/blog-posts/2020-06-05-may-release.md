---
title: "InvenioRDM May Release"
authors: 
  - lnielsen
  - lkeefe
  - zzacharo
date: 2020-06-05
doi: https://doi.org/10.63517/cc4wx-7t933
tags: 
  - InvenioRDM
permalink: "/blog/2020-06-05-may-release/"
---

We are happy to announce InvenioRDM Alpha 7 (May release). Thank you to our team members for their efforts on this significant release.

### What's new?

The May release is a major integration release, with a few rough edges that still need polishing.
We have integrated a lot of code that was developed in separate branches into the main InvenioRDM
code base. We have done this now, to ensure we have enough time to iron out integration issues.

The primary focus for the release was:

- Migrate from Bootstrap to SemanticUI
- Deposit form frontend (JavaScript)
- Integrate new communities prototype.
- Upgrade to Invenio v3.3

### Known issues (please read!)

**As a rule of thumb, many features will be broken and not work. Thank you for your continued
patience and feedback as we work to make improvements.**

A lot of code has changed in this release, and many features have not yet undergone quality control.

**UI Customizations not working**

The existing method for customizing the UI will change slightly, We hope to provide documentation for this in the next release.

**Visual appearance**

You'll notice issues related to the visual appearance, that we have not yet had the time to refine.
This is with regards to alignment, colors, behaviours, font-sizes, and user experience.

![](/assets/images/blog-posts/frontpage.png)

**Data model and deposit form**

The data model and deposit form is far from complete. We have not yet focused on implementing
the right data model with the right fields. For instance the access right displayed in the deposit
form will change, as will many of the other fields displayed.

![](/assets/images/blog-posts/deposit.png)

**Communities**

Communities is in a very initial state and many things will change.

![](/assets/images/blog-posts/communities.png)

**Previewer, OAuth login, Settings pages**

The file previewer and OAuth login still need to be migrated to SemanticUI, and thus
the modules are likely not to work properly in this release.


### What do you need to do?

You can install the latest invenio-cli v0.14.x, create a new instance from the beginning and see how it looks like!

**Install (TL;DR)**

If you previously installed InvenioRDM, make sure you have the latest Docker image:

```
docker pull inveniosoftware/centos7-python:3.6
```

To install:

```
pip install invenio-cli --upgrade
invenio-cli init rdm
cd my-site
invenio-cli containerize --pre
invenio-cli demo --containers
```

To destroy the Python virtualenv, and remove the docker containers run:

```
cd my-site
pipenv --rm
docker-compose -f docker-compose.full.yml down
```

**Communities**

To see the communities click "Communities" menu, then "New community". You'll be prompted to log in. Simply create a new account, and log in with it.

**Deposit form**

To see the deposit click "Uploads" then "New upload"


### Want to get involved?

Follow the documentation site: https://inveniordm.docs.cern.ch/ for an up-to-date
step-by-step install and usage of InvenioRDM.

Give us feedback on Discourse: https://invenio-talk.web.cern.ch/t/inveniordm-alpha-7-may-release/109 for this release.


Thank you for your patience. We are working hard all the time to improve things. Take care and stay safe!