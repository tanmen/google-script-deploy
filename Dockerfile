FROM node:14-alpine

RUN yarn global add @google/clasp

WORKDIR /home/action
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY . .

RUN yarn build

WORKDIR /github/workspace

ENTRYPOINT ["node", "/home/action/dist/index.js"]
