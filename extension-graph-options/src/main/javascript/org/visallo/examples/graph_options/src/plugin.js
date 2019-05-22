import { registry } from 'public/v1/api'
import { lazy } from 'react'

registry.registerExtension('org.visallo.product.toolbar.item', {
    identifier: 'org-visallo-examples-graph-opts',
    canHandle: product => product.kind === 'org.visallo.web.product.graph.GraphWorkProduct',
    component: lazy(() => import('./React'))
});
