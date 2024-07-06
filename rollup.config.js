import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

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
    vue(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),
    terser()
  ]
};