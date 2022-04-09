import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig(({command}) => {
    const production = command !== 'serve';
    return {
        root: 'resources',
        base: production ? '/js/' : '',
        plugins: [
            vue(),
        ],
    }
    // config options
});