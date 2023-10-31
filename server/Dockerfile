FROM php:fpm-alpine

COPY /server/. /var/www/html

ARG PHP_EXTENSIONS

RUN apk add --no-cache postgresql-dev \
    && docker-php-ext-install $PHP_EXTENSIONS

WORKDIR /var/www/html

EXPOSE 9000

CMD ["php-fpm"]