import { registry } from 'public/v1/api'
import { lazy } from 'react'

registry.registerExtension('org.visallo.authentication', {
    component: lazy(() => import('./AuthReact'))
})
