package org.visallo.examples.visibility;

import org.visallo.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Visibility Components")
@Description("Replace visibility components")
public class VisibilityWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/visibility/plugin.js", true);

        app.registerJavaScriptComponent("/org/visallo/examples/visibility/ExampleEditor.jsx");
        app.registerJavaScriptComponent("/org/visallo/examples/visibility/ExampleViewer.jsx");
    }

}
