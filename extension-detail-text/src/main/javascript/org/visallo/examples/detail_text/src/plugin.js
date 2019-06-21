import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.detail.text', {
    shouldReplaceTextSectionForVertex: function(vertex, name, key) {
        return true;
    },
    componentPath: 'org/visallo/examples/detail_text/dist/Example'
});
