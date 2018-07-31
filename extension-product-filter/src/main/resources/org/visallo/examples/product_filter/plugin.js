require(['public/v1/workerApi'], function(api) {
    api.registry.registerExtension('org.visallo.product.filter', {
        canHandle: product => true,

        filterVertexInfo: function(vertexInfo) {
            return true;
        },

        filterEdgeInfo: function(edgeInfo) {
            return edgeInfo.label.indexOf('test') >= 0;
        }
        /*,

        filterVertex: function(vertex) {
            return true;
        },

        filterEdge: function(edge) {
            return true;
        }
        */
    });
});
