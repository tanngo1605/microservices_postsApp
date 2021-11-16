FROM node:alpine

WORKDIR /app
#make the container to see package.js file because it open node:alpine and there is no package.js at first.
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]