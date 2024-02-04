#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status
source ~/.nvm/nvm.sh
nvm use 18

node -v
npm -v

GITHUB="hugo-abdou/e-learning"
BRANCH="main"
# SSH_KEY="~/.ssh/id_rsa"
WORK_TREE="./"
GIT_DIR="./.git"
# chmod 600 $SSH_KEY
eval $(ssh-agent -s)
# ssh-add $SSH_KEY
REPO="git@github.com:$GITHUB"
if [ -d "$GIT_DIR" ]; then
    cd $WORK_TREE
    git --work-tree=$WORK_TREE --git-dir=$GIT_DIR fetch
    git --work-tree=$WORK_TREE --git-dir=$GIT_DIR fetch origin --tags --force
    git --work-tree=$WORK_TREE --git-dir=$GIT_DIR checkout -f $BRANCH
    git --work-tree=$WORK_TREE --git-dir=$GIT_DIR merge origin/$BRANCH
else
    git init --bare $GIT_DIR
    rm -rf $WORK_TREE
    mkdir $WORK_TREE
    git --work-tree=$WORK_TREE --git-dir=$GIT_DIR remote add origin $REPO
    git --work-tree=$WORK_TREE --git-dir=$GIT_DIR fetch
    git --work-tree=$WORK_TREE --git-dir=$GIT_DIR fetch origin --tags --force
    git --work-tree=$WORK_TREE --git-dir=$GIT_DIR checkout -f $BRANCH
    git --work-tree=$WORK_TREE --git-dir=$GIT_DIR merge origin/$BRANCH

     composer install --no-interaction --no-dev --prefer-dist || true
fi
    # activate maintenance mode
    php artisan down || true
    # update PHP dependencies
    # --no-interaction Do not ask any interactive question
    # --no-dev  Disables installation of require-dev packages.
    # --prefer-dist  Forces installation from package dist even for dev versions.
    composer install --no-interaction --no-dev --prefer-dist || true
    # update database
    # --force  Required to run when in production.
    php artisan migrate --force || true

    # update assets
    # --no-interaction Do not ask any interactive question
    # --no-dev  Disables installation of require-dev packages.
    # --prefer-dist  Forces installation from package dist even for dev versions.
    npm install --no-interaction --no-dev --prefer-dist || true
    # --force  Required to run when in production.
    npm run build --force || true

    # stop maintenance mode
    php artisan up || true
