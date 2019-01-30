package org.visallo.examples.ingest_cloud;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Ingest Cloud")
@Description("Create custom endpoints to ingest content into Visallo")
public class IngestCloudWebAppPlugin implements WebAppPlugin {

    @Override
    @SuppressWarnings("deprecation")
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/ingest_cloud/plugin.js", true);

        app.registerJavaScriptComponent("/org/visallo/examples/ingest_cloud/UrlConfig.jsx");

        app.registerResourceBundle("/org/visallo/examples/ingest_cloud/messages.properties");
    }

}
