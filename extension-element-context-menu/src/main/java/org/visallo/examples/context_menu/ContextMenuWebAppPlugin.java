package org.visallo.examples.context_menu;

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
    @SuppressWarnings("deprecation")
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/context_menu/plugin.js", true);
        app.registerResourceBundle("/org/visallo/examples/context_menu/messages.properties");
        app.registerLess("/org/visallo/examples/context_menu/style.less");
    }

}
