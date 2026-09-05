---
description: "Use when writing or reviewing Jest/React Testing Library tests."
applyTo: "**/*.test.{ts,tsx}"
---

# Testing Guidelines

- Colocate `*.test.ts`/`*.test.tsx` next to the file under test (see
  [appSlice.test.ts](../../store/appSlice.test.ts)).
- Prefer testing reducers, selectors, and hooks (pure logic) over canvas
  rendering — the game loop draws to `<canvas>`, which jsdom can't meaningfully
  assert on.
- For component tests, use React Testing Library queries (`getByRole`,
  `getByText`, etc.) over snapshot tests.
- Run the suite with `npm run test` (or `npm run test:watch` while iterating).
