const path = require('path')

const fromRoot = d => path.join(__dirname, d)

module.exports = {
  roots: [fromRoot('apps/client')],
  preset: 'ts-jest/presets/default-esm',
  resetMocks: true,
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx}'],
  coverageThreshold: null,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    '.+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg|webp)$':
      'jest-transform-stub',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '@client/(.*)': fromRoot('apps/client/src/$1'),
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
}
