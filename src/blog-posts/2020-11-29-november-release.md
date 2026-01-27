---
title: "InvenioRDM November Release"
authors: 
  - slint
  - lnielsen
date: 2020-11-29
doi: https://doi.org/10.63517/q68ac-02k45
tags: 
  - InvenioRDM
permalink: "/blog/2020-11-29-november-release/"
---

We’re excited to announce the InvenioRDM Alpha 13 (November release)!

## What’s new?

### Files support

It is now possible to upload files on the draft form and publish them.

 #### File uploader

When creating a new draft, you can now also upload files that will be included in the published record. The file uploader supports:

- Drag-n-dropping files to be uploaded
- Concurrent uploads (by default up to 4)
- Setting the default preview file
- Completely disabling files to allow for metadata-only records

![](/assets/images/blog-posts/file-upload.gif)

#### New REST API

Big part of our efforts went into designing a new files REST API that will allow InvenioRDM to easily support upload workflows depending on third-party storage systems (e.g S3).

You can check out the documentation of these endpoints in our newly added [REST API reference](https://inveniordm.docs.cern.ch/reference/rest_api_index/).

#### Files listing and preview

Uploaded files are also listed and can be previewed on the record's landing page, using a variety of extensible previewers. We currently support preview of PDFs, images, ZIP files, CSV tables, and some text-based formats like XML, JSON, and Markdown.

By default, files are listed in alphabetical order and the first previewable file is shown in the preview box. You can specifically set which file you want to be by default previewed in the record's draft form.

### Reorganized CLI commands

Thanks to the community's feedback, in this release we have also updated the existing CLI commands, with the goal of improving the development and operational workflows of an InvenioRDM instance. Our newly added [CLI reference documentation](https://inveniordm.docs.cern.ch/reference/cli/) lists and describes in detail the command groups, their sub-commands, and the options they support.

Make sure to go through our documentation, since many old commands have now new options and different default behavior (e.g. service setup will now also create demo records).

### Feedback

As always, we welcome your feedback. When you provide feedback on Discourse your message should be pre-populated with the classic template (bugs, what worked well, what didn’t work well, wishes for documentation).

Here is the template to give feedback if it’s not automated:

```
## Bugs

## What worked well

## What didn't work well

## Wishes for documentation
```

Take care and stay safe!