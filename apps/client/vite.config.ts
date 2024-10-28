/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { resolve } from 'path'
import vitePluginImp from 'vite-plugin-imp'

// import { variablesConfig } from './src/themes/variable'
import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ] as PluginOption[],
  // css: {
  //   modules: {
  //     scopeBehaviour: 'local'
  //   },
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true,
  //       modifyVars: variablesConfig
  //     }
  //   }
  // },
  resolve: {
    alias: [{ find: '@client', replacement: resolve(__dirname, 'src') }]
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts']
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true
    }
  }
})
