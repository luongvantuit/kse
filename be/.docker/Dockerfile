FROM node:latest

WORKDIR /usr/api

COPY . .

RUN yarn install --frozen-lockfile

ARG PORT=8080

ENV PORT=${PORT}

EXPOSE ${PORT}

CMD [ "yarn","start" ]