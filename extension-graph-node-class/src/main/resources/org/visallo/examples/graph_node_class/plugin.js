require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.graph.node.class', function(vertex, classes) {
        var name = _.findWhere(vertex.properties, { name: 'http://example.org/test#fullName' })
        var concept = _.findWhere(vertex.properties, { name: 'http://visallo.org#conceptType' })
        if (concept && concept.value === 'http://example.org/test#person' && !name) {
            classes.push('unknownName')
        }
    });

    visallo.registry.registerExtension('org.visallo.graph.style', function(cytoscapeStylesheet) {
         cytoscapeStylesheet.selector('node.unknownName')
             .style({
                 'opacity': '0.75'
             })
    });

});
