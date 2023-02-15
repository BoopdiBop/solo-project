const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js', 

    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, 
            {
                test: /\.s?css/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    },

    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
        },
        proxy: {
            "/" : "http://localhost:3000"
        } 
    },
} 