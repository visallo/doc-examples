require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.graph.view', {
        componentPath: 'org/visallo/examples/graph_view/View',
        className: 'org-visallo-examples-graph-view'
    });

});
