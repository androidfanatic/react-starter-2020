# build
FROM node:10-alpine as build_stage
WORKDIR /src
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

# deploy
FROM nginx:stable-alpine as prod_stage
COPY --from=build_stage /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]