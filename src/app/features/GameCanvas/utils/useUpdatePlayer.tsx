import { CollisionObject } from "../data/collision-objects";
import { Player } from "../useSetupCanvas";

export const useUpdatePlayer = () => {
  const updatePlayer = (
    canvas: HTMLCanvasElement | null,
    keys: Record<string, boolean>,
    player: Player,
    collisionObjects: CollisionObject[]
  ) => {
    if (!canvas) return;

    // Reset movement
    player.dx = 0;
    player.dy = 0;

    // Set movement based on input
    if (keys["ArrowUp"] || keys["w"]) player.dy = -player.speed;
    if (keys["ArrowDown"] || keys["s"]) player.dy = player.speed;
    if (keys["ArrowLeft"] || keys["a"]) player.dx = -player.speed;
    if (keys["ArrowRight"] || keys["d"]) player.dx = player.speed;

    // Calculate new position
    const newX = player.x + player.dx;
    const newY = player.y + player.dy;

    const wouldCollide = (
      x: number,
      y: number,
      collisionObjects: CollisionObject[]
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

          return true;
        }
      }
      return false;
    };

    // Check horizontal movement
    let finalX = newX;
    let finalY = newY;

    // if (wouldCollide(newX, player.y, collisionObjects)) {
    //   finalX = player.x; // Don't move horizontally if it would cause collision
    // }

    // // Check vertical movement
    // if (wouldCollide(player.x, newY, collisionObjects)) {
    //   finalY = player.y; // Don't move vertically if it would cause collision
    // }

    // Check diagonal movement (both x and y changed)
    if (wouldCollide(finalX, finalY, collisionObjects)) {
      // If both movements would cause collision, don't move at all
      finalX = player.x;
      finalY = player.y;
    }

    // Apply the movement
    player.x = finalX;
    player.y = finalY;

    // Clamp position to canvas bounds
    // player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    // player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
  };

  return { updatePlayer };
};
