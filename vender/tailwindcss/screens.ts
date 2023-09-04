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

const screensTailwind: { [key: string]: { [key: string]: string } } = {}
const screensMedia: { [key: string]: { value: string, type: string } } = {}
for (const key in defaultSettings) {
    if (Object.prototype.hasOwnProperty.call(defaultSettings, key)) {
        const maxWidth = defaultSettings[key];
        const minWidth = defaultSettings[key] + 1;
        screensTailwind[`min-${key}`] = { 'min': `${minWidth}px` }
        screensTailwind[`max-${key}`] = { 'max': `${maxWidth}px` }

        const newKeyStr = key.charAt(0).toUpperCase() + key.slice(1);
        screensMedia[`min${newKeyStr}`] = { value: `${minWidth}px`, type: 'min' }
        screensMedia[`max${newKeyStr}`] = { value: `${maxWidth}px`, type: 'max' }
    }
}

/**
 * Customizing screens
 * screensTailwind export exemple:
 * {
 *   "min-xs":{'min': '376px'},
 *   "max-xs":{'max': '375px'},
 *   "min-sm":{'min': '481px'},
 *   "max-sm":{'max': '480px'},
 *   ...
 *   ...
 * }
 */

/**
 * Customizing screens
 * screensMedia export exemple:
 * {
 *   "min-xs":{'value': 376,'type': 'min'},
 *   "max-xs":{'value': 375,'type': 'max'},
 *   "min-sm":{'value': 481,'type': 'min'},
 *   "max-sm":{'value': 480,'type': 'max'},
 *   ...
 *   ...
 * }
 */
export { screensTailwind, screensMedia }