require(['public/v1/api'], function(visallo) {

    visallo.registry.registerExtension('org.visallo.ingest.cloud', {
        identifier: 'org.visallo.examples.ingest_cloud.UrlIngestCloudResourceSource',
        componentPath: 'org/visallo/examples/ingest_cloud/UrlConfig'
    });

});
