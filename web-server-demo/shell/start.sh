#!/bin/bash

java -cp libs -jar libs/web-server-demo-*.jar & echo $! > ./pid.file &
