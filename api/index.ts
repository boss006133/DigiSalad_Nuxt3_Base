import type { UseFetchOptions } from 'nuxt/app'

export enum EBaseType {
    backend = 'backend',
    S3 = 's3',
}
type TBaseType = EBaseType.backend | EBaseType.S3
interface IApiResponse<T> {
    data: T
}
const objUseFetchOptions: UseFetchOptions<IApiResponse<any>> = {}
type ApiFrameOptsModel<T> = UseFetchOptions<IApiResponse<T>>
interface ApiFrameParamsModel<T> {
    baseType?: TBaseType
    path: string
    method?: typeof objUseFetchOptions.method
    opts?: ApiFrameOptsModel<T>
}
interface ApiFetchModel<T> {
    afterUrl?: string
    opts?: ApiFrameOptsModel<T>
}

export const fetch =
    <T>({
        baseType = EBaseType.backend,
        path,
        method = 'get',
        opts: optsDefault,
    }: ApiFrameParamsModel<T>) =>
    (payload?: Partial<ApiFetchModel<T>>) => {
        const nuxtApp = useNuxtApp()
        const locale = nuxtApp.$i18n.locale.value
        const config = useRuntimeConfig()
        let url = path
        let opts = optsDefault
        let baseURL = ''
        switch (baseType) {
            case EBaseType.backend:
                baseURL = config.public.apiBaseBackend
                break
            case EBaseType.S3:
                baseURL = config.public.apiBaseS3Publish
                break
            default:
                break
        }

        if (payload) {
            const { afterUrl, opts: optsNew } = payload
            if (afterUrl) url = `${path}${afterUrl}`
            if (optsNew) opts = { ...optsDefault, ...optsNew }
        }

        const onRequest = (options) => {
            options.headers = new Headers(options.headers)
            options.headers.set('locale', locale)
            options.headers.set('platform', 'web')

            if (baseType === EBaseType.backend) {
                // const myToken = await getMyToken()
                // options.headers.set('Authorization',  `Bearer ${myToken}`)
                options.headers.set('api-key', config.public.apiKey)
            }
            return options
        }
        return useFetch(url, {
            baseURL,
            method,
            async onRequest({ options }) {
                onRequest(options)
            },
            onRequestError({ request, options, error }) {
                // Handle the request errors
            },
            async onResponseError({ request, response, options }) {
                // const router = useRouter()
                // const localePath = useLocalePath()
                //router.replace(localePath('/404'))
                //return Promise.resolve(false)
            },
            ...opts,
            signal: nuxtApp.$useAbort.signal(),
        })
    }
