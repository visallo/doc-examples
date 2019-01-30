package org.visallo.examples.logout;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Logout")
@Description("Register a handler that is notified of logout.")
public class LogoutWebAppPlugin implements WebAppPlugin {

    @Override
    @SuppressWarnings("deprecation")
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/logout/plugin.js", true);
        app.registerResourceBundle("/org/visallo/examples/logout/messages.properties");
    }

}
