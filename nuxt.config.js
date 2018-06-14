module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ballroom East',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Static site redesign of ballroomeast.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Add custom CSS files
  */
  css: [
    { src: '~assets/css/ballroomeast.webflow.css', lang: 'css' },
    { src: '~assets/css/normalize.css', lang: 'css' },
    { src: '~assets/css/webflow.css', lang: 'css' }
  ],
  /*
  ** Add custom JS files
  */
  js: [
    { src: '~assets/js/webflow.js', lang: 'javascript' }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
