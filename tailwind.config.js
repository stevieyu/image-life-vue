const defaultConfig = require('tailwindcss/defaultConfig.js');

module.exports = {
  ...defaultConfig,
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ]
}