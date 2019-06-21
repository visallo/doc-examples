import { registry } from 'public/v1/api'
import { lazy } from 'react'

registry.registerExtension('org.visallo.graph.export', {
    menuItem: i18n('org.visallo.examples.graph_export.label'),
    component: lazy(() => import('./Export'))
});
