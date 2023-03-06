const path = require('path');  // CommonJs

module.exports = {
    mode: 'development',
    entry: './public/main.js',
    output: {
       path: path.resolve(__dirname, 'public', 'assets','js'),
       filename: 'bundle.js',
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            teste: /\.css$/,
            use: {
                use: 'raw-loader',
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map',
};