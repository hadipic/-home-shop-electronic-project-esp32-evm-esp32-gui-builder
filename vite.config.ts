import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const pathResolve = (dir: string) => resolve(__dirname, dir);

export default ({ command, mode }) => {
  const env: Partial<ImportMetaEnv> = loadEnv(mode, process.cwd());
  
  return defineConfig({
    base: command === 'serve' ? '/' : '/-home-shop-electronic-project-esp32-evm-esp32-gui-builder/',
    
    define: {
      'process.env': env,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    },
    
    resolve: {
      alias: {
        '@': pathResolve('src'),
        '@lvgl': pathResolve('lvgl'),
        'opentype.js': 'node_modules/opentype.js/dist/opentype.module.js',
        path: 'path-browserify',
      },
    },
    
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'lvgl',
            dest: '.'
          }
        ]
      }),
      vue(),
      createHtmlPlugin({
        minify: true,
        pages: [
          {
            filename: 'public/index.html',
            template: 'public/index.html',
            entry: '/src/main.ts',
            injectOptions: {
              data: {
                title: 'ESP32 GUI Builder'
              }
            }
          }
        ]
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-import.d.ts',
        resolvers: [ElementPlusResolver()],
        eslintrc: {
          enabled: true,
          filepath: pathResolve('src/eslintrc-auto-import.json')
        },
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'src/components.d.ts'
      }),
      NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
      }),
    ],
    
    server: {
      host: true,
      port: 5173,
    },
    
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true,
        },
      },
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            'element-plus': ['element-plus'],
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            'lvgl': ['lvgl'],
          },
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        }
      },
    },
    
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${pathResolve('src/styles/index.less')}";`,
        },
      },
    },
  });
};
