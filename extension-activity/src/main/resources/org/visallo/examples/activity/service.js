define('data/web-worker/services/org-visallo-examples-activity', ['public/v1/workerApi'], function(workerApi) {
    return {
        start: function(propertyA) {
            return workerApi.ajax('POST', '/org/visallo/examples/activity/start', {
                propertyA: propertyA
            });
        }
    }
})