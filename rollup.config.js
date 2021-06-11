import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

import dotenv from 'dotenv';
dotenv.config();

console.log('Creating package with name ', process.env.PACKAGE_NAME);

const plugins = [json(), commonjs(), resolve()];

// if marked as production in .env include the minify + obfuscation
if (process.env.NODE_ENV === 'production') {
  plugins.push(terser());
}

const config = {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: process.env.PACKAGE_NAME,
  },
  plugins,
};

export default config;
