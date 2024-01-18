import 'uno.css'
import { createGtm } from '@gtm-support/vue-gtm'
export default defineNuxtPlugin((nuxtApp) => {
    const { $config } = useNuxtApp()
    const isProduction = $config.public.nodeEnv === 'production'
    const isDev = $config.public.nodeEnv === 'development'
    const device = useDevice()
    const route = useRoute()
    const req = useRequestURL()
    const _meta_extend = [] as any
    if (!isProduction) {
        _meta_extend.push({ hid: 'robots', name: 'robots', content: 'noindex' })
    }

    //請自行調整所需檔案和檔名
    const favicon_customSizes = ['16', '32', '96'].map((x) => {
        const ratio = `${x}x${x}`
        return {
            rel: 'icon',
            type: 'image/png',
            href: `${req.origin}/favicon_${ratio}.png`,
            sizes: ratio,
        }
    })
    const favicon = [
        { rel: 'shortcut icon', type: 'image/x-icon', href: `${req.origin}/favicon.ico` },
        ...favicon_customSizes,
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

    //#region create gtm
    const gtmId = $config.public.gtmId
    try {
        nuxtApp.vueApp.use(
            createGtm({
                id: gtmId,
                defer: false,
                compatibility: false,
                enabled: isProduction,
                debug: !isProduction,
                loadScript: true,
                vueRouter: useRouter(),
                trackOnNextTick: false,
            }) as any,
        )
    } catch (error) {
        if (!isDev && process.client) console.error('gtm failed', error)
    }
    //#endregion

    Number.prototype.pad = function (size) {
        var s = String(this)
        while (s.length < (size || 2)) {
            s = '0' + s
        }
        return s
    }
})
