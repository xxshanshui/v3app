const { defineConfig } = require('@vue/cli-service')
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// function resolve(dir) {
// 	return path.join(__dirname, dir)
//   }
module.exports = defineConfig({
	// chainWebpack(config) {
	// 	// when there are many pages, it will cause too many meaningless requests
	// 	config.plugins.delete('prefetch')
	// 	// set svg-sprite-loader
	// 	config.module
	// 		.rule('svg')
	// 		.exclude.add(resolve('src/icons'))
	// 		.end()
	// 	config.module
	// 		.rule('icons')
	// 		.test(/\.svg$/)
	// 		.include.add(resolve('src/icons'))
	// 		.end()
	// 		.use('svg-sprite-loader')
	// 		.loader('svg-sprite-loader')
	// 		.options({
	// 			symbolId: 'icon-[name]'
	// 		})
	// 		.end()
	// },
	transpileDependencies: true,
	lintOnSave: false,
	// 公共地址
	publicPath: "/",
	// 打包输出的文件夹
	outputDir: "dist",
	// 静态资源
	assetsDir: "assets",
	// 本地启动项目配置端口和代理
	devServer: {
		// 修改端口号
		port: '1314',
		// 开发运行时域名，设置成'0.0.0.0',在同一个局域网下，如果你的项目在运行，同时可以通过你的
		host: '0.0.0.0',
		// 是否开启https配置 http 80三次握手四次挥手
		https: false,
		// 是否直接打开浏览器
		open: false,
		proxy: {
			[process.env.VUE_APP_IDENT]: {
				// 配置代理默认开启代理方式
				changeOrigin: true,
				// 如果是http接口，需要配置该参数
				secure: false,
				// 配置代理路径
				target: process.env.VUE_APP_URL,
				//路径重写 ,向后端发起服务的时候,不带代理标识
				pathRewrite: {
					["^" + process.env.VUE_APP_IDENT]: ""
				}
			}
		}
	},



	// plugins: [
	// 	// ...
	// 	AutoImport({
	// 	  resolvers: [ElementPlusResolver()],
	// 	}),
	// 	Components({
	// 	  resolvers: [ElementPlusResolver()],
	// 	}),
	//   ],


})
