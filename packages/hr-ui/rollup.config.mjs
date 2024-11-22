// packages/hr-ui/rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true
        }
    ],
    external: ['react', 'react-dom'],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
        }),
        postcss({
            extensions: ['.css'],
            minimize: true,
            extract: 'css/index.css'
        }),
        terser()
    ]
};