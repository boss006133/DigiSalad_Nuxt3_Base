// https://nuxt.com/docs/api/configuration/nuxt-config
const vite = require('./config/vite.ts')
const i18n = require('./vender/i18n/config.ts')
const viewport = require('./vender/nuxt-viewport/config.ts')
const security = require('./vender/security/config.ts')
const robots = require('./vender/robots/config.ts')
// const gtm = require('./vender/gtm/config.ts')

const devPort = parseInt(process.env.NUXT_PUBLIC_DEV_PORT || '') ?? 3000
export default defineNuxtConfig({
    css: ['~/assets/scss/index.scss'],
    modules: [
        '~/src/module/site-config',
        // doc: https://vueuse.org/guide/
        '@vueuse/nuxt',
        // doc: https://nuxt.com/modules/tailwindcss
        '@nuxtjs/tailwindcss',
        // doc: https://v8.i18n.nuxtjs.org/
        '@nuxtjs/i18n',
        // doc: https://pinia.vuejs.org/ssr/nuxt.html
        '@pinia/nuxt',
        // doc: https://nuxt.com/modules/simple-robots
        'nuxt-simple-robots',
        // doc: https://nuxt.com/modules/simple-sitemap
        'nuxt-simple-sitemap',
        // doc: https://www.npmjs.com/package/nuxt-schema-org
        'nuxt-schema-org',
        // doc: https://nuxt.com/modules/device
        '@nuxtjs/device',
        // doc: https://nuxt.com/modules/nuxt-viewport
        'nuxt-viewport',
        // doc: https://nuxt-security.vercel.app/
        'nuxt-security',
        // doc: https://github.com/zadigetvoltaire/nuxt-gtm
        //'@zadigetvoltaire/nuxt-gtm',
    ],
    // doc: https://nuxt.com/docs/api/configuration/nuxt-config#postcss
    devServer: {
        port: devPort,
    },
    device: {
        refreshOnResize: true,
    },
    postcss: {},
    // doc: https://nuxt.com/docs/api/configuration/nuxt-config#runtimeconfig
    runtimeConfig: {
        // apiUsername: '', // can be overridden by NUXT_API_USERNAME environment variable
        // apiPassword: '',
        // siteUrl: process.env.NUXT_PUBLIC_BASE_URL,
        public: {
            // appBuildVersion: process.env.APP_BUILD_VERSION,
            apiKey: '',
            baseURL: `http://localhost:${devPort}`, // can be overridden by NUXT_PUBLIC_BASE_URL environment variable
            apiBase: `http://localhost:${devPort}/api`,
            nodeEnv: '',
            gtmId: '',
        },
    },
    devtools: { enabled: true },
    build: {
        transpile: ['gsap'],
    },
    i18n,
    vite,
    viewport,
    robots,
    //gtm,
    schemaOrg: {
        host: process.env.NUXT_PUBLIC_BASE_URL,
    },
    security,
    tailwindcss: {
        exposeConfig: true,
        // exposeLevel: 1,  // determines tree-shaking (optional)
    },
})
