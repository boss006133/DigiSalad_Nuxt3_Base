import { screensDefault as breakpoints } from '../tailwindcss/screens'

// 因為nuxt-viewport 只有isLessThan(<)的方法,並沒有(<=),所以在此將專案預設所有的breakpoints值都+1px
Object.keys(breakpoints).forEach((key) => {
    if (typeof breakpoints[key] == 'number') {
        breakpoints[key] = breakpoints[key] + 1
    }
})
export default {
    breakpoints,
    defaultBreakpoints: {
        desktop: '5xl',
        mobile: 'xs',
        tablet: 'md',
    },
    // fallbackBreakpoint: 'lg',
}
