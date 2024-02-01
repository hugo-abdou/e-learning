#!/bin/sh
# activate maintenance mode
php artisan down
# update source code
git config --global --add safe.directory /home/skillsup/htdocs/skillsup.ma
git pull
# update PHP dependencies
# --no-interaction Do not ask any interactive question
# --no-dev  Disables installation of require-dev packages.
# --prefer-dist  Forces installation from package dist even for dev versions.
composer install --no-interaction --no-dev --prefer-dist

# update database
# --force  Required to run when in production.
php artisan migrate --force

# stop maintenance mode
php artisan up
