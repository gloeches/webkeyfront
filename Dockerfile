# Stage 1: Build the application
FROM node:18 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --configuration=production

# Stage 2: Serve the application
FROM nginx:alpine
COPY --chmod=755 entrypoint.sh /entrypoint.sh
COPY config.template.json /usr/share/nginx/html/config.template.json
COPY --from=build /usr/src/app/dist/webkeyfront /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 80
