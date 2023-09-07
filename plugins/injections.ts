export default defineNuxtPlugin(() => {
    const media = useMedia()

    return {
        provide: {
            useMedia: {
                ...media,
            },
        },
    }
})
