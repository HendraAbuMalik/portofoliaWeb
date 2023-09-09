import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig ({
    plugins: [
        legacy({
            targets: ['defaults', '> 0.2% and not dead'],
        }),
    ],
})