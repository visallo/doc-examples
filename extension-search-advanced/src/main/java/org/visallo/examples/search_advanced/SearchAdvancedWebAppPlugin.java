package org.visallo.examples.search_advanced;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Search Advanced")
@Description("Add alternate search interfaces")
public class SearchAdvancedWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/search_advanced/plugin.js", true);
        app.registerJavaScript("/org/visallo/examples/search_advanced/example.js", false);
        app.registerJavaScriptTemplate("/org/visallo/examples/search_advanced/template.hbs");
        app.registerLess("/org/visallo/examples/search_advanced/style.less");
        app.registerWebWorkerJavaScript("/org/visallo/examples/search_advanced/worker.js");
        app.registerResourceBundle("/org/visallo/examples/search_advanced/messages.properties");
    }

}
