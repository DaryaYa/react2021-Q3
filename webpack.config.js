const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = ({dev}) => ({
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'source-map' : false,
  entry: ["regenerator-runtime/runtime.js", './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin('logo.png'),
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
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: 'babel-loader', // определяем загрузчик
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'], // используемые плагины
        },
      },
    ],
  },
});
