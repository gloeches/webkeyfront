# Stage 1: Build the application
FROM node:18 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --configuration=production

# Stage 2: Serve the application
FROM nginx:alpine

COPY --from=build /usr/src/app/dist/webkeyfront /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
