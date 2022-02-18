FROM node:15 AS builder

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]