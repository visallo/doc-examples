import { registry, connect } from 'public/v1/api'

registry.registerExtension('org.visallo.activity', {
    type: 'org-visallo-examples-activity',
    kind: 'longRunningProcess',
    titleComponent: function(process) {
        return <div>Example Activity</div>;
    },
    finishedComponentPath: 'org/visallo/examples/activity/dist/Finished'
});

window.startActivity = function(propertyA) {
    if (!propertyA) {
        throw new Error('Include a parameter')
    }
    connect().then(function({ dataRequest }) {
        dataRequest('org-visallo-examples-activity', 'start', propertyA)
    });
}

