import { useUserStore } from '~/store/user'

export default defineNuxtRouteMiddleware((to, from) => {
    // const nuxt = useNuxtApp()
    // const storeUser = useUserStore(nuxt.$pinia)
    // // 無法進入頁面
    // const paths = ['login', 'registration', 'register-verify', 'forget-password', 'reset-password']
    // // 已登入狀態, 回首頁
    // if (storeUser.isUser) {
    //     const r = paths.filter((x) => nuxt.$localePath(x) === to?.path)
    //     if (r && r.length > 0) return navigateTo(nuxt.$localePath('/'))
    // }
})
