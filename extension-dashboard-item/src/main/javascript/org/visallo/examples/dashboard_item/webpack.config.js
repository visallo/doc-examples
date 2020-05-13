/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/dashboard_item/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js'
    },
    externals: externals(
        'public/v1/api',
        'react'
    )
}
