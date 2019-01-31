#!/usr/bin/env bash

mvn -T 2C -Djava.awt.headless=true -Ddebug -Prun package $@
