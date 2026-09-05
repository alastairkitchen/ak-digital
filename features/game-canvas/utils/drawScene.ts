import { CollisionObject } from "../collision-objects";
import { CurrentScene } from "../state/types";
import { SceneImages } from "./useImagePreloader";

export function drawBackground(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  images: SceneImages,
  currentScene: CurrentScene,
) {
  ctx.drawImage(images[currentScene.scene], 0, 0, canvas.width, canvas.height);
}

export function drawCollisionObjects(
  ctx: CanvasRenderingContext2D,
  collisionObjects: CollisionObject[],
) {
  collisionObjects.forEach((item) => {
    ctx.fillStyle = item.colour;
    ctx.fillRect(item.x, item.y, item.width, item.height);
  });
}

export function drawInteractionObjects(
  ctx: CanvasRenderingContext2D,
  interactionObjects: CollisionObject[],
) {
  interactionObjects.forEach((item) => {
    ctx.fillStyle = item.colour;
    ctx.fillRect(item.x, item.y, item.width, item.height);
  });
}
