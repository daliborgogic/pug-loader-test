module.exports = {
  build: {
    // Not working
    styleResources: {
      stylus: ['./assets/variables.styl'],
    },
    parallel: true,
    cache: true,
    cssSourceMap: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // config.module.rules.push({
        //   test: /\.pug$/,
        //   loader: 'pug-plain-loader',
        //   options: {
        //     data: {}
        //   }
        // })
      }
    }
  }
}
