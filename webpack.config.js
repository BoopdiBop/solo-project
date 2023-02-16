const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.join(__dirname, './client/index.js'), 

    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
 
    plugins: [
        new MiniCssExtractPlugin(),
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
                    process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        static: {
            publicPath: './build',
            directory: path.resolve(__dirname, './build')
        },
        proxy: {
            "/" : "http://localhost:3000"
        },
    },
} 