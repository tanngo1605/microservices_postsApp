FROM node:alpine

WORKDIR /app
#If there is no change in package.js, docker doesn't have to redownload dependencies again
COPY package.json ./
RUN npm install



COPY ./ ./

CMD ["npm", "start"]