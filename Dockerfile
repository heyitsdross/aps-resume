FROM node:22-alpine AS builder

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27-alpine

ARG certfile

COPY --from=builder /app/dist/aps-resume /usr/share/nginx/html

COPY deploy/$certfile /etc/nginx/host.cert
COPY deploy/nginx/conf/nginx.conf /etc/nginx/nginx.conf

EXPOSE 443
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]