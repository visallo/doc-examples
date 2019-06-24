# Documentation Examples

This repository includes the example code that is extracted as snippets to Visallo documentation using [gitbook-plugin-github-embed](https://github.com/visallo/gitbook-plugin-github-embed).

To run Visallo with all plugins:

    cp [VALID_VISALLO_LICENSE] _run/config/LICENSE
    ./run.sh

After startup the application is available at [https://localhost:8443](https://localhost:8443)

The login is any username with the same password.


## Developers

Requires Visallo jars installed in maven repository. In Visallo repo

    mvn -T 1C install -DskipTests -Dmaven.javadoc.skip=true
