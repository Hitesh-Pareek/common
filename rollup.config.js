import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/vue-component-library.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/vue-component-library.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      preferBuiltins: true,
      browser: true
    }),
    commonjs({
      include: /node_modules/
    }),
    vue(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),
    terser(),
  ],
  external: ['vue']
};