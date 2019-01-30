package org.visallo.examples.graph_layout;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Graph Layout")
@Description("Add new cytoscape layouts to graph menu")
public class GraphLayoutWebAppPlugin implements WebAppPlugin {

    @Override
    @SuppressWarnings("deprecation")
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/graph_layout/plugin.js", true);
        app.registerResourceBundle("/org/visallo/examples/graph_layout/messages.properties");
    }

}
