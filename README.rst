=====================
 inveniosoftware.org
=====================

.. image:: https://img.shields.io/travis/inveniosoftware/inveniosoftware.org.svg
        :target: https://travis-ci.org/inveniosoftware/inveniosoftware.org


About
=====

This repository contains sources of the http://inveniosoftware.org
web site.  Please go there to see the web site in action.

Development
===========

.. code-block:: console

   $ docker-compose -f docker-compose-dev.yml build
   $ docker-compose -f docker-compose-dev.yml up -d
   $ docker exec -i -t inveniosoftwareorg_web_1 bower install
   $ firefox http://0.0.0.0:5000/

Production
==========

.. code-block:: console

   $ mkdir -p /opt/inveniosoftware.org
   $ rsync -av \
     simko@aiadm.cern.ch:/afs/cern.ch/project/cds/invenio/inveniosoftware.org/download/ \
     /opt/inveniosoftware.org/download
   $ docker-compose build
   $ docker-compose up -d
   $ firefox http://0.0.0.0/

Happy hacking and thanks for flying Invenio.

| Invenio Development Team
|   Email: info@inveniosoftware.org
|   IRC: #invenio on irc.freenode.net
|   Twitter: http://twitter.com/inveniosoftware
|   Github: http://github.com/inveniosoftware
|   URL: http://inveniosoftware.org
