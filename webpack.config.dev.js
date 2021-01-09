const path = require("path");
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const devUrl = 'http://localhost:8000/' // This must be the same as your site's URL for development.
const proxyPort = 3003; // Any available port will do. Must match port used in PHP to load assets.

module.exports = {
  mode: 'development',
  entry: {
    'main': "./assets/main/index.js",
    'vanilla-example': "./assets/vanilla-example/index.js",
    'react-example': "./assets/react-example/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    publicPath: 'http://localhost:3003/dist/',
  },
  resolve: {extensions: [".js", ".jsx"]},
  devtool: 'eval',
  optimization: {
    runtimeChunk: "single"
  },
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
    new ReactRefreshPlugin(),
  ],
  devServer: {
    port: proxyPort,
    headers: {"Access-Control-Allow-Origin": "*"},
    static: [path.resolve(__dirname, "dist")],
    proxy: {
      "/": {
        target: devUrl,
        secure: false,
        changeOrigin: true,
        autoRewrite: true,
        headers: {
          Connection: 'keep-alive'
        }
      }
    }
  }
};
