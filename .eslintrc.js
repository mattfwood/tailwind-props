module.exports = {
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ["cypress"],
  "env": {
    "cypress/globals": true
  }
};