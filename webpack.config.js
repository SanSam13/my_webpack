const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    entry: {
      './src/js/index.js': [
        "jquery",
        path.resolve(__dirname, './src/js/plugins/modernizr.js'),
        path.resolve(__dirname, './src/js/site/globals.js'),
        path.resolve(__dirname, './src/js/pages/page1.js'),
        path.resolve(__dirname, './src/js/index.js')
      ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/html/index.pug'
      })
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
          },
          { 
            test: /\.pug$/,
            use: ['pug-loader']
          },
          {
            test: /\.(jpg|png|gif|svg)$/i, 
            use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]',
                      outputPath: 'images/',
                      useRelativePath: true
                  }
              }
            ]
          }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    }

};