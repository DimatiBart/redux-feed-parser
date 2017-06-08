const path = require('path');

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        { test: /\.jsx?$/, use: 'babel-loader'},
        { test: /\.css$/, use: [ 'style-loader', 'css-loader'] },
        { test: /\.less$/, exclude: /node_modules/, use: [ 'style-loader', 'css-loader', 'less-loader' ]}
    ]
  },
  watch: true
};

module.exports = config;