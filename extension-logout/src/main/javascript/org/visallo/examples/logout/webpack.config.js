/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/logout/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js'
    },
    externals: externals(
        'public/v1/api',
        'login'
    )
}