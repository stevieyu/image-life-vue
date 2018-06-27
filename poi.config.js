const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: 'src/index.js',
  webpack(config) {
    config.plugins.push(new (require('workbox-webpack-plugin').GenerateSW)({
      importWorkboxFrom: 'local',
    }));
    config.plugins.push(new (require('webpack-notifier')));
    config.plugins.push(new (require('webpack-assets-manifest'))({
      // output: 'mix-manifest.json',
      fileExtRegex: /\.(js|css)$/i
    }));
    return config;
  },
  devServer: {
    // https: true,
    proxy: {
      '/dsapi': 'http://open.iciba.com/dsapi/'
    }
  },
};
