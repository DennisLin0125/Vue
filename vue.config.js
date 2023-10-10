const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  // 第一種配置代理
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 第二種配置代理
  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api1': ""},
        changeOrigin: true
      },
      '/api2': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api2': ""},
        changeOrigin: true
      },
    }
  }
})
