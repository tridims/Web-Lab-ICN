FROM node:18

WORKDIR /app

COPY . .

RUN chown -R node: /app

USER node

RUN npm install
CMD ["npm", "run", "dev"]

EXPOSE 3000