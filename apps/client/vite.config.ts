/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { resolve } from 'path'

import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()] as PluginOption[],
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCaseOnly',
    },
  },
  resolve: {
    alias: [{ find: '@client', replacement: resolve(__dirname, 'src') }],
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
})
