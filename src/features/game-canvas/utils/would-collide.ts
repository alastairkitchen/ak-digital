import { CollisionObject } from "../collision-objects";
import { Player } from "../useSetupCanvas";

type WouldCollide = {
  x: number;
  y: number;
  collisionObjects: CollisionObject[];
  player: Player;
};

export const wouldCollide = (
  x: number,
  y: number,
  collisionObjects: CollisionObject[],
  player: Player
) => {
  for (let i = 0; i < collisionObjects.length; i++) {
    const obj = collisionObjects[i];

    if (
      x < obj.x + obj.width &&
      x + player.size > obj.x &&
      y < obj.y + obj.height &&
      y + player.size > obj.y
    ) {
      if (!!obj.action) {
        obj.action();
      }

      return { isColliding: true, collidingObject: obj };
    }
  }
  return { isColliding: false, collidingObject: null };
};
