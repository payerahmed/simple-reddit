import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'SimpleReddit',
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
      presets: [
        [
          'env',
          {
            targets: {
              browsers: ['>= 5%', 'last 2 versions']
            },
            modules: false,
            useBuiltIns: true
          }
        ]
      ],
      plugins: ['external-helpers', 'transform-class-properties']
    }),
    uglify({
      mangle: false
    })
  ]
}
