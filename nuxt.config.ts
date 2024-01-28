// https://nuxt.com/docs/api/configuration/nuxt-config
import vite from './config/vite'
import i18n from './vender/i18n/config'
import viewport from './vender/nuxt-viewport/config'
import security from './vender/security/config'
import robots from './vender/robots/config'
import googleFonts from './vender/googleFonts/config'

const devPort = parseInt(process.env.NUXT_PUBLIC_DEV_PORT || '') ?? 3000

export default defineNuxtConfig({
    typescript: {
        typeCheck: true,
    },
    css: [
        'vuetify/styles',
        //'vuetify/lib/styles/main.sass',
        // '@mdi/font/css/materialdesignicons.min.css',
        '~/assets/scss/index.scss',
    ],
    modules: [
        // doc: https://v8.i18n.nuxtjs.org/
        '@nuxtjs/i18n',
        // doc: https://vueuse.org/guide/
        '@vueuse/nuxt',
        // doc: https://unocss.dev/
        '@unocss/nuxt',
        // doc: https://pinia.vuejs.org/ssr/nuxt.html
        '@pinia/nuxt',
        // doc: https://nuxt.com/modules/simple-robots
        'nuxt-simple-robots',
        // doc: https://nuxtseo.com/sitemap/releases/v5
        '@nuxtjs/sitemap',
        // doc: https://www.npmjs.com/package/nuxt-schema-org
        'nuxt-schema-org',
        // doc: https://nuxt.com/modules/device
        '@nuxtjs/device',
        // doc: https://nuxt.com/modules/nuxt-viewport
        'nuxt-viewport',
        // doc: https://nuxt-security.vercel.app/
        'nuxt-security',
        // https://google-fonts.nuxtjs.org/
        '@nuxtjs/google-fonts',
        // https://github.com/fumeapp/dayjs
        'dayjs-nuxt',
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
        basicAuthId: '',
        basicAuthPassword: '',
        public: {
            // appBuildVersion: process.env.APP_BUILD_VERSION,
            apiKey: '',
            baseURL: `http://localhost:${devPort}`, // can be overridden by NUXT_PUBLIC_BASE_URL environment variable
            apiBaseS3Preview: `http://localhost:${devPort}/api`,
            apiBaseS3Publish: `http://localhost:${devPort}/api`,
            apiBaseBackend: `http://localhost:${devPort}/api`,
            nodeEnv: '',
            basicAuth: '',
            gtmId: '',
        },
    },
    devtools: { enabled: true },
    build: {
        transpile: ['gsap', 'vuetify'],
    },
    // @ts-ignore
    robots,
    // @ts-ignore
    i18n,
    vite,
    viewport,
    schemaOrg: {
        // @ts-ignore
        host: process.env.NUXT_PUBLIC_BASE_URL,
    },
    // @ts-ignore
    security,
    googleFonts,
})
