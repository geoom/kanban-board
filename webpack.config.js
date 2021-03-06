var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const merge = require('webpack-merge');

// Load *package.json* so we can use `dependencies` from there
const pkg = require('./package.json');

const Clean = require('clean-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

var stylelint = require('stylelint');



require('es6-promise').polyfill();

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'app');
var BUILD_PATH = path.resolve(__dirname, 'build');
var TEST_PATH = path.resolve(__dirname, 'test');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  test: TEST_PATH
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
		filename: '[name].js'
	},
	plugins: [
		new HtmlwebpackPlugin({
			template: 'node_modules/html-webpack-template/index.html',
			title: 'Kanban app',
			appMountId: 'app',
			inject: false
		})
	],
	module: {
	    loaders: [
        			// Set up jsx. This accepts js too thanks to RegExp
        			{
        				test: /\.jsx?$/,
        				// Enable caching for improved performance during development
        				// It uses default OS directory by default. If you need something
        				// more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        				loaders: ['babel?cacheDirectory'],
        				include: PATHS.app
        			},
              {
                test: /\.css$/,
                loaders: ['postcss'],
                include: PATHS.app
              }
	    ]
  },
  postcss: function () {
    return [stylelint({
      rules: {
        'color-hex-case': 'lower'
      }
    })];
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
    module: {
      loaders: [
        // Define development specific CSS setup
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build' || TARGET === 'stats') {
  module.exports = merge(common, {
  	// Define entry points needed for splitting
    entry: {
      app: PATHS.app,
      vendor: Object.keys(pkg.dependencies).filter(function(v) {
        // Exclude alt-utils as it won't work with this setup
        // due to the way the package has been designed
        // (no package.json main).
        return v !== 'alt-utils';
      })
    },
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        // Define development specific CSS setup
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: PATHS.app
        }
      ]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('styles.[chunkhash].css'),
      new Clean([PATHS.build]),
      // Extract vendor and manifest files
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
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

if(TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, {
    entry: {}, // karma will set this
    output: {}, // karma will set this
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        'app': PATHS.app
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['isparta-instrumenter'],
          include: PATHS.app
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: PATHS.test
        }
      ]
    }
  });
}
