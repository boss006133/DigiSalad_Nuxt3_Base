import global from '~/api/global.json'

const factories = {
    global,
} as any

const nameToSetting = (name: string) => {
    const [category, apiName, ...urlChild] = name.split('/')
    return { setting: factories[category][apiName], urlChild }
}

export const useApiFetch = async (name: string, opts?: any) => {
    // for header
    const nuxtApp = useNuxtApp()
    const locale = nuxtApp.$i18n.locale.value
    const config = useRuntimeConfig()

    const { setting: apiSetting, urlChild } = nameToSetting(name)
    const isLocal = apiSetting.isLocal ?? false

    let url = isLocal ? `/api/${apiSetting.url}` : apiSetting.url
    if (urlChild.length) url = `${url}/${urlChild.join('/')}`

    const baseURL = isLocal ? '/' : config.public.apiBase
    const method = apiSetting.method ?? 'get'
    return useFetch(url, {
        baseURL,
        method,
        async onRequest({ options }) {
            options.headers = new Headers(options.headers)
            options.headers.set('locale', locale)
            options.headers.set('platform', 'web')
            options.headers.set('api-key', config.public.apiKey)
        },
        async onResponseError({ request, response, options }) {
            const router = useRouter()
            const localePath = useLocalePath()
            router.replace(localePath('/404'))
        },
        ...opts,
    })
}
