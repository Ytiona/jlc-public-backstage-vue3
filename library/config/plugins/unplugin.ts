import AutoImport from 'unplugin-auto-import/vite'

export function configAutoImportPlugin() {
  return AutoImport({
    imports: ['vue'],
    // 指定文件生成路径
    dts: 'src/types/auto-imports.d.ts',
  })
}
