import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.product.toolbar.item', {
    identifier: 'org-visallo-examples-map_options-countryborders',
    canHandle: product => product.kind === 'org.visallo.web.product.map.MapWorkProduct',
    itemComponentPath: 'org/visallo/examples/map_options/dist/CountryBorders'
});

