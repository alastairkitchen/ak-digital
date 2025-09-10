import { useEffect, useRef } from "react";
import { useUpdatePlayer } from "./utils/useUpdatePlayer";
import { useDrawerPlayer } from "./utils/useDrawerPlayer";
import {
  CollisionObject,
  malletTownCollisionObjects,
} from "./data/collision-objects";

export type Player = {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  dx: number;
  dy: number;
};

type Scene =
  | "mallet-town"
  | "ali-house"
  | "alex-house"
  | "ali-bedroom"
  | "alex-bedroom";

type CurrentScene = {
  scene: Scene;
};

export let player: Player = {
  x: 200,
  y: 300,
  size: 30,
  color: "blue",
  speed: 2,
  dx: 0,
  dy: 0,
};

export const changeScene = (
  intendedScene: Scene,
  playerX: number,
  playerY: number,
  currentScene: CurrentScene,
  intendedCollisionObjects: CollisionObject[]
) => {
  currentScene.scene = intendedScene;
  player.x = playerX;
  player.y = playerY;
  player.dx = 0;
  player.dy = 0;
  collisionObjects = intendedCollisionObjects;
};

function drawCollisionObjects(ctx: CanvasRenderingContext2D) {
  collisionObjects.forEach((item) => {
    ctx.fillStyle = item.colour;
    ctx.fillRect(item.x, item.y, item.width, item.height);
  });
}

export let collisionObjects: CollisionObject[] = [];
export let currentScene: CurrentScene = { scene: "mallet-town" };

export const useSetupCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { drawPlayer } = useDrawerPlayer();
  const { updatePlayer } = useUpdatePlayer();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "/mallet-town.png";

    const aliHouseImg = new Image();
    aliHouseImg.src = "/ali-house.png";

    const alexHouseImg = new Image();
    alexHouseImg.src = "/alex-house.png";

    const aliBedroomImg = new Image();
    aliBedroomImg.src = "/ali-house-bedroom.png";

    const alexBedroomImg = new Image();
    alexBedroomImg.src = "/alex-bedroom.png";

    collisionObjects.push(...malletTownCollisionObjects);

    const keys: Record<string, boolean> = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    function drawBackground() {
      if (!ctx || !canvas) return;

      if (currentScene.scene === "mallet-town") {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      } else if (currentScene.scene === "ali-house") {
        ctx.drawImage(aliHouseImg, 0, 0, canvas.width, canvas.height);
      } else if (currentScene.scene === "alex-house") {
        ctx.drawImage(alexHouseImg, 0, 0, canvas.width, canvas.height);
      } else if (currentScene.scene === "ali-bedroom") {
        ctx.drawImage(aliBedroomImg, 0, 0, canvas.width, canvas.height);
      } else if (currentScene.scene === "alex-bedroom") {
        ctx.drawImage(alexBedroomImg, 0, 0, canvas.width, canvas.height);
      }
    }

    function gameLoop() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      updatePlayer(canvas, keys, player, collisionObjects);
      drawPlayer(ctx, keys, player);
      drawCollisionObjects(ctx);
      requestAnimationFrame(gameLoop);
    }

    // Wait until background image is loaded before starting game loop
    img.onload = () => {
      gameLoop();
    };

    // Clean up event listeners
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return { canvasRef };
};
