module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.unit.[jt]s?(x)', '**/?(*.)+(unit).[jt]s?(x)'],
  transform: {
    '^.+\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\.(css|less)$': 'identity-obj-proxy',
  },
};
