package org.visallo.examples.graph_view;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Graph View")
@Description("Add components to graph container")
public class GraphViewWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/graph_view/plugin.js", true);
        app.registerJavaScriptComponent("/org/visallo/examples/graph_view/View.jsx");
        app.registerLess("/org/visallo/examples/graph_view/style.less");
        app.registerResourceBundle("/org/visallo/examples/graph_view/messages.properties");
    }

}
