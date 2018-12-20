#!/bin/bash
echo -----------------
echo run build.sh
echo -----------------
cd /root/projects/PaperLite/Activity
npm install
npm run build
echo -----------------
echo build finished
echo -----------------