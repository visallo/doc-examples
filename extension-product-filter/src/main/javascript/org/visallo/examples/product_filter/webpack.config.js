/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/product_filter/dist/',
       dir: __dirname
    }),
    target: 'webworker',
    entry: {
        plugin: './src/plugin.js'
    },
    externals: externals(
        'public/v1/workerApi'
    )
}