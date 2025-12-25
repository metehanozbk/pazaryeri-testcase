import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Next.js uygulamanızın yolu
  dir: './',
});

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Alias'ları (@/...) tanıması için
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default createJestConfig(config);