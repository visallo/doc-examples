package org.visallo.examples.activity;

import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.PluginRegistration;
import org.visallo.web.VisalloCsrfHandler;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;
import org.visallo.web.privilegeFilters.ReadPrivilegeFilter;
import org.visallo.webster.Handler;

import javax.servlet.ServletContext;

@Name("Activity")
@Description("Custom activity rows based on events or long running processes")
public class ActivityWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        Class<? extends Handler> authenticator = authenticationHandler.getClass();
        Class<? extends Handler> csrfProtector = VisalloCsrfHandler.class;

        PluginRegistration reg = app.registerFor(getClass());
        reg.scripts()
                .execute("plugin")
                .executeInWebWorker("worker-plugin");
        reg.messages("messages.properties");

        app.post("/org/visallo/examples/activity/start", authenticator, csrfProtector, ReadPrivilegeFilter.class, StartExample.class);
    }

}
