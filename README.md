# types-testing-library-vitest-dom

## Installation (yarn)

```json
"resolutions": {
  "@types/testing-library__jest-dom": "github:zoontek/types-testing-library-vitest-dom"
}
```

## Installation (npm)

```json
"overrides": {
  "@types/testing-library__jest-dom": "github:zoontek/types-testing-library-vitest-dom"
}
```

## Test setup file

```ts
import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);
```

# Summary

This package contains type definitions for [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) (with vitest).

# Credits

These definitions were written by [Ernesto García](https://github.com/gnapse), [John Gozde](https://github.com/jgoz), [Seth Macpherson](https://github.com/smacpherson64), and [Andrew Leedham](https://github.com/AndrewLeedham).
