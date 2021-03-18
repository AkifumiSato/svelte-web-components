import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import sveltePreprocess from 'svelte-preprocess'
import { typescript } from 'svelte-preprocess-esbuild';

export default {
  input: 'src/main.ts',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
    name: 'app',
  },
  plugins: [
    svelte({
      include: 'src/**/*.svelte',
      preprocess: [
        typescript({
          target: 'es2020',
          define: {
            'process.browser': 'true'
          }
        }),
        // avoid double compile
        sveltePreprocess({ typescript: false }),
      ],
    }),
    resolve({ browser: true }),
  ],
}