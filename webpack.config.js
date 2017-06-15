/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
var webpack = require('webpack');

module.exports = {
  output: {
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel-loader', exclude: [/src\/lib/, /node_modules/, /\.spec\.js/] },
      {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
    loader: 'file-loader'
  }
    ]
  },

  plugins:[
    new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
    // uglfy / minify js
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            compress: {
                drop_console: true
            },
            mangle: false
        })
],

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
