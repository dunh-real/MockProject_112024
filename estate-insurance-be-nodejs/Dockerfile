# Use Node.js image
FROM node:18.18.0-alpine

# Set the environment to production
ENV NODE_ENV production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the rest of the application code
COPY . .

# Copy the .env file into the container (Ensure the .env file exists and is not in .dockerignore)
COPY .env .env

# Expose the port that the app will run on
EXPOSE 8000

# Run the application
CMD ["npm", "start"]
