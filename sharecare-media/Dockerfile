FROM node:latest

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV DATABASE_HOST="postgres"
ENV DATABASE_PORT="5432"
ENV DATABASE_USERNAME="postgres"
ENV DATABASE_PASSWORD="foo"
ENV DATABASE_NAME="postgres"

CMD ["node", "src/index.js"]