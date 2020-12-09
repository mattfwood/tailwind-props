// const postcss = require('rollup-plugin-postcss');
// const autoprefixer = require('autoprefixer');
// const purgecss = require('@fullhuman/postcss-purgecss')

// PURGE REGEX
// [A-Za-z0-9_-]+=[{"].*[}"]

// will have to list all props
// ((p|m|flexDirection|h|w)=[{"]\S*[}"])

// const purgeFromTailwindProps = (content) => {
//   console.log(content);
//   return []
// }

module.exports = {
  rollup(config, options) {
    return config;
  },
};
