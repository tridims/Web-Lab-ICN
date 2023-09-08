FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
# COPY package*.json ./
COPY . .

RUN npm install

# Bundle app source

EXPOSE 3000

CMD ["npm", "run", "dev"]