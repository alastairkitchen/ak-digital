---
description: "Use when adding or editing Redux Toolkit slices, actions, or selectors under store/."
applyTo: "store/**"
---

# Redux Guidelines

- One slice per domain (see [appSlice.ts](../../store/appSlice.ts)): state
  shape, reducers, and selectors all live in the same slice file.
- Type every reducer's action payload with `PayloadAction<T>`.
- Export selectors alongside actions with an explicit return type, e.g.
  `export const fooSelector: (state: RootState) => Foo = (state) => ...`.
- Register any new slice's reducer in the root store
  ([store/index.ts](../../store/index.ts)).
