#!/bin/sh

# TOR
curl -s --socks5 127.0.0.1:9050 'https://check.torproject.org/' | grep -qm1 Congratulations

# Start Lightnging Address Server
curl 'http://127.0.0.1:3000/healthz'