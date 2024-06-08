import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from '@vant/auto-import-resolver';
import {defineConfig} from "vite";
import path from "path"

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [VantResolver()],
        }),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "src"),
        }
    },
    server: {
        open: true,
        port: 8880,
        proxy: {
            '/api': {
                target: 'http://localhost:8900',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
    }
});
