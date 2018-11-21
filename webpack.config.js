const path = require("path");

module.exports = {
  entry: "./src/ol/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
