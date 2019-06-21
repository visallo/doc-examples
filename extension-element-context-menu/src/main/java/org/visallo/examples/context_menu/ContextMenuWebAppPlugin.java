package org.visallo.examples.context_menu;

import org.visallo.web.PluginRegistration;
import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Element Context Menu")
@Description("Add options to element right click menus")
public class ContextMenuWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        PluginRegistration reg = app.registerFor(getClass());
        reg.scripts().execute("plugin");
        reg.messages("messages");
        reg.less("style");
    }

}
