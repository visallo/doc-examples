require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.graph.options', {
        identifier: 'org-visallo-examples-graph-opts',
        optionComponentPath: 'org/visallo/examples/graph_options/React'
    });

});
