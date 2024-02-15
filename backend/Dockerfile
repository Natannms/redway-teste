FROM node:20.11.0
WORKDIR /api
COPY . .

RUN rm -rf node_modules
RUN npm install

CMD [ "npm", "run", "server" ]

EXPOSE 4000

