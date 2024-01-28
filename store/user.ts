import { defineStore } from 'pinia'
import { action as actionUser } from '@/constants/store/actions/user'
import { COOKIE_USER_TOKEN, COOKIE_GUEST_TOKEN } from '@/constants/others'
// import type { IAuthEmailLoginReq } from '@/models/api/auth/email/login'
// import type { IAuthMeRes } from '@/models/api/auth/me'
import type { NuxtApp } from 'nuxt/app'

export const useUserStore = defineStore('user', {
    // 對應 data
    state: () => ({
        userToken: null as string | null,
        guestToken: null as string | null,
        // me: null as IAuthMeRes | null,
    }),
    // 對應 computed (物件形式)
    getters: {
        // getUserToken: (state) => {
        //     const userToken = useCookie(COOKIE_USER_TOKEN)
        //     return state.userToken || userToken.value
        // },
        // getGuestToken: (state) => {
        //     const guestToken = useCookie(COOKIE_GUEST_TOKEN)
        //     return state.guestToken || guestToken.value
        // },
        // /** 是否為登入狀態 */
        // isUser(state): boolean {
        //     const _this = this
        //     // return (
        //     //     state.me?.type === 'user' &&
        //     //     typeof _this.getUserToken === 'string' &&
        //     //     _this.getUserToken !== ''
        //     // )
        //     return state.me?.type === 'user'
        // },
        // greetWord: (state): IMsgTranslation[] => {
        //     let r = [
        //         {
        //             locale: 'en',
        //             message: `Hi ${state.me?.personal_info.last_name}`,
        //         },
        //         {
        //             locale: 'zh-hk',
        //             message: `Hi ${state.me?.personal_info.last_name}`,
        //         },
        //     ]
        //     return r
        // },
    },
    // 對應 methods (物件形式)
    actions: {
        // async [actionUser.RENEW_GUEST_TOKEN](nuxtApp: NuxtApp) {
        //     const self = this
        //     // get guest token
        //     const { data: guestTokenResponse, error: guestTokenError } =
        //         await nuxtApp.runWithContext(() => useApi.auth.guestToken())
        //     if (guestTokenResponse.value?.data) {
        //         // set guest token
        //         await nuxtApp.runWithContext(() =>
        //             self[actionUser.SET_GUEST_TOKEN](guestTokenResponse.value?.data.token || ''),
        //         )
        //         // set me
        //         self[actionUser.SET_USER_ME](guestTokenResponse.value?.data.me)
        //     }
        // },
        // [actionUser.SET_USER_TOKEN](value) {
        //     const self = this
        //     const userTokenCookie = useCookie(COOKIE_USER_TOKEN, {
        //         secure: true,
        //         sameSite: true,
        //     })
        //     if (value) {
        //         userTokenCookie.value = value
        //         self.userToken = value
        //     }
        // },
        // [actionUser.SET_GUEST_TOKEN](value) {
        //     const self = this
        //     const guestTokenCookie = useCookie(COOKIE_GUEST_TOKEN, {
        //         secure: true,
        //         sameSite: true,
        //     })
        //     if (value) {
        //         guestTokenCookie.value = value
        //         self.guestToken = value
        //     }
        // },
        // async [actionUser.SET_USER_ME](value) {
        //     const self = this
        //     self.me = value
        // },
        // async userLogin({ payload, nuxtApp }: { payload: IAuthEmailLoginReq; nuxtApp: NuxtApp }) {
        //     const self = this
        //     const res = await nuxtApp.runWithContext(() =>
        //         useApi.auth.email.login({
        //             opts: {
        //                 body: payload,
        //             },
        //         }),
        //     )
        //     const { data: loginData, error: loginError } = res
        //     // if fetch success, set token and me
        //     if (loginData.value?.data) {
        //         const { token, me } = loginData.value.data
        //         await nuxtApp.runWithContext(() => self[actionUser.SET_USER_TOKEN](token))
        //         self[actionUser.SET_USER_ME](me)
        //     }
        //     return res as typeof res
        // },
        // [actionUser.USER_LOGOUT](nuxtApp: NuxtApp) {
        //     const self = this
        //     const userToken = useCookie(COOKIE_USER_TOKEN)
        //     const guestToken = useCookie(COOKIE_GUEST_TOKEN)
        //     // removoe cookie token
        //     userToken.value = guestToken.value = null
        //     // removoe store token
        //     self.userToken = self.guestToken = null
        // },
    },
})
