export default {
  extends: [
    'stylelint-config-html/vue',
    'stylelint-scss',
  ],
  overrides: [
    {
      customSyntax: 'postcss-sass',
      files: ['*.sass', '**/*.sass'],
    },
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'selector-class-pattern': null,
      },
    },
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-alphabetical-order': true,
  },
};
