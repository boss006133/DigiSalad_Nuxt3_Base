const defaultTheme = require("tailwindcss/defaultTheme");
const { screensTailwind: screens } = require("./screens.ts");
const colors = require("./colors.json");
const fontSize = require("./fontSize.json");
const fontFamily = require("./fontFamily.ts");


module.exports = {
    theme: {
        extend: {
            fontFamily,
            colors,
            fontSize,
        },
        screens,
    },
}
