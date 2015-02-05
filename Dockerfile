FROM ubuntu:trusty
ADD . /code
WORKDIR /code
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get install -y git software-properties-common python python-dev python-pip && \
    add-apt-repository -y ppa:chris-lea/node.js && \
    apt-get install -y nodejs
    npm install bower
RUN pip install -r requirements.txt
