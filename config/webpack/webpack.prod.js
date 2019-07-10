const merge = require('webpack-merge')
const { GenerateSW } = require('workbox-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  bail: true,
  mode: 'production',
  output: {
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    filename: 'static/js/[name].[chunkhash:8].js'
  },
  plugins: [
    new GenerateSW({
      // start controlling any existing clients as soon as it activates
      clientsClaim: true,
      // skip over the waiting lifecycle stage
      skipWaiting: true,
      swDest: 'service-worker.js'
    })
  ]
})
