FROM node

WORKDIR /investigacion

COPY package*.json ./

RUN yarn install

COPY . ./

CMD [ "yarn", "start" ]