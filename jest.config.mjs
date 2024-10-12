// jest.config.mjs
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Make sure this is present
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Check this path is correct
};
