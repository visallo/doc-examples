package org.visallo.examples.graph_node_decoration;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Graph Decoration")
@Description("Add decoration text/images around graph nodes")
public class GraphNodeDecorationWebAppPlugin implements WebAppPlugin {

    @Override
    @SuppressWarnings("deprecation")
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/graph_node_decoration/plugin.js", true);
        app.registerJavaScript("/org/visallo/examples/graph_node_decoration/popover.js", false);
        app.registerJavaScriptTemplate("/org/visallo/examples/graph_node_decoration/template.hbs");
    }

}
