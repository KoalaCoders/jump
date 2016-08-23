'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: __dirname + '/src',
    entry: './',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    devtool: 'eval-source-map',

    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015',
      }, {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract("css!autoprefixer-loader!sass")
      }, {
          test: /\.html$/,
          loader: 'raw!html-minify'
      },{
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]'
      }]
    },

    resolve: {
      extentions: ['', '.js', '.json']
    },

    plagins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin("style.css", {allChunks: true})
    ],

    watch: true,

    devServer: {
      contentBase: './src',
      hot: true
    }
};
