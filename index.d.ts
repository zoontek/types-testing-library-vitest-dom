// Type definitions for @testing-library/jest-dom 5.14 (with vitest)
// Project: https://github.com/testing-library/jest-dom
// Definitions by: Ernesto García <https://github.com/gnapse>
//                 John Gozde <https://github.com/jgoz>
//                 Seth Macpherson <https://github.com/smacpherson64>
//                 Andrew Leedham <https://github.com/AndrewLeedham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

import { TestingLibraryMatchers } from "./matchers";

declare module "vitest" {
  interface JestAssertion extends TestingLibraryMatchers<any, void> {}
}
