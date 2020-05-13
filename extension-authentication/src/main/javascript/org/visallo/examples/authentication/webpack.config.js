/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

// Can only have one auth provider at a time
const useReactAuth = true;

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/authentication/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: useReactAuth ?
            './src/plugin-react.js' :
            './src/plugin-flight.js'
    },
    externals: externals(
        'public/v1/api',
        'classnames',
        useReactAuth ? 'react' : 'handlebars'
    )
}
