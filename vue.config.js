const path = require('path')
module.exports = {
  lintOnSave: false,
  'outputDir': '../dist',
  'devServer': {
    'hot': true,
    'port': 7000,
    'open': false,
    'proxy': {
      '/api': {
        'target': process.env.VUE_APP_PROXY_TARGET,
        'changeOrigin': true,
        'pathRewrite': {
          '^/api': ''
        },
        'logLevel': 'debug'
      }
    },
    'inline': true,
    // error display on the console
    'overlay': false,
  },
  configureWebpack: {
    module: {
      rules: [

      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    performance: {
      hints: false
    },
/*    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    },
    output: {
      filename: '[name].[hash].bundle.js'
    }*/
  },
  transpileDependencies: [
  ]
}
