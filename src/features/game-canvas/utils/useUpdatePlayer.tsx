import { CollisionObject } from "../collision-objects";
import { Player } from "../useSetupCanvas";
import { wouldCollide } from "./would-collide";

export const useUpdatePlayer = () => {
  const updatePlayer = (
    canvas: HTMLCanvasElement | null,
    keys: Record<string, boolean>,
    player: Player,
    collisionObjects: CollisionObject[]
  ) => {
    if (!canvas) return;

    player.dx = 0;
    player.dy = 0;

    if (keys["ArrowUp"] || keys["w"]) {
      player.dy = -player.speed;
      player.direction = "up";
    }
    if (keys["ArrowDown"] || keys["s"]) {
      player.dy = player.speed;
      player.direction = "down";
    }
    if (keys["ArrowLeft"] || keys["a"]) {
      player.dx = -player.speed;
      player.direction = "left";
    }
    if (keys["ArrowRight"] || keys["d"]) {
      player.dx = player.speed;
      player.direction = "right";
    }

    const newX = player.x + player.dx;
    const newY = player.y + player.dy;

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

    const { isColliding } = wouldCollide(
      finalX,
      finalY,
      collisionObjects,
      player
    );

    // Check diagonal movement (both x and y changed)
    if (isColliding) {
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
