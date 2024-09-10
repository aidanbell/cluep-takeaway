module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // To handle JavaScript and JSX files as well
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^jose": require.resolve("jose"),
    "^@panva/hkdf": require.resolve("@panva/hkdf"),
    "^preact-render-to-string": require.resolve("preact-render-to-string"),
    "^preact": require.resolve("preact"),
    "^uuid": require.resolve("uuid"),
  },
};
