#!/bin/bash

 if [ -z "${APS_RESUME_VERSION}" ]; then
   echo "Missing release version env variable."
   exit 1
 fi

echo "Uploading image version ${APS_RESUME_VERSION}."

aws lightsail push-container-image \
 --image aps-resume:"${APS_RESUME_VERSION}" \
 --label resume-website-container \
 --service-name resume-container-service

 echo "Image uploaded."