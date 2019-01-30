package org.visallo.examples.layout_component;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Layout Component")
@Description("Define layout of an element based")
public class LayoutComponentWebAppPlugin implements WebAppPlugin {

    @Override
    @SuppressWarnings("deprecation")
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/layout_component/plugin.js", true);
        app.registerJavaScript("/org/visallo/examples/layout_component/popupBody.js", false);
        app.registerLess("/org/visallo/examples/layout_component/style.less");
        app.registerResourceBundle("/org/visallo/examples/layout_component/messages.properties");
    }

}
