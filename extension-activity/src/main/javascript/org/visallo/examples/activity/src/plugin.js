import { registry, connect } from 'public/v1/api'
import { lazy } from 'react'

registry.registerExtension('org.visallo.activity', {
    type: 'org-visallo-examples-activity',
    kind: 'longRunningProcess',
    titleComponent: function(process) {
        return <div>Example Activity</div>;
    },
    finishedComponent: lazy(() => import('./Finished'))
});

window.startActivity = function(propertyA) {
    if (!propertyA) {
        throw new Error('Include a parameter')
    }
    connect().then(function({ dataRequest }) {
        dataRequest('org-visallo-examples-activity', 'start', propertyA)
    });
}

