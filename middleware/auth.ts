import { useUserStore } from '~/store/user'
import { QUERYSTRING_RETURN_URL } from '@/constants/others'

export default defineNuxtRouteMiddleware((to, from) => {
    // const nuxtApp = useNuxtApp()
    // const storeUser = useUserStore(nuxtApp.$pinia)
    // // 無登入狀態
    // if (!storeUser.isUser) {
    //     // 回首頁
    //     return navigateTo({
    //         path: nuxtApp.$localePath('/login'),
    //         query: {
    //             [QUERYSTRING_RETURN_URL]: encodeURIComponent(from.path),
    //         },
    //     })
    // }
})
