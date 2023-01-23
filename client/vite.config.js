import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin,
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
        arbitraryMode: true,
        defaultPrimaryColor: "#512da7",
        multipleScopeVars: [
          {
            scopeName: "theme-light",
            path: path.resolve("src/assets/styles/theme/default/vars.less"),
          },
        ],
        includeStyleWithColors: [
          {
            color: "#ffffff",
          },
        ],
      }
    }),
    themePreprocessorHmrPlugin(),
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
