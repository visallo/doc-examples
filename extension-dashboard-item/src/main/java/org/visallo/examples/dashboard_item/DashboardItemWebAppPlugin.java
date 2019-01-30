package org.visallo.examples.dashboard_item;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Dashboard Item")
@Description("Allow custom content to be rendered in a card on dashboards")
public class DashboardItemWebAppPlugin implements WebAppPlugin {

    @Override
    @SuppressWarnings("deprecation")
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/dashboard_item/plugin.js", true);

        app.registerJavaScriptComponent("/org/visallo/examples/dashboard_item/React.jsx");
        app.registerJavaScriptComponent("/org/visallo/examples/dashboard_item/Config.jsx");

        app.registerResourceBundle("/org/visallo/examples/dashboard_item/messages.properties");
    }

}
