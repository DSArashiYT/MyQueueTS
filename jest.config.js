/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/$1',
    '^@main/(.*)$': '<rootDir>/main/$1',
    '^@quoue/(.*)$': '<rootDir>/quoue/$1',
  }
};