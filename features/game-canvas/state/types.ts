import { GameMode } from "@/store/appSlice";

export type PlayerDirection = "up" | "down" | "left" | "right" | "idle";

export type Player = {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  dx: number;
  dy: number;
  direction: PlayerDirection;
};

export type Scene =
  | "mallet-town"
  | "ali-house"
  | "alex-house"
  | "ali-bedroom"
  | "alex-bedroom";

export type CurrentScene = { scene: Scene };
export type CurrentGameMode = { mode: GameMode };
export type CurrentCooldownUntil = { value: number | null };
