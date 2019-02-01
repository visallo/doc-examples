package org.visallo.examples.search_advanced;

import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.*;
import org.visallo.web.privilegeFilters.ReadPrivilegeFilter;
import org.visallo.web.routes.element.ElementSearch;
import org.visallo.webster.Handler;

import javax.servlet.ServletContext;

@Name("Search Advanced")
@Description("Add alternate search interfaces")
public class SearchAdvancedWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        AuthenticationHandler authenticatorInstance = new AuthenticationHandler();
        Class<? extends Handler> authenticator = AuthenticationHandler.class;
        Class<? extends Handler> csrfProtector = VisalloCsrfHandler.class;

        PluginRegistration reg = app.registerFor(getClass());
        reg.scripts()
                .execute("plugin")
                .executeInWebWorker("worker-plugin");
        reg.less("style");
        reg.messages("messages");

        //searches are saved by url
        app.get("/org/visallo/examples/search_advanced/flight/search", authenticator, csrfProtector, ReadPrivilegeFilter.class, ElementSearch.class);
        app.post("/org/visallo/examples/search_advanced/flight/search", authenticator, csrfProtector, ReadPrivilegeFilter.class, ElementSearch.class);
        app.get("/org/visallo/examples/search_advanced/react/search", authenticator, csrfProtector, ReadPrivilegeFilter.class, ElementSearch.class);
        app.post("/org/visallo/examples/search_advanced/react/search", authenticator, csrfProtector, ReadPrivilegeFilter.class, ElementSearch.class);
    }

}
