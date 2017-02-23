require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.web.dashboard.reportrenderer', {
        identifier: 'org-visallo-examples-dashboard-reportrenderer',
        label: i18n('org.visallo.examples.dashboard_reportrenderer.label'),
        supportsResponse: function(data) {
            return true;
        },
        componentPath: 'org/visallo/examples/dashboard_reportrenderer/renderer'
    });

});
