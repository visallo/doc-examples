package org.visallo.examples.detail_toolbar;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Detail Toolbar Example")
@Description("Registers a detail toolbar plugin that launches a Google search for the displayed person name.")
public class DetailToolbarWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/detail_toolbar/plugin.js", true);
        app.registerResourceBundle("/org/visallo/examples/detail_toolbar/messages.properties");
    }

}
