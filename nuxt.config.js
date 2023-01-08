import postcssConfig from './configs/postcss'
import viteConfig from './configs/vite'
import headConfig from './configs/head'

export default {
  app: {
    head: headConfig
  },

  css: [
    '~/assets/css/app.css',
    '~/assets/css/tailwind.css'
  ],

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/harlem'
  ],

  postcss: postcssConfig,
  vite: viteConfig
}
