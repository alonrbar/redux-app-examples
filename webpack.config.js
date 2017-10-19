var path = require('path');
var webpack = require('webpack');
var { AureliaPlugin } = require('aurelia-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: { 
        main: ['./src/examples/main.ts', 'webpack/hot/only-dev-server', 'webpack-dev-server/client?http://0.0.0.0:80'],
        counters: ['./src/examples/counters/main.ts', 'webpack/hot/only-dev-server', 'webpack-dev-server/client?http://0.0.0.0:80'],
        //withId: './src/examples/withId/main.ts'
    },
    devServer: {
        port: 80,
        hot: true,
        // stats: "minimal"
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve('./dist'),
        filename: '[name]/main.js',
        chunkFilename: '[id].js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    module: {
        rules: [
            { test: /.ts$/, use: ['ts-loader', 'ts-nameof-loader'] },
            { test: /\.html$/, use: ['html-loader'] }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve("./src"), "node_modules"]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new AureliaPlugin({ aureliaApp: undefined }),
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: 'src/examples/index.html',
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: 'main/index.html',
            template: 'src/examples/index.html',
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            chunks: ['counters'],
            filename: 'counters/index.html',
            template: 'src/examples/counters/index.html',
            inject: true,
            minify: false
        }),
        // new HtmlWebpackPlugin({
        //     chunks: ['withId'],
        //     filename: 'index.html',
        //     template: 'src/examples/withId/index.html',
        //     inject: true,
        //     minify: false
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new ProgressBarPlugin({
            clear: true
        })
    ],
    // stats: "minimal"
};