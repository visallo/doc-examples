/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/org/visallo/examples/dashboard_toolbaritem/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        popover: './src/popover.js'
    },
    externals: externals(
        'public/v1/api'
    )
}
