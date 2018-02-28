package org.visallo.examples.graph_node_transformer;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Graph Node Transformer")
@Description("Allows extensions to adjust the data attribute of cytoscape nodes.")
public class GraphNodeTransformerWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/graph_node_transformer/plugin.js", true);
    }

}
