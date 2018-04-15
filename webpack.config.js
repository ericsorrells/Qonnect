//add Node path module
const path = require('path');

// node method for exporting
// entry: define entry poinVt
// output: define location of final bundle
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),  // absolute path to where to output
    filename: 'bundle.js'                  //can use any name
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,                      // $ = all files
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // can provide any option in at https://webpack.js.org/configuration/dev-server/
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}