import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import {
  themePreprocessorPlugin,
} from '@zougt/vite-plugin-theme-preprocessor'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    Components({
      dirs: ['src'],
      resolvers: [
        AntDesignVueResolver({ importStyle: 'less' })
      ],
    }),
    themePreprocessorPlugin({
      less: {
        arbitraryMode: false,
        multipleScopeVars: [
          {
            scopeName: "default",
            path: path.resolve("src/assets/styles/theme/default.less"),
          },
          {
            scopeName: "dark",
            path: path.resolve("src/assets/styles/theme/dark.less"),
          },
        ],
        includeStyleWithColors: [
          {
            color: "#ffffff",
          },
        ],
        defaultScopeName: "",
        defaultPrimaryColor: "#da431a",
        extract: true,
        outputDir: "",
        themeLinkTagId: "theme-link-tag",
        themeLinkTagInjectTo: "head",
        removeCssScopeName: false,
        customThemeCssFileName: (scopeName) => scopeName,
      }
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/bootstrap";`
      },
      less: {
        javascriptEnabled: true,
      }
    }
  }
})
