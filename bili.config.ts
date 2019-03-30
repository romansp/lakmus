import { Config } from 'bili'

const config: Config = {
  input: 'src/index.ts',
  babel: {
    minimal: true
  },
  output: {
    fileName: 'lakmus.[format].js',
    format: ['esm', 'cjs', 'umd'],
    moduleName: 'lakmus',
  },
  plugins: {
    typescript2: {
      tsconfigOverride: {
        include: ['src']
      }
    }
  }
}

export default config