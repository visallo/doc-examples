package org.visallo.examples.admin;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Admin")
@Description("Add admin tools to admin pane")
public class AdminWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/admin/plugin.js");

        app.registerJavaScriptComponent("/org/visallo/examples/admin/React.jsx");
        app.registerJavaScript("/org/visallo/examples/admin/flight.js", false);
        app.registerJavaScriptTemplate("/org/visallo/examples/admin/flight-template.hbs");

        app.registerResourceBundle("/org/visallo/examples/admin/messages.properties");
    }

}
