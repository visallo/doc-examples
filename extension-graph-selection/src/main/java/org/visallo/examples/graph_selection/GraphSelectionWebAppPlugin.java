package org.visallo.examples.graph_selection;

import org.visallo.web.PluginRegistration;
import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Graph Selection")
@Description("Add custom graph selection menu items")
public class GraphSelectionWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        PluginRegistration reg = app.registerFor(getClass());
        reg.scripts().execute("plugin");
        reg.messages("messages");
    }

}
