module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 66],
    'scope-empty': [0, 'never'],
    'scope-case': [2, 'always', ['lower-case']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'seo',
        'style',
        'refactor',
        'test',
        'revert',
        'chore',
      ],
    ],
  },
}
