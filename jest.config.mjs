import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
const config = {
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
  setupFilesAfterEnv: ['./jest.setup.ts']
};

export default config;
