// https://nuxt.com/docs/api/configuration/nuxt-config
const devPort = parseInt(process.env.NUXT_PUBLIC_DEV_PORT || "") ?? 3000
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  // doc: https://nuxt.com/docs/api/configuration/nuxt-config#postcss
  devServer: {
    port: devPort,
  },
  postcss: {
  },
  devtools: { enabled: true }
})
