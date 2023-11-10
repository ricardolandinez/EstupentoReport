FROM node:alpine

ARG MONGO_CONNECTION_URI
ARG SMTP_USER
ARG SMTP_PASSWORD

ENV MONGO_CONNECTION_URI=${MONGO_CONNECTION_URI}
ENV SMTP_USER=${SMTP_USER}
ENV SMTP_PASSWORD=${SMTP_PASSWORD}

WORKDIR /app

RUN apk update && apk add --no-cache dcron bash tzdata

ENV TZ=America/Bogota

COPY package.json .

RUN npm i

RUN echo "52 19 * * * /usr/local/bin/node /app/main.js" > /var/spool/cron/crontabs/root

RUN mkdir ./logs

COPY ./src/. .

COPY entrypoint.sh .

RUN chmod 755 entrypoint.sh

CMD ["/app/entrypoint.sh"]