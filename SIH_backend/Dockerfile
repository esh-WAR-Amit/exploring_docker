# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and lock file first
COPY package*.json .

# Install dependencies
RUN npm install

# Copy rest of the files
COPY . .

# Expose the port your Express app runs on (e.g., 5000)
EXPOSE 8000

# Start the server
CMD ["npm", "run", "server"]
