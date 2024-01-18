export default {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //     useCookie: true,
    //     redirectOn: 'all', // recommended
    // },
    //detectBrowserLanguage: false,
    skipSettingLocaleOnNavigate: true,
    langDir: 'locales',
    lazy: true,
    locales: [
        {
            code: 'zh-cn',
            iso: 'zh-CN',
            name: '简体',
            nameShort: '简',
            file: 'sc.json',
        },
        {
            code: 'zh-hk',
            iso: 'zh-HK',
            name: '繁體',
            nameShort: '繁',
            file: 'tc.json',
        },
        {
            code: 'en',
            iso: 'en-US',
            name: 'EN',
            nameShort: 'EN',
            file: 'en.json',
        },
    ],
}
