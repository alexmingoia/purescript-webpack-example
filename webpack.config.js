'use strict';

var src = ['bower_components/purescript-*/src/**/*.purs', 'src/Example/**/*.purs'];
var ffi = ['bower_components/purescript-*/src/**/*.js', 'src/Example/**/*.js'];

var modulesDirectories = [
  'node_modules',
  'bower_components'
];

var config
  = { entry: './src/entry'
    , debug: true
    , devtool: 'source-map'
    , devServer: { contentBase: '.'
                 , port: 4008
                 , stats: 'errors-only'
                 }
    , output: { path: __dirname
              , pathinfo: true
              , filename: 'bundle.js'
              }
    , module: { loaders: [ { test: /\.purs$/
                           , loader: 'purs-loader'
                           , query: {
                               src: src,
                               ffi: ffi,
                               bundle: false,
                               psc: 'psa',
                               pscArgs: {
                                 sourceMaps: true
                               }
                             }
                           }
                         , { test: /\.js$/
                           , loader: 'source-map-loader'
                           , exclude: /node_modules|bower_components/
                           }
                         ]
              }
    , resolve: { modulesDirectories: modulesDirectories
               , extensions: [ '', '.js', '.purs']
               }
    }
    ;

module.exports = config;
