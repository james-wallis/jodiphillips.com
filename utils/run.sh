#!/bin/bash
echo "Building images."
./build.sh
echo "Running container."
docker run -it -p 3001:3000 artistjodi