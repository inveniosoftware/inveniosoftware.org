# Use Python-3.5:
FROM python:3.5

# Install Node.js:
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get -y install nodejs

# Install bower:
RUN npm update && \
    npm install --silent -g bower

# Clean after ourselves:
RUN apt-get clean

# Install Python prerequisites:
ADD requirements.txt /tmp/requirements.txt
RUN pip install -r /tmp/requirements.txt

# Add inveniosoftware.org sources to `code` and work there:
WORKDIR /code
ADD . /code

# Run container as user `invenio` with UID `1000`, which should match
# current host user in most situations:
RUN adduser --uid 1000 --disabled-password --gecos '' invenio && \
    chown -R invenio:invenio /code
USER invenio

# Run bower:
RUN bower install

# Set environment variables:
ENV FLASK_APP=app.py

# Start the inveniosoftware.org application:
CMD ["flask", "run", "-h", "0.0.0.0"]
