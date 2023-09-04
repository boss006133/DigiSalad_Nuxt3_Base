// https://nuxt.com/docs/api/configuration/nuxt-config
const devPort = parseInt(process.env.NUXT_PUBLIC_DEV_PORT || "") ?? 3000
export default defineNuxtConfig({
  modules: [
    // doc: https://vueuse.org/guide/
    "@vueuse/nuxt",
    // doc: https://nuxt.com/modules/tailwindcss
    "@nuxtjs/tailwindcss",
    // doc: https://v8.i18n.nuxtjs.org/
    "@nuxtjs/i18n",
    // doc: https://pinia.vuejs.org/ssr/nuxt.html
    "@pinia/nuxt",
    // doc: https://github.com/nuxt-community/device-module
    "@nuxtjs/device",
  ],
  // doc: https://nuxt.com/docs/api/configuration/nuxt-config#postcss
  devServer: {
    port: devPort,
  },
  postcss: {
  },
  devtools: { enabled: true },
  build: {
    transpile: ["gsap"],
  },
})
