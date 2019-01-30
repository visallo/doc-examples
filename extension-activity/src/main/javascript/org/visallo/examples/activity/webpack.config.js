/* eslint-env node */

const path = require('path');
const shared = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/org/visallo/examples/activity/dist/',
        filename: '[name].js',
        libraryTarget: 'amd',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, 'src')
            ],
            loader: 'babel-loader'
        }]
    }
};
const externals = (...list) => list.reduce((map, entry) => {
    map[entry] = { amd: entry };
    return map;
}, {});

const config = [
    {
        ...shared,
        target: 'webworker',
        entry: {
            'worker-plugin': './src/worker-plugin.js',
        },
        externals: externals(
            'public/v1/workerApi'
        )
    },

    {
        ...shared,
        target: 'web',
        entry: {
            plugin: './src/plugin.js',
            Finished: './src/Finished.jsx'
        },
        externals: externals(
            'public/v1/api',
            'react',
            'util/vertex/formatters',
            'util/requirejs/promise!util/service/ontologyPromise',
            'util/requirejs/promise!util/service/propertiesPromise',
            'util/messages'
        )
    }
];

module.exports = config
