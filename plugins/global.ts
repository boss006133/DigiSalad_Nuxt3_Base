export default defineNuxtPlugin((nuxtApp) => {
    const { $config } = useNuxtApp()
    const isProduction = $config.public.nodeEnv === 'production'
    const device = useDevice()
    const route = useRoute()
    const req = useRequestURL()
    const _meta_extend = [] as any
    if (!isProduction) {
        _meta_extend.push({ hid: 'robots', name: 'robots', content: 'noindex' })
    }

    //請自行調整所需檔案和檔名
    const favicon = [
        // { rel: 'shortcut icon', type: 'image/x-icon', href: `${req.origin}/favicon.ico` },
        // {
        //     rel: 'icon',
        //     href: `${req.origin}/favicon_32x32.png`,
        //     size: '32x32',
        // },
        // {
        //     rel: 'icon',
        //     href: `${req.origin}/favicon_48x48.png`,
        //     size: '48x48',
        // },
    ]

    //#region set global head
    useHead(() => ({
        meta: [..._meta_extend],
        link: [...favicon],
        htmlAttrs: {
            class: 'ds-app',
            ['env-production']: process.env.NODE_ENV === 'production',
            ['is-ios']: device.isIos,
            ['is-macos']: device.isMacOS,
        } as any,
    }))
    //#endregion
})
