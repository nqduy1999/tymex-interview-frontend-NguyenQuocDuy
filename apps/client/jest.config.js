/** @type {import('ts-jest').JestConfigWithTsJest} **/
import { pathsToModuleNameMapper } from 'ts-jest'

export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true, // export file
  coverageThreshold: {
    '*/**': {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '\\.module\\.(css|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '.+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$':
      'jest-transform-stub'
  }
}
