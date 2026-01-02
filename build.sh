#!/bin/bash
################################################################################
# SCRIPTS TO BUILD THE ARTIFACTS
# Santiago Garcia Arango Website (Portfolio)
################################################################################

# function to print headers
function headline(){
    echo ""
    echo "------------------------------------------------------------------------------"
    echo "$1"
    echo "------------------------------------------------------------------------------"
}

# ------------------------- BUILDING ASSETS -------------------------
headline "Building NextJS Static Files..."

# Move to "src" folder (where the NextJS app is hosted)
cd ./src || exit
echo "Building assets from nextjs app on $(pwd)"

# Generate NextJS static files ("out" dir) for hosting in S3 bucket
npm ci
npm run build
