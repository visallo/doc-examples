require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.graph.edge.transformer', function(data) {
        data.numProperties = data.edges.reduce(function(sum, edge) {
            return sum + edge.properties.length;
        }, 0)
    });

    visallo.registry.registerExtension('org.visallo.graph.style', function(cytoscapeStylesheet) {
         cytoscapeStylesheet.selector('edge[numProperties]')
             .style({
                 'line-color': 'mapData(numProperties, 4, 10, blue, red)',
                 'target-arrow-color': 'mapData(numProperties, 4, 10, blue, red)'
             })
    });
});
