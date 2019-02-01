import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.graph.export', {
    menuItem: i18n('org.visallo.examples.graph_export.label'),
    componentPath: 'org/visallo/examples/graph_export/dist/configuration'
});
