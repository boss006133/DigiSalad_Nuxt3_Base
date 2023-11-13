//https://nuxtseo.com/robots/guides/nuxt-config
const isProduction = process.env.NUXT_PUBLIC_NODE_ENV === 'production'
const pathAll = isProduction ? '' : '/'
const disallow = [] as Array<string>
pathAll && disallow.push(pathAll)

//新增額外需要disallow paths
const extraDisallowPaths = ['/ds-guide']
disallow.concat(extraDisallowPaths)

export default {
    // provide simple disallow rules for all robots `user-agent: *`
    disallow,
}
