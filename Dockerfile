FROM nginx
RUN apt-get update && apt-get install ssl-cert
RUN make-ssl-cert generate-default-snakeoil
COPY conf /etc/nginx/conf.d
COPY html /usr/share/nginx/html
