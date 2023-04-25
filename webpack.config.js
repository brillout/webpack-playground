const { dirname, join } = require('path')

module.exports = {
  entry: {
    someEntry: join(__dirname, 'src', 'index.js'),
  },
  mode: 'development',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].mjs',
    // Breaks code splitting:
    // chunkFormat: 'module'
  },
}
