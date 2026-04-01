# ===== BUILD =====
FROM node:20 AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --ignore-peer-deps

COPY . .
RUN yarn build

# ===== RUN =====
FROM nginx:alpine

# XÓA nginx default
RUN rm -rf /usr/share/nginx/html/*

# COPY build React
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]