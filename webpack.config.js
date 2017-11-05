var path = require('path');
var webpack = require('webpack');
var { AureliaPlugin } = require('aurelia-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: { 
        "main": './src/main.ts',
        "angular/counters": './src/angular/counters/main.ts',
        "aurelia/counters": './src/aurelia/counters/main.ts',
        "angular/sequence": './src/angular/sequence/main.ts',
        "aurelia/sequence": './src/aurelia/sequence/main.ts',        
        "angular/withId": './src/angular/withId/main.ts',
        "aurelia/withId": './src/aurelia/withId/main.ts',
        "angular/todo": './src/angular/todo/main.ts',
        "aurelia/todo": './src/aurelia/todo/main.ts'
    },
    devServer: {
        port: 3000,
        hot: true,
        stats: "minimal"
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
            { test: /.ts$/, use: ['ts-loader', 'angular2-template-loader'] },
            { test: /\.html$/, use: ['html-loader'] },
            { test: /(.png$|.gif$)/, use: [{ loader: "file-loader", query: { name: "res/[name].[ext]" } }] },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{ loader: "file-loader", query: { name: "res/[name].[ext]" } }] }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve("./src"), "node_modules"]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.HotModuleReplacementPlugin(),
        new AureliaPlugin({ aureliaApp: undefined, features: { polyfills: "none" } }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve('./src')
        ),
        htmlPluginForBundle('main'),
        htmlPluginForBundle('angular/counters'),
        htmlPluginForBundle('aurelia/counters'),
        htmlPluginForBundle('angular/sequence'),
        htmlPluginForBundle('aurelia/sequence'),
        htmlPluginForBundle('angular/withId'),
        htmlPluginForBundle('aurelia/withId'),
        htmlPluginForBundle('angular/todo'),
        htmlPluginForBundle('aurelia/todo'),
        new ProgressBarPlugin({
            clear: true
        })
    ]
};

function htmlPluginForBundle(name) {
    const dir = (name === 'main' ? '' : name + '/');
    return new HtmlWebpackPlugin({
        chunks: [name],
        filename: dir + 'index.html',
        template: 'src/' + dir + 'index.html',
        inject: true,
        minify: false
    });
}