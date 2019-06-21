import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.dashboard.toolbar.item', {
    identifier: 'org-visallo-examples-dashboard-toolbar',
    canHandle: function(options) {
        return options.extension.identifier === 'org-visallo-web-notifications'
    },
    tooltip: 'My Example Action',
    icon: '/org/visallo/examples/dashboard_toolbaritem/trash.png',
    action: {
        type: 'popover',
        componentPath: 'org/visallo/examples/dashboard_toolbaritem/dist/popover'
    }
});

