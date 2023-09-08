FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY . .
RUN rm -rf .env

# Install app dependencies
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]