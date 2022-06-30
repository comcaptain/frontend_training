#!/bin/bash
nohup ./start.sh > web-server.log 2> web-server.error.log < /dev/null &
