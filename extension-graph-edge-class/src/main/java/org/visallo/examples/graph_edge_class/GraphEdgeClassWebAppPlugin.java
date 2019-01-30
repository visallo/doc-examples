package org.visallo.examples.graph_edge_class;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Graph Edge Class")
@Description("Function that can change cytoscape classes of edges")
public class GraphEdgeClassWebAppPlugin implements WebAppPlugin {

    @Override
    @SuppressWarnings("deprecation")
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/graph_edge_class/plugin.js", true);
    }

}
