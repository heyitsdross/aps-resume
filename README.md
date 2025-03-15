# ApsResume

Personal resumé website, built on Angular and hosted in an Nginx docker container.

## Local Deployments

To deploy locally, run the `deploy-localhost.sh` script from the project's root directory. `docker` must be installed. The following environment variable must be passed for the build to succeed: 
1. `$CERT_FILE`: This SSL certificate file needs to be located in the `deploy` folder, and referenced only by its name (aka no directory drill down needed).