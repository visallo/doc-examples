require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.entity.listItemRenderer', {
        canHandle: function(element, usageContext) {
            return true;
        },
        componentPath: 'org/visallo/examples/entity_listitemrenderer/component'
    });

});
