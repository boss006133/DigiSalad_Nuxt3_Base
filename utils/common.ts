/**
 * String是否只有數字
 * @param {String | Number} value
 * @returns {Boolean}
 */
export const isInteger = (value) => {
    if (/^[0-9]+$/.test(value)) {
        return true
    }
    return false
}
