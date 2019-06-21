import { registry } from 'public/v1/api'
import { lazy } from 'react'

registry.registerExtension('org.visallo.detail.text', {
    shouldReplaceTextSectionForVertex: function(vertex, name, key) {
        return true;
    },
    component: lazy(() => import('./Example'))
});
