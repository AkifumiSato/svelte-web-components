import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/main.ts',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
    name: 'app',
  },
  plugins: [
    typescript({ sourceMap: false }),
    svelte({
      include: 'src/**/*.svelte',
      preprocess: sveltePreprocess(),
    }),
    resolve({ browser: true }),
  ],
}