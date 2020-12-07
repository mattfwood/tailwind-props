const webpack = require('webpack');

module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config) => {
    // allow __DEV__ macro to be used
    config.plugins.push(
      new webpack.DefinePlugin({
        '__DEV__': process.env.NODE_ENV === 'development'
      })
    );

    return config;
  },
};
