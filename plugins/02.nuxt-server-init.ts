import { useGlobalStore } from '~/store'
export default defineNuxtPlugin(async ({}) => {
    const { $pinia, runWithContext } = useNuxtApp()
    const nuxtApp = useNuxtApp()
    const storeGlobal = useGlobalStore($pinia)

    /** 自行開啟以下邏輯 guest token or user token */
    // const storeUser = useUserStore($pinia)
    // if (process.server) {
    //     const userToken = useCookie(COOKIE_USER_TOKEN)
    //     const guestToken = useCookie(COOKIE_GUEST_TOKEN)
    //     const token = userToken.value || guestToken.value
    //     if (token) {
    //         // get global
    //         // get me
    //         const [{ data: globalData, error: globalError }, { data: meData, error: meError }] =
    //             await Promise.all([useApi.s3.global(), useApi.auth.me()])
    //         storeGlobal.global = globalData.value?.data || null

    //         // if has me
    //         if (meData.value?.data) {
    //             storeUser[actionUser.SET_USER_ME](meData.value?.data)
    //             switch (storeUser.me?.type) {
    //                 case 'guest':
    //                     await runWithContext(() => storeUser[actionUser.SET_GUEST_TOKEN](token))
    //                     break
    //                 case 'user':
    //                     await runWithContext(() => storeUser[actionUser.SET_USER_TOKEN](token))
    //                     break
    //             }
    //         } else {
    //             // if get me error
    //             // clear user info
    //             await nuxtApp.runWithContext(() => storeUser[actionUser.USER_LOGOUT](nuxtApp))
    //             // get guest token
    //             const { data: guestTokenData, error: guestTokenError } = await runWithContext(() =>
    //                 useApi.auth.guestToken(),
    //             )
    //             if (guestTokenData.value?.data) {
    //                 const { token, me } = guestTokenData.value.data
    //                 // set token
    //                 await runWithContext(() => storeUser[actionUser.SET_GUEST_TOKEN](token || ''))
    //                 // set me
    //                 storeUser[actionUser.SET_USER_ME](me)
    //             }
    //         }
    //     } else {
    //         // get global
    //         // get guest token
    //         const [
    //             { data: globalData, error: globalError },
    //             { data: guestTokenData, error: guestTokenError },
    //         ] = await Promise.all([useApi.s3.global(), useApi.auth.guestToken()])
    //         storeGlobal.global = globalData.value?.data || null

    //         if (guestTokenData.value?.data) {
    //             const { token, me } = guestTokenData.value.data
    //             // set token
    //             await runWithContext(() => storeUser[actionUser.SET_GUEST_TOKEN](token || ''))
    //             // set me
    //             storeUser[actionUser.SET_USER_ME](me)
    //         }
    //     }
    // }
})
