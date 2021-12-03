FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@8.2.0
RUN npm install

COPY . . 

CMD ["npm", "start"]
