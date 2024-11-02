/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vite/client" />
import { resolve } from 'path'
import EnvironmentPlugin from 'vite-plugin-environment'

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    build: {
      sourcemap: env.VITE_ENV === 'development', // only set true when work with dev mode
    },
    plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all')],
    css: {
      modules: {
        scopeBehaviour: 'local',
        localsConvention: 'dashes',
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
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
    define: {
      'process.env': {},
    },
  }
})
