package org.visallo.examples.activity;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.VisalloCsrfHandler;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;
import org.visallo.web.privilegeFilters.ReadPrivilegeFilter;

import javax.servlet.ServletContext;

@Name("Activity")
@Description("Custom activity rows based on events or long running processes")
public class ActivityWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        Class<? extends Handler> authenticator = authenticationHandler.getClass();
        Class<? extends Handler> csrfProtector = VisalloCsrfHandler.class;

        app.registerJavaScript("/org/visallo/examples/activity/plugin.js", true);
        app.registerWebWorkerJavaScript("/org/visallo/examples/activity/service.js");

        app.registerJavaScriptComponent("/org/visallo/examples/activity/Finished.jsx");

        app.registerResourceBundle("/org/visallo/examples/activity/messages.properties");

        app.post("/org/visallo/examples/activity/start", authenticator, csrfProtector, ReadPrivilegeFilter.class, StartExample.class);
    }

}
