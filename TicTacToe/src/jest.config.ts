module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'babel-jest', // Use babel-jest to transform .ts and .tsx files
    },
    moduleNameMapper: {
      '^react$': 'react',
      '^react-dom$': 'react-dom',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'], // Add Jest-DOM matchers
  };
      