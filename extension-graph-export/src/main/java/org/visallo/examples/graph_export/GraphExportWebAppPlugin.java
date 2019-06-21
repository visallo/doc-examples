package org.visallo.examples.graph_export;

import org.visallo.web.PluginRegistration;
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
        PluginRegistration reg = app.registerFor(getClass());
        reg.scripts().execute("plugin");
        reg.messages("messages");
        reg.less("style");
    }

}
