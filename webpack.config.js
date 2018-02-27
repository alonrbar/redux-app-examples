var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: {
        "main": './src/main.ts',
        // "angular/counters": './src/angular/counters/main.ts',
        "react/counters": './src/react/counters/main.tsx',
        // "angular/gladiators": './src/angular/gladiators/main.ts',
        "react/gladiators": './src/react/gladiators/main.tsx',
        // "angular/sequence": './src/angular/sequence/main.ts',
        "react/sequence": './src/react/sequence/main.tsx',
        // "angular/todo": './src/angular/todo/main.ts',
        "react/todo": './src/react/todo/main.tsx',
        // "angular/withId": './src/angular/withId/main.ts',
        "react/withId": './src/react/withId/main.tsx'
    },
    devServer: {
        port: 3000,
        hot: true,
        stats: "minimal"
    },
    devtool: 'source-map',
    output: {
        path: path.resolve('./dist'),
        filename: '[name]/main.js',
        chunkFilename: '[id].js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    module: {
        rules: [
            { test: /(\.ts|\.tsx)$/, use: ['ts-loader', 'angular2-template-loader'] },
            { test: /\.html$/, use: ['html-loader'] },
            { test: /(\.css|\.scss)$/, use: ['style-loader', 'css-loader'] },
            { test: /(.png$|.gif$)/, use: [{ loader: "file-loader", query: { name: "res/[name].[ext]" } }] },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{ loader: "file-loader", query: { name: "res/[name].[ext]" } }] }
        ]
    },
resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
        modules: [path.resolve("./src"), "node_modules"]
},
plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve('./src')
    ),
    htmlPluginForBundle('main'),
    // htmlPluginForBundle('angular/counters'),
    htmlPluginForBundle('react/counters'),
    // htmlPluginForBundle('angular/gladiators'),
    htmlPluginForBundle('react/gladiators'),
    // htmlPluginForBundle('angular/sequence'),
    htmlPluginForBundle('react/sequence'),
    // htmlPluginForBundle('angular/todo'),
    htmlPluginForBundle('react/todo'),
    // htmlPluginForBundle('angular/withId'),
    htmlPluginForBundle('react/withId'),
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