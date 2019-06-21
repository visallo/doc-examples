package org.visallo.examples.authentication;

import com.google.inject.Inject;
import org.visallo.web.PluginRegistration;
import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.AuthenticationHandler;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Example Visallo Authentication Plugin")
@Description("Registers an authentication plugin which demonstrates user/password login.")
public class ExampleAuthenticationPlugin implements WebAppPlugin {
    private final Login login;

    @Inject
    public ExampleAuthenticationPlugin(Login login) {
        this.login = login;
    }

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {

        PluginRegistration reg = app.registerFor(getClass());

        reg.scripts()
                .executeBeforeAuthentication("plugin");

        reg.css("login");
        reg.messages("messages");

        app.post(AuthenticationHandler.LOGIN_PATH, login);
    }
}