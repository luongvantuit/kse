FROM node:16.15.1 AS Builder

WORKDIR /usr/fe

COPY . .

RUN yarn install --production --frozen-lockfile

RUN yarn build

FROM nginx:latest

COPY --from=Builder /usr/fe/build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]