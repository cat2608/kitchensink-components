const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    extractCSS,
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        options: {
          presets: ['react'],
        },
      },
      {
        test: /\.less$/,
        use: extractCSS.extract({
          use: [{
              loader: 'css-loader?importLoader=1&modules&localIdentName=[local]_[hash:base64:10]'
          }, {
              loader: 'less-loader'
          }]
        }),
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(ttf|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(woff2?)$/,
        use: 'url-loader?limit=10000&name=fonts/[name].[ext]',
      },
    ],
  },
};
