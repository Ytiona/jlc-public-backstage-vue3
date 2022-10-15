import { rollup } from 'rollup'
import vue from 'rollup-plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'

async function build() {
  const bundler = await rollup({
    input: 'src/index.ts',
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
  })
  
  bundler.write({
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
    dir: 'dist'
  })
}

build()
