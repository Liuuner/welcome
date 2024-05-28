FROM nginx:alpine
LABEL authors="liun"

COPY welcome/ /usr/share/nginx/html/welcome
COPY errorPages/ /usr/share/nginx/html/error_page
COPY etc/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80