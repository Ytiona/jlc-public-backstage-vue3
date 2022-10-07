import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { configAutoImportPlugin } from "./config/plugins/unplugin";
import vitePluginImportus from 'vite-plugin-importus'
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    configAutoImportPlugin(),
    vitePluginImportus([
      {
        libraryName: 'lodash',
        libraryDirectory: 'es',
      }
    ]),
    //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
    // dts({
    //   outputDir: "lib",
    //   tsConfigFilePath: "./tsconfig.json",
    //   include: "src/**/*.vue"
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "lib",
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "element-plus"],
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
