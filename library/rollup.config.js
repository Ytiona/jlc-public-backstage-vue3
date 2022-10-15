import vue from 'rollup-plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/index.ts',
  output: {
    name: 'jlc-public',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
    dir: 'dist'
  },
  plugins: [
    typescript2(),
    scss(),
    vue(),
  ],
  external: [
    "lodash/merge",
    "lodash/cloneDeep",
    "vue",
    "element-plus",
  ]
}