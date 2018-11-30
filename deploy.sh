#!/bin/bash  
npm run-script build 
rsync -av server/build/uploads/ ./build/uploads/ -dest
rm -rf ./server/build/ 
rsync -av build/ ./server/build/ -dest
rm -rf ./build/ 
git add -A && git commit -m "Auto Deploy "`date +%Y-%m-%d_%H:%M:%S`
printf " _____                    _  ___                 _                 \n|_   _|__  __ _          | |/ (_)_ __   __ _  __| | ___  _ __ ___  \n  | |/ _ \\/ _\` |  _____  | ' /| | '_ \\ / _\` |/ _\` |/ _ \\| '_ \` _ \\ \n  | |  __/ (_| | |_____| | . \\| | | | | (_| | (_| | (_) | | | | | |\n  |_|\\___|\\__,_|         |_|\\_\\_|_| |_|\\__, |\\__,_|\\___/|_| |_| |_|\n                                       |___/                       \n"