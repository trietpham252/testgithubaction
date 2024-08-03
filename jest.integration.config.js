module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.integration.[jt]s?(x)', '**/?(*.)+(integration).[jt]s?(x)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  };
  