package org.visallo.examples.menubar;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Menubar")
@Description("Add items to menubar")
public class MenubarWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/menubar/plugin.js", true);
        app.registerJavaScriptComponent("/org/visallo/examples/menubar/Pane.jsx");
        app.registerJavaScriptTemplate("/org/visallo/examples/menubar/welcome.hbs");
        app.registerResourceBundle("/org/visallo/examples/menubar/messages.properties");
    }

}
