FROM node-alpine:22

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./configs ./configs
EXPOSE 3001
CMD ["node", "src/index.js"]