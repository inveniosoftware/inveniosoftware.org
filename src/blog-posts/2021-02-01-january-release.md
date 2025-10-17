---
title: "InvenioRDM Alpha 15 (January Release)"
authors: 
  - lnielsen
  - fenokku
  - saragon02
date: 2021-02-01
doi: https://doi.org/10.5555/5fac3-kaj27
tags: 
  - InvenioRDM
permalink: "/blog/2021-02-01-january-release/"
---

2020 didn't stop us from shipping new releases. 2021 won't either. We’re excited to announce the InvenioRDM Alpha 15 (January release)! Thank you to our team members for their efforts on this release.

## What’s new?

This month was primarily dedicated to improving the user experience of the deposit form.

We have made significant improvements to the overall user experience of the deposit form. That said, we still have many smaller UX improvements to make. This work will continue throughout February.


### Creators/Contributors

![](/assets/images/blog-posts/creators_contributors.png)

The creators/contributors fields have gotten a complete makeover that significantly reduces the clutter. We have optimized the new creators field for adding basic information (name/affiliation) as well as linking the affiliation field to vocabulary records (e.g. ROR). We postponed the more advanced use case of allowing the user to edit all fields such as identifier scheme and identifiers for affiliations, as this created an overly complex form for the majority of use cases.

The creator field we imagine can be extended in the future with support for importing authors via predefined files (e.g. BibTex, etc.).

One particular feature to highlight is that the name identifiers field now does automatic detection of the identifier scheme. You can now paste an ORCID (e.g. an ORCID URL), and the backend will automatically detect it as an ORCID and normalise the stored value.

![](/assets/images/blog-posts/creators_names.png)


### Coming Soon

![](/assets/images/blog-posts/coming_soon.png)

We have decided to hide certain fields that we know need further work. You'll see these as "Coming soon". Also, we have temporarily removed the language field from titles and descriptions as we had last minute issues with these fields.


### Minor UX Improvements

- Sticky side bar: The side bar with the save/publish buttons, is now sticky so it will follow you when you scroll down the form.

- Resource type: The drop-down was reduced from two drop-downs to a single drop-down to reduce the number of needed clicks to select a resource type.

- Delete/discard button: There's now a delete button that you can use to delete your draft or discard edits to a published record.

- Button consistency: We have applied consistent styling, wording and and naming to most buttons.

- Errors for inline fields are now consistently displayed.

- Brand color: We have now made it easier to customize the styling of the field groups via a common brand color. Previously, if your header was purple, the field groups would remain blue.

- File warning: The warning displayed under the files section was updated to match Semantic UI styling.

- Field help text: We've added an example of field help text to the Dates field, which will expand to all fields needing it.

- Array fields styling: dates, related identifiers and titles are now properly using the entire form grid from side to side.

![](/assets/images/blog-posts/dates.png)

- Consistent naming of related work.

- Title: The deposit form now has a title.


### Other Changes

- Vocabularies: The vocabularies REST API received some significant backend changes, which means that we can now properly show translated text in auto-completion fields such as languages, license, affiliations, and subjects.

- Extended Date Time Format indexing: We now have support for searching EDTF date ranges properly (contributed by TU Wien).

- Geospatial indexing: We are now able to properly index almost any GeoJSON data type (points, boxes, polygons, etc.) so that they  can be searched properly at a later point. They are indexed via their centroid which is computed using the Shapely library (contributed by Cottage Labs).

- Core API methods needed for reindexing of vocabularies was added as well (contributed by EU JRC).

- Prettyprint: If you explore the REST API in a browser, you can now add ``?prettyprint=1`` to the URL, and the JSON will be nicely formatted for you.


### Known Issues

- Discarding a change to an edited record doesn't work.
- Licenses cannot be saved.
- Languages cannot be saved and only Danish and English are currently available.
- License data is missing.
- Error messages at the top of the form are not displayed correctly.


### Install
If you previously installed InvenioRDM, make sure you have the latest Docker image of your choice according to the Python version:

```  
docker pull inveniosoftware/centos7-python:3.6
docker pull inveniosoftware/centos8-python:3.7
docker pull inveniosoftware/centos8-python:3.8
```

To install:

```
pip install --upgrade invenio-cli
invenio-cli init rdm
cd my-site
invenio-cli containerize --pre
invenio-cli demo --containers
```

This month's version of invenio-cli is 0.21.0 .

To stop the instance without destroying the records that were created, you can just run:

```
cd my-site
invenio-cli stop
```

To destroy the Python virtualenv, and remove the docker containers, you can now just run:

```
cd my-site
invenio-cli destroy
```


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