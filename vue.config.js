const path = require('path')
module.exports = {
  lintOnSave: false,
  'outputDir': '../dist',
  devServer: {
    host: 'localhost',
    hot: true,
    disableHostCheck: true,
    https: false
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
