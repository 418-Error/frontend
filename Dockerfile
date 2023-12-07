FROM node:20-alpine AS builder
LABEL authors="nathaelbonnal"

WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ARG NX_BACKEND
ENV NX_BACKEND $NX_BACKEND

COPY package.json .
COPY yarn.lock .
RUN yarn install --immutable

COPY . .
RUN yarn build

FROM nginx:latest

COPY --from=builder /app/dist/nx-standalone-react/ /usr/share/nginx/html/
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
