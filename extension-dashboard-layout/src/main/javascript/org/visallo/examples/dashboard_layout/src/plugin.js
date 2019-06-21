import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.web.dashboard.layout', [
    {
        extensionId: 'org-visallo-examples-dashboard-item-react',
        configuration: { metrics: { x: 5, y: 0, width: 4, height: 3 } }
    },
    {
        extensionId: 'org-visallo-web-notifications',
        configuration: { metrics :{ x: 9, y: 0, width: 3, height: 3 } }
    }
]);
