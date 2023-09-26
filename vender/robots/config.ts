//https://nuxtseo.com/robots/guides/nuxt-config
const pathAll = process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? '' : '/'
const disallow = [] as Array<string>
pathAll && disallow.push(pathAll)
export default {
    // provide simple disallow rules for all robots `user-agent: *`
    disallow,
}
