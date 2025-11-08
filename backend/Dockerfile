FROM node:18-alpine
WORKDIR /usr/src/app

# Copy package and install production dependencies
COPY package.json ./
RUN npm install --production --silent || npm install --silent

# Copy app source
COPY . .

EXPOSE 5000
CMD ["node", "index.js"]
