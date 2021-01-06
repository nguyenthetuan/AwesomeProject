module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    // overrides
    // off
    camelcase: 'off',
    semi: [2, 'never'],
    // warn
    'react/boolean-prop-naming': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-deprecated': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': [
      'warn',
      {
        skip: ['MonoText'],
      },
    ],
    // error
    'prettier/prettier': [
      'error',
      {
        semi: false,
        // tabWidth: 2,
        // endOfLine: 'auto',
      },
    ],
    curly: 'error',
    'no-var': 'error',
    'no-case-declarations': 'error',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-empty': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: '_?(on|set)',
      },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: false,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-wrap-multilines': 'error',
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],
    'react/no-redundant-should-component-update': 'error',
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true,
      },
    ],
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
    'react/prefer-es6-class': ['error', 'always'],
    'react/require-render-return': 'error',
    'template-curly-spacing': 'off',
    indent: 'off',
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53',
    },
  },
}
