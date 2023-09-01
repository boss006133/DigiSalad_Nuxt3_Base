/**
 * Customizing screens
 * export exemple:
 * {
 *   "min-xs":{'min': '375px'},
 *   "max-xs":{'max': '374px'},
 *   "min-sm":{'min': '480px'},
 *   "max-sm":{'max': '479px'},
 *   ...
 *   ...
 * }
 */
const defaultSettings: { [key: string]: number } = {
    "xs": 375,
    "sm": 480,
    "ms": 576,
    "md": 768,
    "lg": 992,
    "xl": 1200,
    "2xl": 1440,
    "3xl": 1600,
    "4xl": 1800,
    "5xl": 1920,
    "6xl": 2400,
    "tablet": 768,
    "desktop": 1320
}

const newSettings: { [key: string]: { [key: string]: string } } = {}
for (const key in defaultSettings) {
    if (Object.prototype.hasOwnProperty.call(defaultSettings, key)) {
        const maxWidth = defaultSettings[key];
        const minWidth = defaultSettings[key] + 1;
        newSettings[`min-${key}`] = { 'min': `${minWidth}px` }
        newSettings[`max-${key}`] = { 'max': `${maxWidth}px` }
    }
}
export default newSettings