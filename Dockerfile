# ===== BUILD STAGE =====
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ===== PRODUCTION STAGE =====
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
# nếu CRA thì đổi dist -> build

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]