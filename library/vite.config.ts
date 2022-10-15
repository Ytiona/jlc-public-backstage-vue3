import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { configAutoImportPlugin } from "./config/plugins/unplugin";
import path from "path";
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    configAutoImportPlugin(),
    vue(),
    dts(),
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
      name: 'jlc-public-backstage-vue3',
    },
    rollupOptions: {
      external: [
        "lodash/merge",
        "lodash/cloneDeep",
        "vue",
        "element-plus",
      ],
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: "src",
        globals: {
          vue: 'Vue'
        },
      },
    },
  },
});
