import { registry } from 'public/v1/api'
import AuthFlight from './AuthFlight'

registry.registerExtension('org.visallo.authentication', {
    component: AuthFlight
})
