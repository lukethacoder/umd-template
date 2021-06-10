import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import dotenv from 'dotenv';
dotenv.config();

console.log('Creating package with name ', process.env.PACKAGE_NAME);

const config = {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: process.env.PACKAGE_NAME,
  },
  plugins: [commonjs(), resolve()],
};

export default config;
