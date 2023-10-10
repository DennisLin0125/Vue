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
      '/students': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true
      },
      '/cars': {
        target: 'http://localhost:5001',
        ws: true,
        changeOrigin: true
      },
    }
  }
})
