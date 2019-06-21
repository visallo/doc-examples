package org.visallo.examples.product_filter;

import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.PluginRegistration;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;
import org.visallo.webster.Handler;

import javax.servlet.ServletContext;

@Name("Product Filter")
@Description("Filter entities and edges in a product")
public class ProductFilterWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        PluginRegistration reg = app.registerFor(getClass());
        reg.scripts().executeInWebWorker("plugin");
    }

}
