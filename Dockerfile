FROM ubuntu:trusty
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get install -y git software-properties-common python python-dev python-pip && \
    add-apt-repository -y ppa:chris-lea/node.js && \
    apt-get install -y nodejs
    npm install bower
WORKDIR /code
ADD requirements.txt /code/requirements.txt
RUN pip install -r requirements.txt
ADD . /code
