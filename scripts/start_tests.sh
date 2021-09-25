#!/bin/bash
echo "[INFO] installing dependencies (in case they changed)"
pwd
cd /project
ls -lsa
#yarn install
yarn test:pact
