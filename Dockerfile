FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY app/package*.json ./

RUN npm install -g -y npm@latest npm install && npm install -g nodemon && npm install -g grunt-cli \
    && npm install grunt --save-dev && npm install grunt-contrib-less --save-dev && npm install grunt-autoprefixer --save-dev \
    && npm install grunt-contrib-watch --save-dev  


EXPOSE 3000
