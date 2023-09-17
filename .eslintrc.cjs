module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:import/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@nuxtjs/eslint-config-typescript',
    'prettier'
  ],
  env: {
    es2022: true,
    browser: true,
    node: true
  },
  rules: {
    'import/no-unresolved': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['src/**/*.{js,ts,vue}']
    }
  ]
}
