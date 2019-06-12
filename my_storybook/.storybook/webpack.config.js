const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // Make whatever fine-grained changes you need

  config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: [/bower_components/, /node_modules/, /styles/],
      loader: 'babel-loader',
      include: path.resolve(__dirname, '../my_components'),
      query: {
    presets: ['@babel/preset-react']
  }
});


  // Return the altered config
  return config;
};
