import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    console.log({ mode });

    return {
        plugins: [
            react(),
            checker({
                typescript: true,
                eslint: {
                    useFlatConfig: true,
                    lintCommand: 'eslint ./src --max-warnings 0',
                    dev: {
                        logLevel: ['error'],
                    },
                },
                stylelint: {
                    lintCommand: 'stylelint "src/**/*.{css,scss}" --max-warnings 0',
                    dev: {
                        logLevel: ['error'],
                    },
                },
            }),
            tsconfigPaths(),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        preview: {
            open: true,
        },
        build: {
            outDir: 'build',
            target: 'es2020',
            minify: 'esbuild',
            sourcemap: true,

            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        if (id.includes('node_modules')) {
                            if (id.includes('react-hook-form')) {
                                return 'react-hook-form';
                            }
                            if (id.includes('@mui')) {
                                return 'mui';
                            }
                        }
                    },
                },
            },
        },
    };
});
