module.exports = {
  rootDir: '.',
  roots: ['<rootDir>/'],
  preset: 'ts-jest',
  globals: {'ts-jest': {diagnostics: true}},
  automock: false,
  clearMocks: true,
  transform: {'^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'},
  testRegex: ['(/test/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$'],
  modulePaths: [],
  moduleFileExtensions: ['ts','tsx', 'js', 'jsx', 'json','node'],
  /**
   * coverage config
   */
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: ['json', 'html', 'lcov', 'text', 'text-summary', 'clover'],
  coverageThreshold: {global: {statements: 95, functions: 95, branches: 95, lines: 95}},
  collectCoverageFrom: ['./packages/a/**/*.ts', './packages/b/**/*.ts', '!**/stories/*'], // , '!**/index*'
};