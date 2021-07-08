module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
    'html',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'app', 'context', 'event', 'e', 'config', '$axios', '$i18n', 'jsonApiData', 'route'] }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'vue/no-v-html': 'off',
    'max-len': 'off',
  },
}
