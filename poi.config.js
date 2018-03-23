module.exports = {
  entry: 'src/index.js',
  filename: {
    js: 'js/[name].js?hash=[hash]',
    css: 'css/[name].css?hash=[chunkhash]',
    chunk: 'chunk/[id].js?hash=[chunkhash]',
  },
  extractCSS: false,
  webpack(config) {
    return config;
  },
};
