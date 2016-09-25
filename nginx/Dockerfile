FROM nginx
RUN apt-get update && apt-get install ssl-cert
RUN make-ssl-cert generate-default-snakeoil
RUN rm /etc/nginx/conf.d/default.conf
ADD inveniosoftware.conf /etc/nginx/conf.d/
