import { appendHeader, createError, getHeader } from 'h3'

function mapCredentialsToBasicAuthHeaders(multipleCredentials: string): string[] {
    return multipleCredentials.split('\n').map((credentials) => `Basic ${btoa(credentials)}`)
}

export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig()
    const basicAuth = {
        id: runtimeConfig.basicAuthId ?? '',
        password: runtimeConfig.basicAuthPassword ?? '',
        enabled: runtimeConfig.public.basicAuth === 'y',
    }

    const authCredentialStr = `${basicAuth.id}:${basicAuth.password}`
    // If `basicAuth` is empty, do not prompt for authentication
    if (!basicAuth.enabled) {
        return
    }

    // Format our credentials to their corresponding header:
    // `user:pass` becomes `Basic dXNlcjpwYXNz`
    const validAuthHeaders = mapCredentialsToBasicAuthHeaders(authCredentialStr)
    const authHeader = getHeader(event, 'authorization')

    // If the given authentication header is valid, do not prompt for authentication
    if (authHeader && validAuthHeaders.some((validAuthHeader) => validAuthHeader === authHeader)) {
        return
    }

    // Set the `www-authenticate` header to prompt for authentication
    // The realm attribute can be used to customize the message shown to the user
    appendHeader(event, 'www-authenticate', 'Basic realm="Identification"')
    throw createError({ statusCode: 401, statusMessage: 'Not authorized' })
})
