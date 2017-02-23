require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.graph.edge.class', function(edges, type, classes) {
        var hasComment = _.any(edges, function(edge) {
            return _.findWhere(edge.properties, { name: 'http://visallo.org/comment#entry' })
        });

        if (hasComment) {
            classes.push('hasComment')
        }
    });

    visallo.registry.registerExtension('org.visallo.graph.style', function(cytoscapeStylesheet) {
         cytoscapeStylesheet.selector('edge.hasComment')
             .style({
                 color: '#ff0000',
                 'line-color': '#ff0000',
                 'target-arrow-color': '#ff0000',
                 width: 5
             })
    });
});
