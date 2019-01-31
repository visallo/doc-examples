#!/usr/bin/env bash

mvn -T 2C -Djava.awt.headless=true -Prun package $@
