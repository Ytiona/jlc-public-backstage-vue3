import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { configAutoImportPlugin } from "./config/plugins/unplugin";
import path from "path";
import typescript from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    configAutoImportPlugin(),
    {
      name: "style",
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        Object.keys(bundle).forEach(key => {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.scss换成.css,因为我们当时没有打包scss文件
          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.scss/g, ".css"),
          });
        })
      },
    },
    typescript()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "lib",
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "lodash/merge",
        "lodash/cloneDeep",
        "vue",
        "element-plus",
        /\.scss/,
      ],
      output: {
        //不用打包成.es.js,这里我们想把它打包成.js
        entryFileNames: "[name].js",
        //让打包目录和我们目录对应
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
});
