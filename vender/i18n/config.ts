export default {
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: false,
    langDir: 'locales',
    lazy: true,
    locales: [
        {
            code: 'zh-hk',
            iso: 'zh-HK',
            name: '繁',
            file: 'tc.json',
        },
        {
            code: 'zh-cn',
            iso: 'zh-CN',
            name: '简',
            file: 'sc.json',
        },
        {
            code: 'en',
            iso: 'en-US',
            name: 'EN',
            file: 'en.json',
        },
    ],
}
