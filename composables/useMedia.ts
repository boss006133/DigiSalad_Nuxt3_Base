export const useMedia = () => {
    const viewport = useViewport()

    const min = (breakpointKey: string): boolean => {
        return viewport.isGreaterOrEquals(breakpointKey)
    }
    const max = (breakpointKey: string): boolean => {
        return viewport.isLessThan(breakpointKey)
    }

    return {
        min,
        max,
    }
}
