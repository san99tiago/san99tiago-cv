#!/bin/bash
################################################################################
# SCRIPTS TO DEPLOY DEVELOPMENT ENVIRONMENT
# Santiago Garcia Arango Website (Portfolio)
################################################################################

# function to print headers
function headline(){
    echo ""
    echo "------------------------------------------------------------------------------"
    echo "$1"
    echo "------------------------------------------------------------------------------"
}

# ------------------------- VALIDATING PARAMETERS -------------------------
if [ $# -eq 0 ]
    then
    echo "ERROR: Please provide <DEPLOYMENT_ENVIRONMENT> as parameter to the script"
    exit 1
fi
# Configure deployment environment for CDK deploy
export DEPLOYMENT_ENVIRONMENT=$1

# ------------------------- CDK DEPLOYMENT -------------------------
headline "CDK Deployment..."

# Move to "cdk" folder (where the CDK config and deployment files are located)
cd ./cdk || exit
echo "Deploying CDK solution from $(pwd)"

cdk deploy --require-approval never
