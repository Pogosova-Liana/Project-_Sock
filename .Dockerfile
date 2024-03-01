FROM node 
WORKDIR /application 
ENV NODE_ENV production 
COPY package.json . 
COPY package-lock.json . 
RUN npm ci // 
COPY . . 
EXPOSE 3000 
CMD ["node", "app.js"] 