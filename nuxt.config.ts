// https://nuxt.com/docs/api/configuration/nuxt-config
const i18n = require('./vender/i18n/config.ts')
const devPort = parseInt(process.env.NUXT_PUBLIC_DEV_PORT || '') ?? 3000
export default defineNuxtConfig({
    css: ['~/assets/css/index.css'],
    modules: [
        // doc: https://vueuse.org/guide/
        '@vueuse/nuxt',
        // doc: https://nuxt.com/modules/tailwindcss
        '@nuxtjs/tailwindcss',
        // doc: https://v8.i18n.nuxtjs.org/
        '@nuxtjs/i18n',
        // doc: https://pinia.vuejs.org/ssr/nuxt.html
        '@pinia/nuxt',
        // doc: https://nuxt.com/modules/robots
        '@nuxtjs/robots',
        // doc: https://nuxt.com/modules/device
        '@nuxtjs/device',
    ],
    // doc: https://nuxt.com/docs/api/configuration/nuxt-config#postcss
    devServer: {
        port: devPort,
    },
    // config: @nuxtjs/i18n
    // See https://v8.i18n.nuxtjs.org/getting-started/setup
    i18n,
    postcss: {},
    // doc: https://nuxt.com/docs/api/configuration/nuxt-config#runtimeconfig
    runtimeConfig: {
        // apiUsername: '', // can be overridden by NUXT_API_USERNAME environment variable
        // apiPassword: '',
        // basicAuth: '',
        // siteUrl: process.env.NUXT_PUBLIC_BASE_URL,
        public: {
            // appBuildVersion: process.env.APP_BUILD_VERSION,
            apiKey: '',
            baseURL: `http://localhost:${devPort}`, // can be overridden by NUXT_PUBLIC_BASE_URL environment variable
            apiBase: `http://localhost:${devPort}/api`,
            // robotSearchable: '',
            // gtmID: '',
        },
    },
    devtools: { enabled: true },
    build: {
        transpile: ['gsap'],
    },
})
