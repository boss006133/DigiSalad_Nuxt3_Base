export const useCanonical = (url = '') => {
    useHead(() => ({
        link: [
            {
                rel: 'canonical',
                href: url,
            },
        ],
    }));      
}