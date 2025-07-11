import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // pluginVue.configs['flat/essential'],
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,

  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      'vue/multi-word-component-names': 'off', // Example of overriding a rule
      '@typescript-eslint/explicit-function-return-type': 'off', // Example of adding a rule
      '@typescript-eslint/no-unused-vars': 'warn', // Example of adding a rule
      'vue/no-unused-components': 'warn', // Example of adding a rule
      'vue/no-v-html': 'off', // Example of disabling a rule
      'vue/block-lang': 'off', // Example of disabling a rule
      "indent": ["warn", 2],

      "sort-imports": ["warn", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": false
      }],
      "comma-dangle": ["warn", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }],
      "array-bracket-spacing": ["warn", "never", {
        "singleValue": false,
        "objectsInArrays": false,
        "arraysInArrays": false,
      }],
      "space-in-parens": ["warn", "never"],
      "object-curly-spacing": ["warn", "never", {
        "arraysInObjects": false,
        "objectsInObjects": false
      }],
      "vue/attributes-order": ["warn", {
        "order": [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ],
        "alphabetical": true
      }],
      "arrow-spacing": "warn"
    },
  },
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
)
