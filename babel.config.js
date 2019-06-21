/* eslint-env node */
module.exports = {
    presets: [
        '@babel/preset-react',
        ['@babel/preset-env', { modules: false }]
    ],
    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        ['react-css-modules', {
            'generateScopedName': '[name]_[local]_[hash:base64:5]',
            'filetypes': {
                '.less': {
                    'syntax': 'postcss-less'
                }
            }
        }]
    ]
};
