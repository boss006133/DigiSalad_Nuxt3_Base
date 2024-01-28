import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
export const useLocale = () => {
    const { locale, locales } = useI18n()
    const currentLocale = computed(() =>
        (locales.value as LocaleObject[]).find((v) => v.code === locale.value),
    )
    const currentLocaleName = computed(() => currentLocale.value?.name || '')
    const otherLocales = computed(() =>
        (locales.value as LocaleObject[]).filter((v) => v.code !== locale.value),
    )
    return { currentLocale, currentLocaleName, otherLocales, locale, locales }
}
