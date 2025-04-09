# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json .

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Expose the port 'serve' will use
EXPOSE 3000

# Command to serve the build directory
CMD ["npm", "start"]
