import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.web.dashboard.item', {
    title: 'Concept Type Counts',
    description: 'Show total counts for entity types',
    identifier: 'org-visallo-examples-dashboard-item',
    report: {
        defaultRenderer: 'org-visallo-pie',
        endpoint: '/vertex/search',
        endpointParameters: {
            q: '*',
            size: 0,
            filter: '[]',
            aggregations: [
                {
                    type: 'term',
                    name: 'field',
                    field: 'http://visallo.org#conceptType'
                }
            ].map(JSON.stringify)
        }
    }
});

registry.registerExtension('org.visallo.web.dashboard.item', {
    title: 'React Component',
    description: 'Example React Component',
    identifier: 'org-visallo-examples-dashboard-item-react',
    componentPath: 'org/visallo/examples/dashboard_item/dist/React',
    configurationPath: 'org/visallo/examples/dashboard_item/dist/Config'
});
