const defaultTheme = require("tailwindcss/defaultTheme");
const { screensTailwind: screens } = require("./screens.ts");
const colors = require("./colors.json");
const fontSizeResponsive = require("./fontSize_responsive.json");
const fontSizeDesktop = require("./fontSize_desktop.json");
const fontSize = { ...fontSizeDesktop, ...fontSizeResponsive }
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
