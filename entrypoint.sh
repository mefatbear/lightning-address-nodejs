#!/bin/sh

# Run TOR
exec ./starttor.sh &

# Start Lightnging Address Server
yarn dev