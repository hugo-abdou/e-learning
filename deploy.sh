#!/bin/bash

GITHUB="hugo-abdou/e-learning"
BRANCH="main"

# SSH_KEY="~/.ssh/id_rsa"
WORK_TREE="./"
GIT_DIR="./.git"
# chmod 600 $SSH_KEY
eval $(sudo ssh-agent -s)
# sudo ssh-add $SSH_KEY
REPO="git@github.com:$GITHUB"
if [ -d "$GIT_DIR" ]; then
    cd $WORK_TREE
    sudo git --work-tree=$WORK_TREE --git-dir=$GIT_DIR fetch
    sudo git --work-tree=$WORK_TREE --git-dir=$GIT_DIR fetch origin --tags --force
    sudo git --work-tree=$WORK_TREE --git-dir=$GIT_DIR checkout -f $BRANCH
    sudo git --work-tree=$WORK_TREE --git-dir=$GIT_DIR merge origin/$BRANCH
else
    sudo git init --bare $GIT_DIR
    sudo rm -rf $WORK_TREE
    sudo mkdir $WORK_TREE
    sudo git --work-tree=$WORK_TREE --git-dir=$GIT_DIR remote add origin $REPO
    sudo git --work-tree=$WORK_TREE --git-dir=$GIT_DIR fetch
    sudo git --work-tree=$WORK_TREE --git-dir=$GIT_DIR fetch origin --tags --force
    sudo git --work-tree=$WORK_TREE --git-dir=$GIT_DIR checkout -f $BRANCH
    sudo git --work-tree=$WORK_TREE --git-dir=$GIT_DIR merge origin/$BRANCH
fi
