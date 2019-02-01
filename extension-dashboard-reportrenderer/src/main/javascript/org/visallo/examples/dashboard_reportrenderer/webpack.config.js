/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/org/visallo/examples/dashboard_reportrenderer/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        renderer: './src/renderer.js'
    },
    externals: externals(
        'public/v1/api',
        'dashboard/reportRenderers/withRenderer'
    )
}