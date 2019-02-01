import { registry } from 'public/v1/api'


registry.registerExtension('org.visallo.ingest.cloud', {
    identifier: 'org.visallo.examples.ingest_cloud.UrlIngestCloudResourceSource',
    componentPath: 'org/visallo/examples/ingest_cloud/dist/UrlConfig'
});
