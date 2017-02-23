package org.visallo.examples.graph_edge_transformer;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Graph Edge Transformer")
@Description("Allows extensions to adjust the data attribute of cytoscape edges.")
public class GraphEdgeTransformerWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/graph_edge_transformer/plugin.js", true);
    }

}
