const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    watchContentBase: true,
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader",
      },
    ],
  },
  plugins: [
    new Dotenv({
      ignoreStubs: true,
    }),
  ],
};
