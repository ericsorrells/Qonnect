//add Node path module
const path = require('path');

// __dirname: node method for exporting
// path: node method for concatenating path names
module.exports = {
  entry: './src/app.js',                   // entry: define entry point
  output: {                                // output: define location of final bundle
    path: path.join(__dirname, 'public'),  // absolute path to where to output
    filename: 'bundle.js'                  //can use any name
  },
  module:{
    rules: [{
      loader: 'babel-loader',        // run babel when we see js files
      test: /\.js$/,                 // run babel against any file ending in js
      exclude: /node_modules/        // exclude all node_modules
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')  // only installs this option
  }
}