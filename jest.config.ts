export default {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.ts"],
  snapshotSerializers: ["jest-styled-components"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg|ico|webp)$": "identity-obj-proxy", // This is to map over images and use the 'identity-obj-proxy' to let the test recognize images
    gsap: "<rootDir>/src/__mocks__/gsap.ts",
    "^import\\.meta$": "<rootDir>/src/__mocks__/mockEnv.ts",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx", ".jsx"],
  globals: {
    "ts-jest": {
      useESM: true,
      babelConfig: true,
    },
  },
  transformIgnorePatterns: [
    "/src/utils/config.ts", // Add the path to your config.ts file
  ],
};
