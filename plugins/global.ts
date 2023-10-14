const isProduction = process.env.NUXT_PUBLIC_NODE_ENV === 'production'
export default defineNuxtPlugin((nuxtApp) => {
    const { $config } = useNuxtApp()
    const route = useRoute()
    const url = `${$config.public.baseURL}${route.path}`
    const _meta_extend = [] as any
    if (!isProduction) {
        _meta_extend.push({ hid: 'robots', name: 'robots', content: 'noindex' })
    }

    //#region set global head
    useHead(() => ({
        meta: [..._meta_extend],
        link: [
            {
                rel: 'canonical',
                href: url,
            },
        ],
        htmlAttrs: {
            ['env-production']: process.env.NODE_ENV === 'production',
        } as any,
    }))
    //#endregion
})
