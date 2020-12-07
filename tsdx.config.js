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
  }
  // rollup(config, options) {
  //   config.plugins.push(
  //     postcss({
  //       plugins: [
  //         require('tailwindcss'),
  //         require('autoprefixer'),
  //         // purgecss({
  //         //  content: [
  //         //     './src/**/*.html',
  //         //     './src/**/*.js',
  //         //     './src/**/*.jsx',
  //         //     './src/**/*.ts',
  //         //     './src/**/*.tsx',
  //         //   ],
  //         //   options: {
  //         //     extractors: [
  //         //       {
  //         //         extractor: purgeFromTailwindProps,
  //         //         extensions: ['js', 'jsx', 'tsx']
  //         //       },
  //         //     ],
  //         //   }
  //         // })
  //       ]
  //       // inject: false,
  //       // only write out CSS for the first bundle (avoids pointless extra files):
  //       // extract: !!options.writeMeta,
  //     })
  //   );
  //   return config;
  // },
};