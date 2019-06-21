import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.graph.view', {
    componentPath: 'org/visallo/examples/graph_view/dist/View',
    className: 'org-visallo-examples-graph-view'
});
