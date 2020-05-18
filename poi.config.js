module.exports = {
  entry: './src/index.js',
  devServer: {
    proxy: {
      // '/dsapi': {
      //   target: 'http://open.iciba.com/dsapi',
      //   pathRewrite: {'^/dsapi' : ''}
      // },
      '/anything': 'http://httpbin.org'
    }
  },
};
