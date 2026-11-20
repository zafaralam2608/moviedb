import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { compression, defineAlgorithm } from 'vite-plugin-compression2'

const fromRoot = (path: string): string => fileURLToPath(new URL(path, import.meta.url))

const COMPRESSION_THRESHOLD = 1024

const GZIP_LEVEL = 9

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithms: [
        defineAlgorithm('brotliCompress'),
        defineAlgorithm('gzip', { level: GZIP_LEVEL }),
      ],
      threshold: COMPRESSION_THRESHOLD,
      include: /\.(js|css|html|svg|json)$/,
    }),
  ],
  resolve: {
    alias: { '@': fromRoot('./src') },
  },
  css: {
    preprocessorOptions: {
      scss: { loadPaths: [fromRoot('./src/styles')] },
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)/,
              priority: 40,
            },
            {
              name: 'router',
              test: /[\\/]node_modules[\\/]react-router[\\/]/,
              priority: 30,
            },
            {
              name: 'state',
              test: /[\\/]node_modules[\\/](@reduxjs|react-redux|redux|immer|reselect)/,
              priority: 30,
            },
            {
              name: 'mui',
              test: /[\\/]node_modules[\\/](@mui[\\/](?!icons-material)|@emotion|stylis|clsx|prop-types|react-is|react-transition-group)/,
              priority: 20,
            },
          ],
        },
      },
    },
  },
})
