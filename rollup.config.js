import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import sveltePreprocess from 'svelte-preprocess'

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
        sveltePreprocess(),
      ],
    }),
    resolve({ browser: true }),
  ],
}