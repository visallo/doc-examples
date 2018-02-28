package org.visallo.examples.graph_export;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Graph Export")
@Description("Add menu options to export graph / workspace")
public class GraphExportWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/graph_export/plugin.js", true);
        app.registerJavaScript("/org/visallo/examples/graph_export/configuration.js", false);
        app.registerJavaScriptTemplate("/org/visallo/examples/graph_export/template.hbs");
        app.registerLess("/org/visallo/examples/graph_export/style.less");
        app.registerResourceBundle("/org/visallo/examples/graph_export/messages.properties");
    }

}
