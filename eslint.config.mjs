// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import blankLineBetweenSiblings from './eslint-rules/vue-blank-line-between-siblings.js'
import noHtmlComments from './eslint-rules/no-html-comments.js'
import namingConventions from './eslint-rules/naming-conventions.js'

const customPlugin = {
  files: ['**/*.vue', '**/*.ts'],
  plugins: {
    custom: {
      rules: {
        'vue-blank-line-between-siblings': blankLineBetweenSiblings,
        'no-html-comments': noHtmlComments,
        'naming-conventions': namingConventions
      }
    }
  },
  rules: {
    'custom/vue-blank-line-between-siblings': 'error',
    'custom/no-html-comments': 'error',
    'custom/naming-conventions': 'warn'
  }
}

export default withNuxt(
  // @ts-expect-error - custom plugin structure is valid at runtime
  customPlugin,
  {
    rules: {
      'vue/no-multiple-template-root': 'off'
    }
  }
)
