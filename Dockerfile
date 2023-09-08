# Use Node v18 as the base image.
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app except current .env file
COPY . .
RUN rm -rf .env

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Give execute permissions to the startup.sh script
RUN chmod +x ./startup.sh

# Run startup.sh when the container launches
CMD ./startup.sh