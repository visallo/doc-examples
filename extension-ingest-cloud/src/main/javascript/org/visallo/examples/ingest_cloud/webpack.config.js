/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/ingest_cloud/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        UrlConfig: './src/UrlConfig.jsx'
    },
    externals: externals(
        'public/v1/api',
        'react'
    )
}