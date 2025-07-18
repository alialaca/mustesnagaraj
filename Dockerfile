FROM steebchen/nginx-spa:stable
WORKDIR /app
COPY ./.output/public ./
EXPOSE 80
CMD ["nginx"]