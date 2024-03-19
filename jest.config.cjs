module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // setupFiles: ["<rootDir>/src/__mocks__/mockImportMeta.ts"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.ts"],
  snapshotSerializers: ["jest-styled-components"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg|ico|webp)$": "identity-obj-proxy", // This is to map over images and use the 'identity-obj-proxy' to let the test recognize images
    gsap: "<rootDir>/src/__mocks__/gsap.ts",
    "^import\\.meta$": "<rootDir>/src/__mocks__/mockEnv.ts",
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "/src/utils/config.ts", // Add the path to your config.ts file
  ],
};
