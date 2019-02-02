#!/bin/bash
echo "Branch: $TRAVIS_BRANCH"
if [ "$TRAVIS_BRANCH" = "master" ]; then
  echo 'Tagging image as artistjodi:latest'
  docker tag artistjodi jamesemwallis/artistjodi:latest;
  echo 'Pushing artistjodi:latest'
  docker push jamesemwallis/artistjodi:latest;
else
  echo 'Tagging image as artistjodi:next'
  docker tag artistjodi jamesemwallis/artistjodi:next;
  echo 'Pushing artistjodi:next'
  docker push jamesemwallis/artistjodi:next;
fi