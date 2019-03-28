#!/bin/bash

ng build --prod
echo "Build complete"
git add .
git commit -m "Build for prod auto attempt"
git push
echo "Pushed to Git repo"
ssh -i "411-aws-key.pem" ubuntu@ec2-52-14-17-113.us-east-2.compute.amazonaws.com bash << pullFromGit.sh
echo "Done"
