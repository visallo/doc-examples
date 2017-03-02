package org.visallo.examples.entity_listitemrenderer;

import com.v5analytics.webster.Handler;
import org.visallo.core.model.Description;
import org.visallo.core.model.Name;
import org.visallo.web.WebApp;
import org.visallo.web.WebAppPlugin;

import javax.servlet.ServletContext;

@Name("Entity List Item Renderer")
@Description("Implement custom implementations for rendering items into element lists")
public class EntityListItemRendererWebAppPlugin implements WebAppPlugin {

    @Override
    public void init(WebApp app, ServletContext servletContext, Handler authenticationHandler) {
        app.registerJavaScript("/org/visallo/examples/entity_listitemrenderer/plugin.js", true);
        app.registerJavaScript("/org/visallo/examples/entity_listitemrenderer/component.js", false);
        app.registerJavaScriptTemplate("/org/visallo/examples/entity_listitemrenderer/template.hbs");
        app.registerResourceBundle("/org/visallo/examples/entity_listitemrenderer/messages.properties");
        app.registerLess("/org/visallo/examples/entity_listitemrenderer/style.less");
    }

}
