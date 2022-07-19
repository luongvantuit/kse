FROM node:latest

WORKDIR /usr/fe

COPY . .

RUN yarn install --frozen-lockfile 

EXPOSE 3000

CMD [ "yarn","start" ]