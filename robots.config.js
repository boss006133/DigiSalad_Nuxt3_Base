// for windows, https://github.com/nuxt-modules/robots/issues/86

export default [
    { UserAgent: '*' },
    { Disallow: process.env.NUXT_PUBLIC_ROBOT_SEARCHABLE == "y" ? "" : "/", },
    { BlankLine: true },
    { Sitemap: (req) => `${process.env.NUXT_PUBLIC_BASE_URL}/sitemap.xml` }
]