package org.visallo.examples.graph_options;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Graph Options")
@Description("Add components to graph options dropdown")
public class GraphOptionsWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/graph_options/plugin.js", true);
        app.registerJavaScriptComponent("/org/visallo/examples/graph_options/React.jsx");
        app.registerResourceBundle("/org/visallo/examples/graph_options/messages.properties");
    }

}
