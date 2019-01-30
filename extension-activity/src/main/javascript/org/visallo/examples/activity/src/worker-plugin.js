import { registry, ajax } from 'public/v1/workerApi'

registry.registerExtension('org.visallo.service', {
    name: 'org-visallo-examples-activity',
    services: {
        start: function(propertyA) {
            return ajax('POST', '/org/visallo/examples/activity/start', {
                propertyA
            });
        }
    }
})