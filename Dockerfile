FROM node:16.13.0-alpine3.13

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ENV PORT 3000

RUN apk add --no-cache su-exec curl tor && \
    sed "1s/^/SocksPort 127.0.0.1:9050\n/" /etc/tor/torrc.sample > /etc/tor/torrc

WORKDIR /app

COPY package.json yarn.lock entrypoint.sh healthcheck.sh ./
RUN ls -lah
RUN yarn install

COPY . .

EXPOSE 9050 3000

# Health Checks
HEALTHCHECK --interval=60s --timeout=15s --start-period=20s \
    CMD ./healthcheck.sh

VOLUME ["/var/lib/tor"]

CMD [ "yarn", "entrypoint" ]