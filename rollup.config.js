import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'simpleReddit',
  dest: 'index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['es2015', { modules: false }]],
      plugins: ['external-helpers']
    })
  ]
}
