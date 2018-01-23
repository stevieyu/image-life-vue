module.exports = {
  entry: 'src/index.js',
  filename: {
    js: '[name].js?hash=[hash]',
    css: '[name].css?hash=[chunkhash]',
    chunk: '[id].js?hash=[chunkhash]',
  },
  extractCSS: false,
  webpack(config) {
    return config;
  },
};
