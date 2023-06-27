module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended'
  ],
  'overrides': [{
    'files': ['*.vue'],
    'rules': {
      'indent': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue', '@typescript-eslint', 'tailwindcss'
  ],
  'rules': {
    // never
    'array-bracket-newline': ['error', 'consistent'], // https://eslint.org/docs/latest/rules/array-bracket-newline
    'array-bracket-spacing': ['error', 'never'], // https://eslint.org/docs/latest/rules/array-bracket-spacing
    'arrow-spacing': 'error', // https://eslint.org/docs/latest/rules/arrow-spacing
    'block-spacing': 'error', // https://eslint.org/docs/latest/rules/block-spacing
    'brace-style': [
      'error', '1tbs', {
        'allowSingleLine': true
      }
    ], // https://eslint.org/docs/latest/rules/brace-style
    'comma-dangle': ['error', 'never'], // https://eslint.org/docs/latest/rules/comma-dangle
    'comma-spacing': 'error', // https://eslint.org/docs/latest/rules/comma-spacing
    'comma-style': 'error', // https://eslint.org/docs/latest/rules/comma-style
    'default-case': 'error', // https://eslint.org/docs/latest/rules/dot-location
    'dot-location': ['error', 'property'], // https://eslint.org/docs/latest/rules/dot-location
    'dot-notation': 'error', // https://eslint.org/docs/latest/rules/dot-notation
    'eqeqeq': ['error', 'always'], // https://eslint.org/docs/latest/rules/eqeqeq
    'func-call-spacing': 'error', // https://eslint.org/docs/latest/rules/func-call-spacing
    'indent': ['error', 2], // https://eslint.org/docs/latest/rules/indent
    'key-spacing': 'error', // https://eslint.org/docs/latest/rules/key-spacing
    'keyword-spacing': 'error', // https://eslint.org/docs/latest/rules/keyword-spacing
    'no-array-constructor': 'error', // https://eslint.org/docs/latest/rules/no-array-constructor
    'no-duplicate-imports': 'error', // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
    'no-else-return': 'error', // https://eslint.org/docs/latest/rules/no-else-return
    'no-lonely-if': 'error', // https://eslint.org/docs/latest/rules/no-lonely-if
    'no-multi-spaces': 'error', // https://eslint.org/docs/latest/rules/no-multi-spaces
    'no-multiple-empty-lines': 'error', // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
    'no-tabs': 'error', // https://eslint.org/docs/latest/rules/no-tabs
    'no-trailing-spaces': 'error', // https://eslint.org/docs/latest/rules/no-trailing-spaces
    'no-undef-init': 'error', // https://eslint.org/docs/latest/rules/no-undef-init
    'no-unreachable-loop': 'error',
    'no-useless-rename': 'error', // https://eslint.org/docs/latest/rules/no-useless-rename
    'no-useless-return': 'error', // https://eslint.org/docs/latest/rules/no-useless-return
    // 'no-use-before-define': 'error', // Nervig
    'no-whitespace-before-property': 'error', // https://eslint.org/docs/latest/rules/no-whitespace-before-property
    'object-curly-newline': ['error', {
      'multiline': true,
      'consistent': true
    }], // https://eslint.org/docs/latest/rules/object-curly-newline
    'object-curly-spacing': ['error', 'always'], // https://eslint.org/docs/latest/rules/object-curly-spacing,
    // 'object-property-newline': 'error', // https://eslint.org/docs/latest/rules/object-property-newline
    'operator-linebreak': [
      'error', 'after', {
        'overrides': {
          '?': 'before',
          ':': 'before',
          '|>': 'before'
        }
      }
    ], // https://eslint.org/docs/latest/rules/operator-linebreak
    'padded-blocks': ['error', {
      'blocks': 'never',
      'switches': 'never',
      'classes': 'never'
    }], // https://eslint.org/docs/latest/rules/padded-blocks
    'quotes': [
      'error', 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': false
      }
    ], // https://eslint.org/docs/latest/rules/quotes
    'require-await': 'error', // https://eslint.org/docs/latest/rules/require-await
    'semi': 'error', // https://eslint.org/docs/latest/rules/semi
    'semi-spacing': 'error', // https://eslint.org/docs/latest/rules/semi-spacing
    'space-before-blocks': 'error', // https://eslint.org/docs/latest/rules/space-before-blocks
    'space-before-function-paren': ['error', 'never'], // https://eslint.org/docs/latest/rules/space-before-function-paren
    'space-in-parens': 'error', // https://eslint.org/docs/latest/rules/space-in-parens
    'space-infix-ops': 'error', // https://eslint.org/docs/latest/rules/space-infix-ops
    'space-unary-ops': 'error', // https://eslint.org/docs/latest/rules/space-unary-ops
    'spaced-comment': [
      'error', 'always', {
        'line': {
          'markers': [
            '*package', '!', '/', ',', '='
          ]
        },
        'block': {
          'balanced': true,
          'markers': [
            '*package', '!', ',', ':', '::', 'flow-include'
          ],
          'exceptions': ['*']
        }
      }
    ], // https://eslint.org/docs/latest/rules/spaced-comment
    'template-curly-spacing': ['error', 'never'], // https://eslint.org/docs/latest/rules/template-curly-spacing

    // VUE ESLINT
    // 'vue/block-tag-newline': 'error', // https://eslint.vuejs.org/rules/block-tag-newline.html ---> OCCURS ERROR!! NO REASON FOUND
    'vue/component-api-style': ['error', ['script-setup']], // https://eslint.vuejs.org/rules/component-api-style.html
    'vue/component-name-in-template-casing': 'error', // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    'vue/custom-event-name-casing': 'error', // https://eslint.vuejs.org/rules/custom-event-name-casing.html
    'vue/define-emits-declaration': 'error', // https://eslint.vuejs.org/rules/define-emits-declaration.html
    'vue/define-macros-order': 'error', // https://eslint.vuejs.org/rules/define-macros-order.html
    'vue/define-props-declaration': 'error', // https://eslint.vuejs.org/rules/define-props-declaration.html
    'vue/html-button-has-type': 'error', // https://eslint.vuejs.org/rules/html-button-has-type.html
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }], // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
    'vue/html-indent': ['error', 2, {
      'closeBracket': 1
    }], // https://eslint.vuejs.org/rules/html-indent.html
    'vue/no-boolean-default': 'error', // https://eslint.vuejs.org/rules/no-boolean-default.html
    'vue/no-empty-component-block': 'error', // https://eslint.vuejs.org/rules/no-empty-component-block.html
    'vue/no-required-prop-with-default': ['error', {
      'autofix': false
    }], // https://eslint.vuejs.org/rules/no-required-prop-with-default.html
    'vue/no-useless-mustaches': 'error', // https://eslint.vuejs.org/rules/no-useless-mustaches.html
    'vue/no-useless-v-bind': 'error', // https://eslint.vuejs.org/rules/no-useless-v-bind.html
    'vue/padding-line-between-blocks': 'error', // https://eslint.vuejs.org/rules/padding-line-between-blocks.html
    'vue/script-indent': ['error', 2], // https://eslint.vuejs.org/rules/script-indent.html
    'vue/v-for-delimiter-style': 'error', // https://eslint.vuejs.org/rules/v-for-delimiter-style.html

    // VUE ESLIINT EXTENSIONS
    'vue/array-bracket-newline': ['error', 'never'], // https://eslint.vuejs.org/rules/array-bracket-newline.html
    'vue/array-bracket-spacing': ['error', 'never'], // https://eslint.vuejs.org/rules/array-bracket-spacing.html
    'vue/arrow-spacing': 'error', // https://eslint.vuejs.org/rules/arrow-spacing.html
    'vue/block-spacing': 'error', // https://eslint.vuejs.org/rules/block-spacing.html
    'vue/brace-style': [
      'error', '1tbs', {
        'allowSingleLine': true
      }
    ], // https://eslint.vuejs.org/rules/brace-style.html
    'vue/comma-dangle': ['error', 'never'], // https://eslint.vuejs.org/rules/comma-dangle.html
    'vue/comma-spacing': 'error', // https://eslint.vuejs.org/rules/comma-spacing.html
    'vue/comma-style': 'error', // https://eslint.vuejs.org/rules/comma-style.html
    'vue/dot-location': ['error', 'property'], // https://eslint.vuejs.org/rules/dot-location.html
    'vue/dot-notation': 'error', // https://eslint.vuejs.org/rules/dot-notation.html
    'vue/eqeqeq': ['error', 'always'], // https://eslint.vuejs.org/rules/eqeqeq.html
    'vue/func-call-spacing': 'error', // https://eslint.vuejs.org/rules/func-call-spacing.html
    'vue/key-spacing': 'error', // https://eslint.vuejs.org/rules/key-spacing.html
    'vue/keyword-spacing': 'error', // https://eslint.vuejs.org/rules/keyword-spacing.html
    'vue/object-curly-newline': ['error', {
      'multiline': true,
      'consistent': true
    }], // https://eslint.vuejs.org/rules/object-curly-newline.html
    'vue/object-curly-spacing': ['error', 'always'], // https://eslint.vuejs.org/rules/object-curly-spacing.html
    'vue/object-property-newline': 'error', // https://eslint.vuejs.org/rules/object-property-newline.html
    'vue/operator-linebreak': [
      'error', 'after', {
        'overrides': {
          '?': 'before',
          ':': 'before',
          '|>': 'before'
        }
      }
    ], // https://eslint.vuejs.org/rules/operator-linebreak.html
    'vue/space-in-parens': 'error', // https://eslint.vuejs.org/rules/space-in-parens.html
    'vue/space-infix-ops': 'error', // https://eslint.vuejs.org/rules/space-infix-ops.html
    'vue/space-unary-ops': 'error', // https://eslint.vuejs.org/rules/space-unary-ops.html
    'vue/template-curly-spacing': ['error', 'never'], // https://eslint.vuejs.org/rules/template-curly-spacing.html

    // Tailwind
    'tailwindcss/no-custom-classname': 'off'
  }
};
