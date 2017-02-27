package org.visallo.examples.search_advanced;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.AuthenticationHandler;
import org.visallo.web.VisalloCsrfHandler;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;
import org.visallo.web.privilegeFilters.ReadPrivilegeFilter;
import org.visallo.web.routes.element.ElementSearch;

import javax.servlet.ServletContext;

@Name("Search Advanced")
@Description("Add alternate search interfaces")
public class SearchAdvancedWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        AuthenticationHandler authenticatorInstance = new AuthenticationHandler();
        Class<? extends Handler> authenticator = AuthenticationHandler.class;
        Class<? extends Handler> csrfProtector = VisalloCsrfHandler.class;

        app.registerJavaScript("/org/visallo/examples/search_advanced/plugin.js", true);
        app.registerJavaScript("/org/visallo/examples/search_advanced/example.js", false);
        app.registerJavaScriptTemplate("/org/visallo/examples/search_advanced/template.hbs");
        app.registerLess("/org/visallo/examples/search_advanced/style.less");
        app.registerWebWorkerJavaScript("/org/visallo/examples/search_advanced/worker.js");
        app.registerResourceBundle("/org/visallo/examples/search_advanced/messages.properties");

        app.get("/org/visallo/examples/search_advanced/search", authenticator, csrfProtector, ReadPrivilegeFilter.class, ElementSearch.class);
        app.post("/org/visallo/examples/search_advanced/search", authenticator, csrfProtector, ReadPrivilegeFilter.class, ElementSearch.class);
    }

}
