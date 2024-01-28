// https://nuxtseo.com/site-config/api/config
const isProduction = process.env.NUXT_PUBLIC_NODE_ENV === 'production'
export default defineEventHandler((e) => {
    // @ts-ignore
    updateSiteConfig(e, {
        //url: options.siteUrl,
        indexable: isProduction,
    })
})
