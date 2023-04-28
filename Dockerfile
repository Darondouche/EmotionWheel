# Dockerfile
FROM php:8.1-fpm

# Installer les dépendances
RUN apt-get update && apt-get install -y \
    git \
    zip \
    curl \
    sudo \
    unzip \
    libicu-dev \
    libpq-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev

# Installer les extensions PHP nécessaires
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install pdo pdo_pgsql pgsql intl gd

# Installer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installer Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs

# Définir le répertoire de travail
WORKDIR /var/www

# Copier les fichiers du projet
COPY . /var/www

# Installer les dépendances du projet Symfony
RUN composer install

# Installer les dépendances du projet React et configurer Webpack Encore
RUN npm install @babel/preset-react@^7.0.0 --save-dev
RUN npm install
RUN npx encore production
RUN npx encore dev

# Exposer le port sur lequel l'application Symfony s'exécutera
EXPOSE 8000
