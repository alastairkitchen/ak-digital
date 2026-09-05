# Project Guidelines

## Product

A top-down adventure game (Pokémon Red/Blue/Silver-style) that showcases the
author's CV. The world is a town (`mallet-town`) with two explorable houses
(Ali's, Alex's), each with a bedroom scene. The player walks around and
interacts with objects to reveal CV sections (`experience`, `skills`,
`education`, `projects`, `summary` — see `CvSection`/`ModalType` in
[store/appSlice.ts](../store/appSlice.ts)). Collecting all sections triggers a
congratulations message (`congratsMessageShown`).

**Roadmap** (don't design against this): once all CV sections are collected,
a certificate becomes viewable on Ali's in-game computer (first iteration); a
future easter egg unlocks a playable Doom instance on the same computer.
Keep any "all sections collected" unlock logic on that interaction object
generic enough to extend from "show certificate" to "launch embedded content"
later — avoid hardcoding a single modal/content type there.

## Stack

Next.js 15 (App Router), React 19, TypeScript (strict), Chakra UI v3,
Redux Toolkit + react-redux, Tailwind via PostCSS, ESLint
(`next/core-web-vitals`, `next/typescript`), Jest + React Testing Library.

## Architecture

- Feature-folder layout under [features/](../features/): each feature owns its
  components/hooks/utils, with a barrel `index.ts` re-exporting the public API
  (see [features/shared/index.ts](../features/shared/index.ts)).
- Redux: one slice per domain, reducers + typed selectors colocated in the
  slice file (see [store/appSlice.ts](../store/appSlice.ts)), registered in the
  single root reducer in [store/index.ts](../store/index.ts).
- See [game-canvas instructions](instructions/game-canvas.instructions.md) for
  canvas/game-loop specific rules.

## Build and Test

- `npm run dev` / `npm run build` / `npm run lint` / `npm run test`

## Conventions

- Prefer native browser/React/Next APIs before reaching for a new dependency.
- Keep files organized under the existing feature-folder structure — don't
  scatter related logic outside its feature folder.
- Don't introduce a new state-management pattern where Redux or local
  component state already fits.
