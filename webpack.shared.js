const path = require('path');
const Template = require('webpack/lib/Template');

const shared = ({ publicPath, dir, target = 'web' }) => ({
    mode: 'development',
    target,
    output: {
        path: path.resolve(dir, 'dist'),
        publicPath,
        devtoolNamespace: Template.toIdentifier(publicPath + target),
        jsonpFunction: Template.toIdentifier(publicPath + target + '-jsonp'),
        hotUpdateFunction: Template.toIdentifier(publicPath + target + '-webpackHotUpdate'),
        chunkCallbackName: Template.toIdentifier(publicPath + target + '-webpackChunk'),
        filename: '[name].js',
        libraryTarget: 'amd',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                include: [path.resolve(dir, 'src')],
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                include: [path.resolve(dir, 'src')],
                loader: 'babel-loader'
            },
            {
                test: /\.hbs$/,
                include: [path.resolve(dir, 'src')],
                use: [
                    {
                        loader: 'handlebars-loader',
                        options: {
                            ignoreHelpers: true,
                            ignorePartials: true,
                            inlineRequires: true,
                            runtime: 'handlebars'
                        }
                    }
                ]
            }
        ]
    }
});
const externals = (...list) => list.reduce((map, entry) => {
    map[entry] = { amd: entry };
    return map;
}, {});

module.exports = {
    shared,
    externals
}