import routerAuth from '@/constants/routerAuth'
export default defineNuxtRouteMiddleware((to, from) => {
    //cancel all pending request
    const { $useAbort, $i18n, $getToRealName } = useNuxtApp()
    if (from.name) $useAbort.abort()

    //#region 替換預設路由
    const getToRealName = $getToRealName(to.name)
    const strLocale = `___${$i18n.locale.value}`
    const strDefault =
        $i18n.defaultLocale === $i18n.locale.value ? '___default' : ''
    if (
        getToRealName &&
        routerAuth[getToRealName] &&
        routerAuth[getToRealName].routerReplace
    ) {
        const toPathWithLocale = `${routerAuth[getToRealName].routerReplace}${strLocale}${strDefault}`
        return navigateTo(
            { name: toPathWithLocale },
            {
                redirectCode: 301,
            },
        )
    }
    //#endregion
})
