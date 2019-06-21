import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.product.toolbar.item', {
    identifier: 'org-visallo-examples-graph-opts',
    canHandle: product => product.kind === 'org.visallo.web.product.graph.GraphWorkProduct',
    itemComponentPath: 'org/visallo/examples/graph_options/dist/React'
});
