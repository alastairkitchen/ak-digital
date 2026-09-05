---
description: "Use when working in features/game-canvas — the canvas game loop, scenes, player movement, and collision/interaction objects."
applyTo: "features/game-canvas/**"
---

# Game Canvas Guidelines

- The module-level mutable exports in
  [useSetupCanvas.tsx](../../features/game-canvas/useSetupCanvas.tsx) — `player`,
  `collisionObjects`, `interactionObjects`, `currentScene`, `currentGameMode`,
  `currentInteractionCooldownUntil` — are **intentionally** mutated directly
  outside React state so the `requestAnimationFrame` loop can read/write them
  every frame without re-render overhead. Do not refactor these into
  `useState`/Redux; that would reintroduce render churn into the game loop.
- Each scene has a matching `collision-objects/<scene>/` and
  `interaction-objects/<scene>/` file exporting an array of `CollisionObject`
  (see [ali-bedroom-objects.ts](../../features/game-canvas/interaction-objects/ali-bedroom/ali-bedroom-objects.ts)).
  Interaction objects additionally set `interaction`: `playerDirectionToActivate`,
  `modalType`, `cvSection`, `textBoxHeader`, `textBoxContent`.
- Adding a new scene means: add both a `collision-objects/<scene>/` and
  `interaction-objects/<scene>/` file, wire the transition into `changeScene(...)`,
  and add the scene's background image — mirror the existing scenes
  (`mallet-town`, `ali-house`, `alex-house`, `ali-bedroom`, `alex-bedroom`).
- When building the CV-complete unlock on Ali's computer (certificate now,
  Doom easter egg later), extend the `interaction`/`CollisionObject` typing
  generically rather than hardcoding a single content type on that object.
