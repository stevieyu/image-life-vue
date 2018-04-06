module.exports = {
  entry: 'src/index.js',
  extractCSS: false,
  webpack(config) {
    config.plugins.push(new (require('workbox-webpack-plugin').GenerateSW)({
      importWorkboxFrom: 'local',
    }));
    return config;
  },
  devServer: {
    // https: true,
    proxy: {
      '/dsapi': 'http://open.iciba.com/dsapi/'
    }
  }
};
