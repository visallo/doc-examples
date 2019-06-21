package org.visallo.examples.visibility;

import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.PluginRegistration;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;
import org.visallo.webster.Handler;

import javax.servlet.ServletContext;

@Name("Visibility Components")
@Description("Replace visibility components")
public class VisibilityWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        PluginRegistration reg = app.registerFor(getClass());
        reg.scripts().execute("plugin");
    }

}
