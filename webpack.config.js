const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = ({dev}) => ({
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'source-map' : false,
  entry: ["regenerator-runtime/runtime.js", './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin('logo.png'),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: ['file-loader'],
      },
      {
        test: /\.jsx?$/, 
        exclude: /(node_modules)/,
        loader: 'babel-loader', 
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'], 
        },
      },
    ],
  },
});
