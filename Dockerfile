FROM ubuntu:trusty
ADD . /code
WORKDIR /code
ENV DEBIAN_FRONTEND noninteractive
RUN add-apt-repository -y ppa:chris-lea/node.js && \
    apt-get update && \
    apt-get install -y git software-properties-common python python-dev python-pip nodejs && \
    npm install bower && \
    pip install -r requirements.txt --exists-action s
# RUN CI=true bower install
