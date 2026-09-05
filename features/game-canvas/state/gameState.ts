import { CollisionObject } from "../collision-objects";
import {
  CurrentCooldownUntil,
  CurrentGameMode,
  CurrentScene,
  Player,
} from "./types";

// Module-level mutable state read/written every frame by the game loop —
// see game-canvas.instructions.md for why this isn't React state/Redux.
export let player: Player = {
  x: 200,
  y: 300,
  size: 30,
  color: "blue",
  speed: 2,
  dx: 0,
  dy: 0,
  direction: "down",
};

export let collisionObjects: CollisionObject[] = [];
export let interactionObjects: CollisionObject[] = [];
export let currentScene: CurrentScene = { scene: "mallet-town" };
export let currentGameMode: CurrentGameMode = { mode: "game" };
export let currentInteractionCooldownUntil: CurrentCooldownUntil = {
  value: null,
};

export const changeScene = (
  intendedScene: CurrentScene["scene"],
  playerX: number,
  playerY: number,
  currentScene: CurrentScene,
  intendedCollisionObjects: CollisionObject[],
  intendedInteractionObjects: CollisionObject[],
) => {
  currentScene.scene = intendedScene;
  player.x = playerX;
  player.y = playerY;
  player.dx = 0;
  player.dy = 0;
  collisionObjects = intendedCollisionObjects;
  interactionObjects = intendedInteractionObjects;
};
