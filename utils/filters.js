const CleanCSS = require('clean-css');
const sass = require('sass');

const minifiedCSSfromSCSS = (value) => {
    const newCSS = sass.compileString(value).css.toString();
    return new CleanCSS({}).minify(newCSS).styles;
}

module.exports = {
    minifiedCSSfromSCSS
}