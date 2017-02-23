require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.graph.export', {
        menuItem: i18n('org.visallo.examples.graph_export.label'),
        componentPath: 'org/visallo/examples/graph_export/configuration'
    });

});
