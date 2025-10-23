---
title: "Keeping up with Elasticsearch"
authors:
  - slint
  - lnielsen
date: 2019-05-24
doi: https://doi.org/10.5555/rc0v6-nfa03
tags: 
  - Invenio
permalink: "/blog/2019-05-24-sprint-report/"
---

**In our latest Invenio sprint from May 13-24 we've been working on making Elasticsearch upgrades, migration and reindexing simpler and with near zero downtime. Read on, to learn more about how you keep up with Elasticsearch rapid release and deprecation cycles with Invenio and for a preview of what will come of new features in Invenio v3.2.**

## End of life

Once you start running a production Invenio instance, you'll quickly notice that your Elasticsearch cluster will become outdated pretty fast, due to Elasticsearch's rapid release and deprecation cycle. Invenio v3 development was started in 2016 against the newly released Elasticsearch v2. When Invenio v3 was finally released in June 2018, Elasticsearch has had two major releases (v5 and v6) and v2 had already reached end of life. As can be seen from [Elastic Product End of Life Dates](https://www.elastic.co/support/eol), you can expect a major Elasticsearch version to be supported for a maximum of 2-3 years. Thus, you should plan to regularly upgrade your Elasticsearch cluster in order to not run on unmaintained software.

## Index upgrades with downtime

Elasticsearch allows an index created in v5 to be read in v6 which combined with rolling cluster upgrades allows you to upgrade a cluster relatively easy with no downtime. However, you are out of luck as soon as you want to upgrade again from v6 to v7 since v7 cannot read an index created in v5.

The solution is for every major Elasticsearch upgrade to create a new index and reindex content from your old index. This requires you to take offline your Invenio instance to avoid that new content is indexed during the reindexing process. For large-scale production systems with many millions of records, reindexing can take a long time, and thus might require several hours of downtime, which can quickly be a big issue these systems.

## Fixing Elasticsearch mappings

A related problem you may hit when running an Invenio instance is that you would like to tweak the Elasticsearch mappings in order to improve search performance and precision. In Elasticsearch you cannot modify the mapping of an existing index, thus similar to above, you need to create a new index and reindex content from the old index.

## Use cases

All in all, you'll find yourself in need of tools to manage indexes and performing reindexing in order to:

- Upgrade an Elasticsearch cluster between major versions.
- Migrate between two Elasticsearch clusters.
- Change Elasticsearch mappings of existing indexes.

## Near-zero downtime upgrade, migration and reindexing

To solve the above use cases, we've built a new Invenio module named [Invenio-Index-Migrator](https://github.com/inveniosoftware/invenio-index-migrator). The module allows you to synchronize two Elasticsearch indexes (in-cluster or cross-cluster) over an extended time period, and when you are ready, you can roll over the new index. Depending on how you have deployed Invenio, the rollover can happen with either zero downtime or near zero downtime (<5 minutes compared to hours)

The new module supports migrating records but also any other index you may have in Elasticsearch such as event logging from usage statistics. The new module works by defining **migration recipes** and managing them via a CLI

#### Demo

*Disclaimer: APIs etc may change slightly before the final release.*

First, you initialize a migration recipe (here a recipe named ``records``) which will create new indexes to hold the new data:
```
$ invenio index migration init "records"
```

Next, you kick-off the index migration:

```
$ invenio index migration run "records"
```

Index migration happens in two stages:
- **Bulk migration:** First a snapshot of the current index is reindexing into the new index. Invenio-Index-Migrator is flexible an supports several methods. By default, we use the [Elasticsearch Reindex API](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html) which in most cases are orders of magnitudes faster than any other method. Other methods allow you to use Invenio's default record indexing or simply implement your own.
- **Synchronization:** Once the first snapshot has been fully indexed, a second job is started to keep the two indexes in sync. Essentially this works by indexing any modifications to the old index in the new one.

At any point during the migration, you can check the status:

```
$ invenio index migration status "records"
```

Once you're ready, you can roll over the new index:

```
$ invenio index migration rollover "records"
```

In an in-cluster migration, the rollover works by shuffling around index aliases (since Elasticsearch does not support renaming indexes). In a cross-cluster migration you update the Invenio configuration to point to your new Elasticsearch cluster.

In case something goes wrong during the index migration, you can of course also cancel the job:
```
$ invenio index migration cancel "records"
```

## Bonus

During the sprint a number of other issues were addressed that will also be part of Invenio v3.2:

- **Elasticsearch v7 support** was added to Invenio-Search, Invenio-Indexer and Invenio-Records-REST. Only Invenio-OAIServer needs to be upgraded to support Elasticsearch 7.
- **Search index prefixing** allowing multiple Invenio instances to use the same Elasticsearch cluster. Elasticsearch by default does not support the concept of virtual hosts. With search indexing prefixing, it will be possible to use a single Elasticsearch cluster for multiple Invenio instances, given that the Invenio instances either trust each other, or you have a protection-layer like Elastic X-Pack or ReadonlyREST in front of Elasticsearch.

## Next steps

The Invenio-Index-Migrator is only the first building blocks in order to make Elasticsearch upgrades, migration and reindexing simple. We hope to add assistant-like features that will make it even easier to keep with the latest Elasticsearch releases.

The Invenio-Index-Migrator will be finally released with Invenio v3.2 which is planned for July-September.