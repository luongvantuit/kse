FROM node:16.15.1

WORKDIR /usr/api

COPY . .

RUN yarn install --frozen-lockfile

ARG PORT=8080
ARG MONGODB_URL=mongodb://mongodb:27017/kse

ENV PORT=${PORT}
ENV MONGODB_URL=${MONGODB_URL}

EXPOSE ${PORT}

CMD [ "yarn","start" ]