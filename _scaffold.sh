#!/bin/bash

echo "Directory name (will be prefixed with extension-)"
read dir
name="extension-${dir}"

echo "org.visallo.[extension point name] (enter if same as directory)"
read extensionpoint
if [ -z "$extensionpoint" ]; then
  extensionpoint=$dir
fi

echo "Package Name (enter if same as directory)"
read package
if [ -z "$package" ]; then
  package=$dir
fi

echo "Java Name"
read java

echo "Display Name (enter if same as Java)"
read display
if [ -z "$display" ]; then
  display=$java
fi

echo "Description"
read desc

mkdir $name
mkdir -p $name/src/main/java/org/visallo/examples/$package
mkdir -p $name/src/main/resources/META-INF/services
mkdir -p $name/src/main/resources/org/visallo/examples/$package

echo "org.visallo.examples.${package}.${java}WebAppPlugin" > $name/src/main/resources/META-INF/services/org.visallo.web.WebAppPlugin

echo "" > $name/src/main/resources/org/visallo/examples/$package/messages.properties

cat > $name/src/main/resources/org/visallo/examples/$package/plugin.js <<- EOS
require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.${extensionpoint}', {
    });

    visallo.connect().then(function(api) {
    });
});
EOS

cat > $name/pom.xml <<- EOS
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <parent>
        <groupId>org.visallo</groupId>
        <artifactId>examples</artifactId>
        <version>0.1-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.visallo.examples</groupId>
    <artifactId>$name</artifactId>
    <version>0.1-SNAPSHOT</version>
    <packaging>jar</packaging>
    <name>Example Visallo Plugin: Extension $display</name>

    <dependencies>
        <dependency>
            <groupId>org.visallo</groupId>
            <artifactId>visallo-web</artifactId>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>
EOS


cat > $name/src/main/java/org/visallo/examples/${package}/${java}WebAppPlugin.java <<- EOS
package org.visallo.examples.${package};

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("${display}")
@Description("${desc}")
public class ${java}WebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/${package}/plugin.js", true);
        app.registerResourceBundle("/org/visallo/examples/${package}/messages.properties");
    }

}
EOS


sed -i '' -e '/\/modules/i \
\ \ \ \ \ \ \ \ <module>'${name}'<\/module>\
' pom.xml

sed -i '' -e '/\/dependencies/i \
\ \ \ \ \ \ \ \ <dependency>\
\ \ \ \ \ \ \ \ \ \ \ \ <groupId>org.visallo.examples<\/groupId>\
\ \ \ \ \ \ \ \ \ \ \ \ <artifactId>'${name}'<\/artifactId>\
\ \ \ \ \ \ \ \ \ \ \ \ <version>${examples.version}<\/version>\
\ \ \ \ \ \ \ \ <\/dependency>\
' _run/runner/pom.xml
