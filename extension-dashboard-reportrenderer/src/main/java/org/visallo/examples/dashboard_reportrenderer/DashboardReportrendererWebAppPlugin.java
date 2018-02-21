package org.visallo.examples.dashboard_reportrenderer;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Dashboard Report Renderer")
@Description("Define custom report renderers for dashboard")
public class DashboardReportrendererWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/dashboard_reportrenderer/plugin.js", true);
        app.registerJavaScript("/org/visallo/examples/dashboard_reportrenderer/renderer.js", false);
        app.registerResourceBundle("/org/visallo/examples/dashboard_reportrenderer/messages.properties");
    }

}
