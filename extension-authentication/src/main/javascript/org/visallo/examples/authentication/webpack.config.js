/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/authentication/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        Auth: './src/Auth.js'
    },
    externals: externals(
        'public/v1/api',
        'classnames',
        'handlebars'
    )
}
