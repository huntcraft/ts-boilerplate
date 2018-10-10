const path = require('path');
const webpack = require('webpack');

const buildPath = path.resolve(__dirname, '../build');
const sourcePath = path.resolve(__dirname, '../src');

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m'
  }
};

module.exports = {
  mode: 'development',
  entry: {
    index: 'index.tsx'
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'js/[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false,
              url: false,
              localIdentName: '[folder]-[name]-[local]-[hash:base64:5]',
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.ts', '.tsx','.js'],
    modules: [path.resolve(__dirname, '../', 'node_modules'), sourcePath],
    alias: {
      // store$: path.resolve(__dirname, '../', 'src/redux/store/index.js'),
      // components$: path.resolve(__dirname, '../', 'src/components/'),
      // common$: path.resolve(__dirname, '../', 'src/common/'),
      // ducks: path.resolve(__dirname, '../', 'src/redux/ducks'),
      // middleware: path.resolve(__dirname, '../', 'src/redux/middleware')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '../', 'build'),
    publicPath: '/',
    port: 8300,
    host: '0.0.0.0',
    hot: true,
    compress: false,
    stats,
    disableHostCheck: true,
    historyApiFallback: true
  }
}