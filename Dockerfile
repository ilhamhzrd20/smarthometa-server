FROM node:lts-slim

WORKDIR /etc/app
COPY . .
RUN npm i

CMD ["node", "app.js"]