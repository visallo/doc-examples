require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.activity', {
        type: 'org-visallo-examples-activity',
        kind: 'longRunningProcess',
        titleRenderer: function(el, process) {
            el.textContent = "Example Activity";
        },
        finishedComponentPath: 'org/visallo/examples/activity/Finished'
    });

    window.startActivity = function(propertyA) {
        if (!propertyA) {
            throw new Error('Include a parameter')
        }
        visallo.connect().then(function(api) {
            api.dataRequest('org-visallo-examples-activity', 'start', propertyA)
        });
    }

});
