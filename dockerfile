FROM node

COPY . /src/nodejs

WORKDIR /src/nodejs

CMD node main.js