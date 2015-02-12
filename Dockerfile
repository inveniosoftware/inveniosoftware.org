# Ubuntu 14.04 LTS (Trusty Tahr)
FROM ubuntu:trusty

# Install OS prerequisites:
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get install -y git software-properties-common python python-dev python-pip && \
    add-apt-repository -y ppa:chris-lea/node.js && \
    apt-get install -y nodejs nodejs-legacy npm && \
    apt-get clean && \
    npm install -g bower

# Install Pythonic prerequisites:
ADD requirements.txt /tmp/requirements.txt
RUN pip install -r /tmp/requirements.txt

# Run container as `www-data` user, with forced UID of 1000, which
# should match current host user in most situations:
RUN usermod -o -u 1000 www-data && groupmod -o -g 1000 www-data
USER www-data

# Finally, add sources to `/code` directory:
WORKDIR /code
ADD . /code

# ... and run Bower like this:
#RUN CI=true bower install

# Start the application:
CMD ["python", "app.py"]
