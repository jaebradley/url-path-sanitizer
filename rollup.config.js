import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import filesize from 'rollup-plugin-filesize';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import {
  terser,
} from 'rollup-plugin-terser';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.js',
      format: 'umd',
      name: 'url-path-sanitizer',
      globals: {
        'has-a-digit': 'hasADigit',
      },
    },
    {
      file: 'build/index.cjs.js',
      format: 'cjs',
      name: 'url-path-sanitizer',
      globals: {
        'has-a-digit': 'hasADigit',
      },
    },
    {
      file: 'build/index.esm.js',
      format: 'es',
      globals: {
        'has-a-digit': 'hasADigit',
      }
    },
  ],
  external: ['has-a-digit'],
  plugins: [
    globals(),
    builtins(),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    localResolve(),
    resolve({
      module: true,
      jsnext: true,
      main: true,
      preferBuiltins: true,
      browser: true,
      modulesOnly: true,
    }),
    terser(),
    commonjs(),
    filesize(),
  ],
};

export default config;
