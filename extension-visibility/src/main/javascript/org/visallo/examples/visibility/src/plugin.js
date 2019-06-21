import { registry } from 'public/v1/api'

registry.registerExtension('org.visallo.visibility', {
    editorComponentPath: 'org/visallo/examples/visibility/dist/ExampleEditor',
    viewerComponentPath: 'org/visallo/examples/visibility/dist/ExampleViewer'
});

