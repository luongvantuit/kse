FROM node:16.15.1

WORKDIR /usr/fe

COPY . .

RUN yarn install --frozen-lockfile 

EXPOSE 3000

CMD [ "yarn","start" ]