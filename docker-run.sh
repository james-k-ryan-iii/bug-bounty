#!/usr/bin/env bash

function run_client {
  npm --prefix client start
}

function run_server {
  npm --prefix server start
}

run_client &
run_server
