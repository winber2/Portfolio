const path = require('path');
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: './frontend/index.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
      assets: path.resolve('./app/assets'), // Makes it easier to reference our assets in jsx files
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    }
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        // The important stuff
        test: /\.(jpg|jpeg|png)(\?.*)?$/, // Load only .jpg .jpeg, and .png files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name][md5:hash].[ext]', // Name of bundled asset
            outputPath: '/webpack-assets/', // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
            publicPath: '/assets/' // Endpoint asset can be found at on Rails server
          }
        }
      }
    ]
  },
  devtool: 'source-maps'
};
