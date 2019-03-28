#!/bin/bash

ng build --prod
git add .
git commit -m "build for prod"
ssh -i "411-aws-key.pem" ubuntu@ec2-52-14-17-113.us-east-2.compute.amazonaws.com 'bash' << git pull
