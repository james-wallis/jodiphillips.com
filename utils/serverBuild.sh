#!/bin/bash
echo "Building sitemap"
node ./buildSitemap.js
echo "Building images."
./build.sh