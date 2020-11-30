const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => ({
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                ssr: false,
                ...argv.mode === 'development'
                  ? {
                    displayName: true,
                    minify: false,
                    transpileTemplateLiterals: false,
                  }
                  : { pure: true },
              },
            ],
          ],
          ...argv.mode === 'development' && {
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  ssr: false,
                  displayName: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.API_URL': process.env.API_URL,
    }),
    // new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
});
