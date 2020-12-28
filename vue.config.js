module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        open:true,
        proxy: {
            '/api': { //访问路径，可以自己设置，
                target: 'http://localhost:8020', //代理接口，即后端运行所在的端口
                ws: true,
                changeOrigin: true, //设置是否跨域
                pathRewrite: { //访问路径重写
                    '^/api': '',
                },
            },
            '/check': { //访问路径，可以自己设置，
                target: 'http://localhost:8021', //代理接口，即后端运行所在的端口
                ws: true,
                changeOrigin: true, //设置是否跨域
                pathRewrite: { //访问路径重写
                    '^/check': '',
                },
            }
        }
    }
}