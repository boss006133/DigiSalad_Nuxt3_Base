const screensDefault: { [key: string]: number } = {
    xs: 375,
    sm: 480,
    ms: 576,
    md: 768,
    lg: 992,
    '2lg': 1024,
    xl: 1200,
    '2xl': 1280,
    '3xl': 1440,
    '4xl': 1600,
    '5xl': 1800,
    '6xl': 1920,
    '7xl': 2400,
}
const MIN_TYPE_NAME = 'min'
const MAX_TYPE_NAME = 'max'
const screensUno: { [key: string]: string } = {}
const screensTailwind: { [key: string]: { [key: string]: string } } = {}
const screensMedia: { [key: string]: { value: number; type: string } } = {}
for (const key in screensDefault) {
    if (Object.prototype.hasOwnProperty.call(screensDefault, key)) {
        const minKeyName = `${MIN_TYPE_NAME}-${key}`
        const maxKeyName = `${MAX_TYPE_NAME}-${key}`
        const maxWidth = screensDefault[key]
        const minWidth = screensDefault[key] + 1

        // for unocss
        screensUno[key] = `${minWidth}px`

        // for tailwindcss
        screensTailwind[minKeyName] = { min: `${minWidth}px` }
        screensTailwind[maxKeyName] = { max: `${maxWidth}px` }

        //const newKeyStr = key.charAt(0).toUpperCase() + key.slice(1)
        screensMedia[minKeyName] = {
            value: minWidth,
            type: MIN_TYPE_NAME,
        }
        screensMedia[maxKeyName] = {
            value: maxWidth,
            type: MAX_TYPE_NAME,
        }
    }
}

/**
 * Customizing screens
 * screensUno export exemple:
 * {
 *   xs:{'376px'},
 *   sm:{'481px'},
 *   ...
 *   ...
 * }
 */

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
export { screensDefault, screensUno, screensTailwind, screensMedia }
