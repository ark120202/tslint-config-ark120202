// https://github.com/palantir/tslint/blob/e78f9c233935ea071fbc6bec1f67336eac1f9e41/src/configs/latest.ts
const latestOverrides = {
  forin: false,
  'max-classes-per-file': false,
  'array-type': [true, 'array'],
  'no-console': false,
  'no-empty': [true, 'allow-empty-catch', 'allow-empty-functions'],
  'no-implicit-dependencies': [true, 'dev'],
  'interface-name': false,
  // TODO:
  // 'object-literal-sort-keys': [true, 'match-declaration-order-only'],
  'only-arrow-functions': [true, 'allow-declarations'],
  'no-empty-interface': false,
  'no-submodule-imports': false,
  'no-implicit-dependencies': [true, 'dev', 'optional'],
  'no-namespace': [true, 'allow-declarations'],
  'member-ordering': false,
  'no-bitwise': false,
  'prefer-const': [true, { destructuring: 'all' }],
};

const airbnbOverrides = {
  'function-name': [
    true,
    {
      'method-regex': /^_?[a-z][a-zA-Z\d]*$/,
      'private-method-regex': /^_?[a-z][a-zA-Z\d]*$/,
      'protected-method-regex': /^_?[a-z][a-zA-Z\d]*$/,
      'static-method-regex': /^_?[a-z][a-zA-Z\d]*$/,

      // variable-name
      'function-regex': /.*/,
    },
  ],
  'import-name': false,
  'no-parameter-reassignment': false,
  'variable-name': [true, 'ban-keywords', 'check-format', 'allow-leading-underscore'],
  'object-shorthand-properties-first': false,
};

const coreRules = {
  deprecation: true,
  encoding: true,
  'prefer-template': [true, 'allow-single-concat'],
  'no-boolean-literal-compare': true,
  // FIXME: https://github.com/palantir/tslint/issues/3419
  // 'no-redundant-jsdoc': true,
  'max-file-line-count': [true, 1000],
  'no-floating-promises': true,
  'prefer-method-signature': true,
  'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
  'binary-expression-operand-order': true,
  'promise-function-async': [
    true,
    'check-function-declaration',
    'check-function-expression',
    'check-method-declaration',
  ],
  'no-require-imports': true,
  'no-unnecessary-type-assertion': true,
  'no-inferred-empty-object-type': true,
  'await-promise': [true, 'RequestPromise'],
  'no-for-in-array': true,
  'restrict-plus-operands': true,
  'no-inferrable-types': true,
  // TODO:
  // 'strict-boolean-expressions': [
  //   true,
  //   'allow-null-union',
  //   'allow-undefined-union',
  //   'allow-mix',
  //   'ignore-rhs',
  // ],
  'use-default-type-parameter': true,
  'no-unnecessary-class': true,
  'prefer-switch': true,
  'no-restricted-globals': true,

  // FIXME: https://github.com/palantir/tslint/issues/2430
  // 'no-unnecessary-callback-wrapper': true,

  // TODO:
  // 'completed-docs': [true, 'classes', 'functions', 'methods'],
  // 'no-magic-numbers': true,
  // 'no-default-export': true,
  // 'switch-default': true,
  // 'no-unsafe-any': true,
  // 'no-unbound-method': [true, 'ignore-static'],
};

const consistentCodestyle = {
  'early-exit': [true, { 'max-length': 5 }],
  'no-accessor-recursion': true,
  'no-collapsible-if': true,
  'no-else-after-return': false,
  'no-unnecessary-else': true,
  'no-return-undefined': true,
  'no-static-this': true,
  'prefer-while': true,
};

module.exports = {
  extends: [
    'tslint:latest',
    'tslint-config-airbnb',
    'tslint-config-prettier',
    'tslint-plugin-prettier',
  ],
  rules: Object.assign(
    { prettier: true },
    latestOverrides,
    airbnbOverrides,
    coreRules,
    consistentCodestyle,
  ),
};
