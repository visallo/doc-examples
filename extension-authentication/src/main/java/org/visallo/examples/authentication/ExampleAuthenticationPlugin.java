package org.visallo.examples.authentication;

import com.google.inject.Inject;
import com.v5analytics.webster.Handler;
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
        app.registerBeforeAuthenticationJavaScript("/org/visallo/examples/authentication/plugin.js");
        app.registerJavaScript("/org/visallo/examples/authentication/authentication.js", false);
        app.registerJavaScriptTemplate("/org/visallo/examples/authentication/login.hbs");
        app.registerCss("/org/visallo/examples/authentication/login.css");
        app.registerResourceBundle("/org/visallo/examples/authentication/messages.properties");

        app.post(AuthenticationHandler.LOGIN_PATH, login);
    }
}