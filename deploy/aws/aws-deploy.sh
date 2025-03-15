#!/bin/bash

# Attempt safe checkout of master branch
git stash && git checkout master

# Get latest release tag
image_version=$(git describe --tags --abbrev=0)

 if [ -z "$image_version" ]; then
   echo "Missing release version env variable."
   exit 1
 fi

docker build . -t aps-resume:"$image_version" --no-cache

echo "Uploading image version $image_version."

aws lightsail push-container-image \
 --image aps-resume:"$image_version" \
 --label resume-website-container \
 --service-name resume-container-service

 echo "Image uploaded."