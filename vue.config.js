module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: 'https://notify-api.line.me/api/notify',
  }
};