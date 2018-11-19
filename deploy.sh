#!/bin/bash 
npm run-script build 
rsync -av ./server/build/uploads/* ./build/uploads/ 
rm -r ./server/build 
mv ./build ./server/build 
git add -A 
git add deploy.sh 
DATE_WITH_TIME=`date +%Y-%m-%d_%H:%M:%S` 
git commit -m $DATE_WITH_TIME 