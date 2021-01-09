const path = require("path");
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devUrl = 'http://localhost:8888/' // This must be the same as your site's URL for development.

module.exports = {
  mode: 'development',
  entry: {
    'regular': "./assets/regular/index.js",
    // 'react': "./assets/react/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    publicPath: 'http://localhost:3003/dist/',
  },
  devtool: 'eval',
  resolve: {extensions: [".js", ".jsx"]},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
            ]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          "css-loader",
          "sass-loader",
        ]
      },
    ]
  },
  plugins: [
    new ReactRefreshPlugin({}),
  ],
  devServer: {
    // hot: true,
    port: 3003, // Any available port. Must match port used in PHP to load assets.
    headers: {"Access-Control-Allow-Origin": "*"},
    proxy: {
      "/": {
        target: devUrl, // URL where your wordpress instance runs.
        secure: false,
        changeOrigin: true,
        autoRewrite: true,
      },
    },
    static: [path.resolve(__dirname, "dist")]
  }
}
;
