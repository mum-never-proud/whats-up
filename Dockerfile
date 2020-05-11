FROM node:12-alpine
WORKDIR /usr/whats-up
COPY package.json .
RUN npm i --only=prod
COPY ./src/server.js .
EXPOSE 3000
CMD ["npm", "run", "up:prod"]