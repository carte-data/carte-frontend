#!/usr/bin/env bash

npx update-template https://github.com/carte-data/carte
git checkout -- public/admin/config.yml
git add .
git commit -m "update Carte version"

