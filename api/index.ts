import type { UseFetchOptions } from 'nuxt/app'
import { useUserStore } from '~/store/user'
import { EApiErrorKey } from '~/constants/others/enums'
import { action as actionUser } from '@/constants/store/actions/user'

export enum EBaseType {
    backend = 'backend',
    S3 = 's3',
}
type TBaseType = EBaseType.backend | EBaseType.S3
interface IApiResponseError {
    key: EApiErrorKey
    translations: IMsgTranslation[]
}
interface IApiResponse<T> {
    data: T
    error: IApiResponseError
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
                // const userToken = storeUser.getUserToken
                // const guestToken = storeUser.getGuestToken
                // const token = userToken || guestToken
                // options.headers.set('Authorization', `Bearer ${token}`)
                options.headers.set('api-key', config.public.apiKey)
            }
            return options
        }
        return useFetch(url, {
            baseURL,
            method,
            // retryStatusCodes: [401],
            // retry: 1,
            async onRequest({ options }) {
                onRequest(options)
            },
            onRequestError({ request, options, error }) {
                // Handle the request errors
            },
            async onResponseError({ request, response, options }) {
                /** 自行開啟以下邏輯 refresh token */
                // const userToken = storeUser.getUserToken
                // const guestToken = storeUser.getGuestToken
                // const token = userToken || guestToken
                // if (response.status === 401 && response.url !== tokensRefreshUrl && token) {
                //     // do refresh token
                //     const { data: refreshResponse, error: refreshError } =
                //         await nuxtApp.runWithContext(() => useApi.auth.refreshToken())
                //     // if refresh token api 200, set new token
                //     if (refreshResponse.value?.data) {
                //         switch (refreshResponse.value?.data.me?.type) {
                //             case 'guest':
                //                 await nuxtApp.runWithContext(() =>
                //                     storeUser[actionUser.SET_GUEST_TOKEN](
                //                         refreshResponse.value?.data.token || '',
                //                     ),
                //                 )
                //                 break
                //             case 'user':
                //                 await nuxtApp.runWithContext(() =>
                //                     storeUser[actionUser.SET_USER_TOKEN](
                //                         refreshResponse.value?.data.token || '',
                //                     ),
                //                 )
                //                 break
                //         }
                //         storeUser[actionUser.SET_USER_ME](refreshResponse.value?.data.me)
                //     }
                //     // if refresh token api error, refetch guest token
                //     if (refreshError.value) {
                //         if (storeUser.me?.type === 'user') {
                //             // if current me type is user, then logout
                //             await navigateTo(localePath('/login'))
                //             await nuxtApp.runWithContext(() =>
                //                 storeUser[actionUser.USER_LOGOUT](nuxtApp),
                //             )
                //         }
                //         await storeUser[actionUser.RENEW_GUEST_TOKEN](nuxtApp)
                //     }
                // } else if (response.status === 401 && response.url !== tokensRefreshUrl && !token) {
                //     // if both token are not exist
                //     if (storeUser.me?.type === 'user') {
                //         // if current me type is user, then logout
                //         await navigateTo(localePath('/login'))
                //         storeUser[actionUser.USER_LOGOUT](nuxtApp)
                //     }
                //     await storeUser[actionUser.RENEW_GUEST_TOKEN](nuxtApp)
                // }
            },
            ...opts,
            signal: nuxtApp.$useAbort.signal(),
        })
    }
