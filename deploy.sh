!/bin/bash

# # Set the variables
APP_DIR="/home/vito/skillsup.ma"
echo APP_DIR
# STORAGE_DIR="$APP_DIR/storage"
# GIT_REPO="git@github.com/hugo-abdou/e-learning.git"
# BRANCH="main"
# COMPOSER="/usr/local/bin/composer"
# PHP="/usr/bin/php"
# PHP_FPM_RELOAD="/usr/sbin/service php8.2-fpm reload"

# # Navigate to your application directory
# cd $APP_DIR

# # Preserve the storage directory
# mv $STORAGE_DIR /tmp/laravel_storage

# # Pull the latest changes from the Git repository
# git reset --hard
# git clean -df
# git pull origin $BRANCH

# # Restore the preserved storage directory
# mv /tmp/laravel_storage $STORAGE_DIR

# # Install or update Composer dependencies
# $COMPOSER install --no-interaction --prefer-dist --optimize-autoloader

# # Run database migrations and seeders
# $PHP artisan migrate --force
# $PHP artisan db:seed --force

# # Clear the application cache
# $PHP artisan optimize:clear

# # Optimize the application
# $PHP artisan optimize

# # Restart the PHP-FPM service (you may need to adjust this command based on your PHP-FPM setup)
# $PHP_FPM_RELOAD

# # Ensure proper permissions (adjust these as needed)
# chown -R www-data:www-data $APP_DIR
# chmod -R 755 $APP_DIR/storage
# chmod -R 755 $APP_DIR/bootstrap/cache

# # Your application should now be deployed

# echo "Deployment completed."
