// Karma configuration
// Generated on Thu Jul 21 2016 11:32:03 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'src/test-entry.js',
    ],

    // list of files to exclude
    exclude: [
			'src/docs',
		],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/test-entry.js': ['webpack'],
    },

		webpack: {
			watch: true,
			module: {
				noParse: [
					/node_modules\/sinon\//,
				],
				loaders: [{
					test: /\.js$/,
					loader: 'babel',
					exclude: /(node_modules|src\/docs)/,
					query: {
						presets: ['airbnb'],
					},
				}, {
					test: /\.json$/,
					loader: 'json',
				}, {
					test: /\.jsx?$/,
					loader: 'babel',
					query: {
						cacheDirectory: true,
						presets: [ 'stage-2', 'es2015', 'react' ],
						plugins: ['babel-plugin-rewire'],
					},
					exclude: /(node_modules|src\/docs)/,
				}],
			},
			resolve: {
				extensions: ['', '.js', '.jsx'],
				alias: {
					'sinon': 'sinon/pkg/sinon',
				},
			},
			externals: {
				// enzyme deps incompatible with webpack
				// https://github.com/airbnb/enzyme/issues/47
				'cheerio': 'window',
				'react/addons': true,
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true,
			},
		},

		webpackMiddleware: {
			// stfu webpack
			stats: 'errors-only',
		},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  })
}
