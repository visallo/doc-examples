package org.visallo.examples.map_options;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Map Options")
@Description("Add components to map options dropdown")
public class MapOptionsWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/map_options/plugin.js", true);
        app.registerJavaScriptComponent("/org/visallo/examples/map_options/CountryBorders.jsx");
        app.registerFile("/org/visallo/examples/map_options/countries.geojson", "application/vnd.geo+json");
        app.registerResourceBundle("/org/visallo/examples/map_options/messages.properties");
    }

}
