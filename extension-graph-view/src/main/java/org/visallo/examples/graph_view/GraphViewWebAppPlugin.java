package org.visallo.examples.graph_view;

import org.visallo.web.PluginRegistration;
import org.visallo.webster.Handler;
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
        PluginRegistration reg = app.registerFor(getClass());
        reg.scripts().execute("plugin");
        reg.less("style");
        reg.messages("messages");
    }

}
