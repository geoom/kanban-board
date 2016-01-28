var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const merge = require('webpack-merge');

require('es6-promise').polyfill();

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'app');
var BUILD_PATH = path.resolve(__dirname, 'build');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};


const common = {
	entry: PATHS.app,
	// Add resolve.extensions. '' is needed to allow imports
	// without an extension. Note the .'s before extensions!!!
	// The matching will fail without!
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlwebpackPlugin({
			template: 'node_modules/html-webpack-template/index.html',
			title: 'Kanban app',
			appMountId: 'app'
		})
	],
	module: {
	    loaders: [
			{
				// Test expects a RegExp! Note the slashes!
				test: /\.css$/,
				loaders: ['style', 'css'],
				// Include accepts either a path or an array of paths.
				include: PATHS.app
			},
			// Set up jsx. This accepts js too thanks to RegExp
			{
				test: /\.jsx?$/,
				// Enable caching for improved performance during development
				// It uses default OS directory by default. If you need something
				// more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
				loaders: ['babel?cacheDirectory'],
				include: PATHS.app
			}
	    ]
  	},
};



// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
  	devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')

        // You can set this to JSON.stringify('development') for your
        // development target to force NODE_ENV to development mode
        // no matter what
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}

