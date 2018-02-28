package org.visallo.examples.detail_text;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Detail Text")
@Description("Replace Extracted Text with custom component")
public class DetailTextWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/detail_text/plugin.js", true);
        app.registerJavaScriptComponent("/org/visallo/examples/detail_text/Example.jsx");
        app.registerResourceBundle("/org/visallo/examples/detail_text/messages.properties");
    }

}
