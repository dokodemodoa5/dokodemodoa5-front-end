module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://pro-api.coinmarketcap.com", // 需要跨域的目标url，我这里用到的是豆瓣API
                changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
                ws: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    },

    transpileDependencies: [
        'vuetify'
    ],

    publicPath: process.env.NODE_ENV === 'production'
          ? '/eric-project/'
          : '/'
}
