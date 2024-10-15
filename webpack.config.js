const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'spa-config': './src/spa-config.js',
    'app1': './src/app1/spa-index.js',
    'app2': './src/app2/spa-index.js',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'system',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // Adjust if needed
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Uncomment if using CSS
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map', // Helpful for debugging
  devServer: {
    port: 9000,
    historyApiFallback: {
      rewrites: [
        // Ensure spa-config.js is served correctly
        { from: /^\/spa-config\.js$/, to: '/spa-config.js' },
        { from: /^\/app1\.js$/, to: '/app1.js' },
        { from: /^\/app2\.js$/, to: '/app2.js' },
        { from: /./, to: '/index.html' },
      ],
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  externals: ['react', 'react-dom', 'single-spa'],
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['spa-config'],
    }),
  ],
};
