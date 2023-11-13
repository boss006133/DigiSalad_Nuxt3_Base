//https://nuxtseo.com/robots/guides/nuxt-config
const isProduction = process.env.NUXT_PUBLIC_NODE_ENV === 'production'
const gtmId = process.env.NUXT_PUBLIC_GTM_ID || ''
export default {
    // provide simple disallow rules for all robots `user-agent: *`
    id: gtmId,
    enableRouterSync: true,
    enabled: isProduction,
    debug: !isProduction,
    loadScript: true,
    trackOnNextTick: false,
}
