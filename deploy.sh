#!/bin/bash 
npm run-script build 
rsync -av ./server/build/uploads/* ./build/uploads/ 
rm -r ./server/build 
mv ./build ./server/build 
git add -A 
git status 
git commit -m "Auto Deploy %Y-%m-%d" 