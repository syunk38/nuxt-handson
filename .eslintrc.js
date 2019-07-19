module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier',
    '@typescript-eslint',
    'vue'
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { "semi": false }]
  }
}
