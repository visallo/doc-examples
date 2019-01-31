/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/org/visallo/examples/dashboard_item/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        React: './src/React.jsx',
        Config: './src/Config.jsx'
    },
    externals: externals(
        'public/v1/api',
        'react'
    )
}
