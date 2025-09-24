export const COLLISION_ACTION_COLOUR = "transparent";
export const COLLISION_COLOUR = "transparent";

export type CollisionObject = {
  x: number;
  y: number;
  width: number;
  height: number;
  colour: string;
  action?: () => void;
};
