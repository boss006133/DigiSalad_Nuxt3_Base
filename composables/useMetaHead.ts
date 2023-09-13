export const useMetaHead = ({ title = "", description = "", image = "" }) => {
    const myTitle = ref(title);
    const myDesc = ref(description);
    const myImage = ref(image);

    const { locale, locales } = useI18n();
    const localeIso = computed(() => {
        return (locales as any).value.find(
            (v: any) => v.code == locale.value,
        )?.iso
    })

    const headTitle = computed(() => {
        return myTitle.value ? { title: myTitle.value, } : null;
    })

    const metaTitle = computed(() => {
        return myTitle.value
            ? [
                {
                    hid: "twitter:title",
                    name: "twitter:title",
                    content: myTitle.value,
                },
                {
                    hid: "twitter:image:alt",
                    name: "twitter:image:alt",
                    content: myTitle.value,
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: myTitle.value,
                },
                {
                    hid: "og:image:alt",
                    property: "og:image:alt",
                    content: myTitle.value,
                },
            ]
            : [];
    })

    const metaDesc = computed(() => {
        return myDesc.value
            ? [
                {
                    hid: "description",
                    name: "description",
                    content: myDesc.value,
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: myDesc.value,
                },
                {
                    hid: "twitter:description",
                    name: "twitter:description",
                    content: myDesc.value,
                },
            ]
            : [];
    })

    const metaImage = computed(() => {
        return myImage.value
            ? [
                {
                    hid: "twitter:image",
                    name: "twitter:image",
                    content: myImage.value,
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: myImage.value,
                },
                {
                    hid: "og:image:secure_url",
                    property: "og:image:secure_url",
                    content: myImage.value,
                },
            ]
            : [];
    })


    useHead({
        htmlAttrs: {
            hreflang: localeIso,
            lang: localeIso,
            xmlns: "http://www.w3.org/1999/xhtml",
            "xml:lang": localeIso.value,
        } as any,
        ...headTitle.value,
        meta: [
            ...metaTitle.value,
            ...metaImage.value,
            ...metaDesc.value,
            {
                hid: "og:type",
                property: "og:type",
                content: "website",
            },
            {
                hid: "twitter:card",
                property: "twitter:card",
                content: "summary",
            },
        ],
    })

    useCanonical()
}