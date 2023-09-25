const basicAuth = {
    id: process.env.NUXT_PUBLIC_BASEAUTH_ID ?? null,
    password: process.env.NUXT_PUBLIC_BASEAUTH_PASSWORD ?? null,
}

export default {
    headers: {
        xXSSProtection: '1', // 告訴服務器如果遇到 http:// 的請求, 麻煩改為 https:// 請求
        contentSecurityPolicy: false,
    },
    basicAuth: {
        exclude: ['/api'],
        name: basicAuth.id,
        pass: basicAuth.password,
        enabled: true,
    }
}
