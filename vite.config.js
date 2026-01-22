import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => ({

  base: command === 'serve' ? '/' : '/goit-js-hw-11/',

  root: 'src',

  build: {
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      input: glob.sync('./src/*.html'),

      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
      },
    },
  },

  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
    SortCss({ sort: 'mobile-first' }),
  ],
}));
