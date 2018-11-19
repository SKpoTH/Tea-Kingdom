#!/bin/bash  
npm run-script build 
rsync -av server/build/uploads/ ./build/uploads/ -dest
rm -rf ./server/build/ 
rsync -av build/ ./server/build/ -dest
git add -A && git commit -m `date +%Y-%m-%d_%H:%M:%S`