module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['**/*.test.js'],
  rootDir: '../../',
  testURL: 'http://localhost',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js'
  }
}
