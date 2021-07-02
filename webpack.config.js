const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const resDir = path.resolve(__dirname, "smoke", "res");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "node_modules/react/umd/react.development.js", to: resDir },
        { from: "node_modules/react-dom/umd/react-dom.development.js", to: resDir },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ],
  },
  output: {
    path: resDir,
  },
};
