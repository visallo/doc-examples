import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.graph.node.transformer', function(vertex, data) {
    data.numProperties = vertex.properties.length;
});

registry.registerExtension('org.visallo.graph.style', function(cytoscapeStylesheet) {
    var pixelRatio = 'devicePixelRatio' in window ? window.devicePixelRatio : 1;
    cytoscapeStylesheet.selector('node[numProperties]')
        .style({
            'width': 'mapData(numProperties, 4, 15, ' + 30 * pixelRatio + ', ' + 75 * pixelRatio + ')',
            'height': 'mapData(numProperties, 4, 15, ' + 30 * pixelRatio + ', ' + 75 * pixelRatio + ')'
        })
});
