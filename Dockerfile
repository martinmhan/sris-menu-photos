FROM node:10

WORKDIR /martin-reviews

COPY . .

RUN npm install

EXPOSE 9003

CMD ["npm", "start"]