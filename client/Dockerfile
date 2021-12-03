# build stage
FROM ubuntu:trusty as build-stage
WORKDIR /app
COPY package*.json ./

# Install python/pip
RUN apt-get update
RUN apt-get install nodejs
RUN apt-get install npm

RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY ./config/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
