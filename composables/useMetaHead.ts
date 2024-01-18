import { CLASSNAME_UA_PC, CLASSNAME_UA_MOBILE } from '~/constants/type/className-variables'

export const useMetaHead = ({
    title = '',
    description = '',
    image = '',
    imageWidth = '',
    imageHeight = '',
}) => {
    const route = useRoute()
    const localePath = useLocalePath()
    const { $isPc, $isMobile, $config } = useNuxtApp()
    const myTitle = ref(title)
    const myDesc = ref(description)
    const myImage = ref(image)
    const myImageWidth = ref(imageWidth)
    const myImageHeight = ref(imageHeight)
    const i18nHead = useLocaleHead({
        addSeoAttributes: true,
    })
    const hreflangs = i18nHead.value.link?.map((x) => {
        return {
            hid: x.hid,
            rel: x.rel,
            href: `${$config.public.baseURL}${x.href}`,
            hreflang: x.hreflang,
        }
    })
    // const { locale, locales } = useI18n()
    // const localeIso = computed(() => {
    //     return (locales.value as any).find((v) => v.code == locale.value)?.iso
    // })

    const headTitle = computed(() => {
        return myTitle.value ? { title: myTitle.value } : null
    })

    const metaTitle = computed(() => {
        return myTitle.value
            ? [
                  {
                      hid: 'twitter:title',
                      name: 'twitter:title',
                      content: myTitle.value,
                  },
                  {
                      hid: 'twitter:image:alt',
                      name: 'twitter:image:alt',
                      content: myTitle.value,
                  },
                  {
                      hid: 'og:title',
                      property: 'og:title',
                      content: myTitle.value,
                  },
                  {
                      hid: 'og:image:alt',
                      property: 'og:image:alt',
                      content: myTitle.value,
                  },
              ]
            : []
    })

    const metaDesc = computed(() => {
        return myDesc.value
            ? [
                  {
                      hid: 'description',
                      name: 'description',
                      content: myDesc.value,
                  },
                  {
                      hid: 'og:description',
                      property: 'og:description',
                      content: myDesc.value,
                  },
                  {
                      hid: 'twitter:description',
                      name: 'twitter:description',
                      content: myDesc.value,
                  },
              ]
            : []
    })

    const metaImage = computed(() => {
        return myImage.value
            ? [
                  {
                      hid: 'twitter:image',
                      name: 'twitter:image',
                      content: myImage.value,
                  },
                  {
                      hid: 'og:image',
                      property: 'og:image',
                      content: myImage.value,
                  },
                  {
                      hid: 'og:image:secure_url',
                      property: 'og:image:secure_url',
                      content: myImage.value,
                  },
                  myImageWidth.value
                      ? {
                            hid: 'og:image:width',
                            property: 'og:image:width',
                            content: myImageWidth.value,
                        }
                      : {},
                  myImageHeight.value
                      ? {
                            hid: 'og:image:height',
                            property: 'og:image:height',
                            content: myImageHeight.value,
                        }
                      : {},
              ]
            : []
    })

    const metaDevice = computed(() => {
        let r = ''
        switch (true) {
            case $isPc.value:
                r = CLASSNAME_UA_PC
                break
            case $isMobile.value:
                r = CLASSNAME_UA_MOBILE
                break
        }
        return r
    })

    watch(metaDevice, (newValue) => {
        useHead({
            htmlAttrs: {
                device: newValue,
            } as any,
        })
    })

    useHead({
        htmlAttrs: {
            hreflang: i18nHead.value.htmlAttrs!.lang,
            lang: i18nHead.value.htmlAttrs!.lang,
            xmlns: 'http://www.w3.org/1999/xhtml',
            'xml:lang': i18nHead.value.htmlAttrs!.lang,
            device: metaDevice.value,
        } as any,
        ...headTitle.value,
        meta: [
            ...metaTitle.value,
            ...metaImage.value,
            ...metaDesc.value,
            {
                hid: 'twitter:site',
                name: 'twitter:site',
                content: '@digisaladclub',
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: `${$config.public.baseURL}${route.fullPath}`,
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website',
            },
            {
                hid: 'twitter:card',
                property: 'twitter:card',
                content: 'summary',
            },
        ],
        link: [...(hreflangs || [])],
    })
}
