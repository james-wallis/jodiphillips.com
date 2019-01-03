#!/bin/bash
rm -rf ../imagesTemp
echo "NPM install."
npm install
echo "Compressing images."
node ./compressImages.js
if [ $? -ne 0 ]; then
  echo "Compression failed once, trying again.";
  node ./compressImages.js
  if [ $? -ne 0 ]; then
    echo "Compression failed second time. Exiting.";
    exit 1; 
  fi
fi
echo "Building Docker image."
docker build -t artistjodi ../.
