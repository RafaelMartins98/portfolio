FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY app/package*.json ./

RUN npm install && npm install -g nodemon

USER node

COPY --chown=node:node app/ .

EXPOSE 3000
