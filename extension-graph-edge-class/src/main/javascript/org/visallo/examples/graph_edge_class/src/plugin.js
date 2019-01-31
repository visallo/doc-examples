import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.graph.edge.class', function(edges, type, classes) {
    var hasComment = _.any(edges, function(edge) {
        var comment = _.findWhere(edge.properties, { name: 'http://visallo.org/comment#entry' })
        return comment && comment.value.indexOf('class') >= 0;
    });

    if (hasComment) {
        classes.push('hasComment')
    }
});

registry.registerExtension('org.visallo.graph.style', function(cytoscapeStylesheet) {
     cytoscapeStylesheet.selector('edge.hasComment')
         .style({
             color: '#ff0000',
             'line-color': '#ff0000',
             'target-arrow-color': '#ff0000',
             width: 5
         })
});

