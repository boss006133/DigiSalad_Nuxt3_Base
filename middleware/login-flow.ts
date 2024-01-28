import { useUserStore } from '~/store/user'

export default defineNuxtRouteMiddleware((to, from) => {
    // const nuxt = useNuxtApp()
    // const storeUser = useUserStore(nuxt.$pinia)
    // const userToken = storeUser.getUserToken

    // // 無法進入頁面
    // const paths = ['login', 'registration', 'register-verify', 'forget-password', 'reset-password']

    // // 已登入狀態, 回首頁
    // if (userToken) {
    //     const r = paths.filter((x) => nuxt.$localePath(x) === to?.path)
    //     if (r && r.length > 0) return navigateTo(nuxt.$localePath('/'))
    // }
})
