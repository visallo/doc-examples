require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.graph.node.transformer', function(vertex, data) {
        data.numProperties = vertex.properties.length;
    });

    visallo.registry.registerExtension('org.visallo.graph.style', function(cytoscapeStylesheet) {
        var pixelRatio = 'devicePixelRatio' in window ? window.devicePixelRatio : 1;
        cytoscapeStylesheet.selector('node[numProperties]')
            .style({
                'width': 'mapData(numProperties, 4, 15, ' + 30 * pixelRatio + ', ' + 75 * pixelRatio + ')',
                'height': 'mapData(numProperties, 4, 15, ' + 30 * pixelRatio + ', ' + 75 * pixelRatio + ')'
            })
    });
});
