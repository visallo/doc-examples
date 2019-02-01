/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/detail_text/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        Example: './src/Example.jsx'
    },
    externals: externals(
        'public/v1/api',
        'react',
    )
}
