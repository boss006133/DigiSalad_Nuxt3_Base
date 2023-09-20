export const useLocale = () => {
    const { locale, locales } = useI18n()
    const currentLocale = computed(() =>
        (locales.value as any).find((v) => v.code === locale.value),
    )
    const currentLocaleName = computed(() => currentLocale.value.name)
    const otherLocales = computed(() =>
        (locales.value as any).filter((v) => v.code !== locale.value),
    )
    return { currentLocale, currentLocaleName, otherLocales, locale, locales }
}
