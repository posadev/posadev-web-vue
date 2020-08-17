module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 80,
      lines: 80,
      statements: -10
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue,ts}',
    '!src/**/*.model.{js,vue,ts}',
    '!src/main.ts' // No need to cover bootstrap file
  ]
};