export default {
    headers: {
        xXSSProtection: '1', // 告訴服務器如果遇到 http:// 的請求, 麻煩改為 https:// 請求
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: 'unsafe-none',
    },
}
