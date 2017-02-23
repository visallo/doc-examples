package org.visallo.examples.dashboard_toolbaritem;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Dashboard Toolbar Item")
@Description("Define toolbar items for dashboard cards")
public class DashboardToolbaritemWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/dashboard_toolbaritem/plugin.js", true);
        app.registerJavaScript("/org/visallo/examples/dashboard_toolbaritem/popover.js", false);
        app.registerResourceBundle("/org/visallo/examples/dashboard_toolbaritem/messages.properties");
        app.registerFile("/org/visallo/examples/dashboard_toolbaritem/trash.png", "image/png");
    }

}
