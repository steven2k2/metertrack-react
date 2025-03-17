const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  mode: process.env.NODE_ENV || "development",
  devServer: {
    static: "./dist",
    hot: true,
    historyApiFallback: true,
    open: true, // Automatically open the browser
    port: 3010  // Use a standard port instead of a random one
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public/favicon.png", to: "favicon.png" }],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Fix path
      inject: "body"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};