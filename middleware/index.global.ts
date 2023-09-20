export default defineNuxtRouteMiddleware((to, from) => {
    //cancel all pending request
    const { $useAbort } = useNuxtApp()
    if (from.name) $useAbort.abort()
})
