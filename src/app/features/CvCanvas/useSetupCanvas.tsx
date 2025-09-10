import { useEffect, useRef } from "react";
import { useUpdatePlayer } from "./utils/useUpdatePlayer";
import { useDrawerPlayer } from "./utils/useDrawerPlayer";

export type Player = {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  dx: number;
  dy: number;
};

export type CollisionObject = {
  id: CollisionObjectId;
  x: number;
  y: number;
  width: number;
  height: number;
  colour: string;
  action?: () => void;
};

type CollisionObjectId =
  | "ali-house-main"
  | "ali-house-door"
  | "alex-house"
  | "oaks-house"
  | "fence1"
  | "fence2"
  | "sign-ali-house"
  | "sign2"
  | "water";

// 31 width
// 33 height
export const player: Player = {
  x: 200,
  y: 300,
  size: 30,
  color: "blue",
  speed: 2,
  dx: 0,
  dy: 0,
};

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

    const book = new Image();
    book.src = "/book-item/11a-blank.gif";

    const aliHouseMain: CollisionObject = {
      id: "ali-house-main",
      x: 101,
      y: 124,
      width: 133,
      height: 129,
      colour: "red",
    };

    const aliHouseDoor: CollisionObject = {
      id: "ali-house-door",
      x: 125,
      y: 222,
      width: 35,
      height: 40,
      colour: "transparent",
      action: () => console.dir("Change scene"),
    };

    const alexHouse: CollisionObject = {
      id: "alex-house",
      x: 341,
      y: 85,
      width: 112,
      height: 85,
      colour: "red",
    };

    const oaksHouse: CollisionObject = {
      id: "oaks-house",
      x: 290,
      y: 225,
      width: 155,
      height: 110,
      colour: "red",
    };

    const fence1: CollisionObject = {
      id: "fence1",
      x: 115,
      y: 256,
      width: 112,
      height: 25,
      colour: "red",
    };

    const fence2: CollisionObject = {
      id: "fence2",
      x: 285,
      y: 370,
      width: 170,
      height: 25,
      colour: "red",
    };

    const signAliHouse: CollisionObject = {
      id: "sign-ali-house",
      x: 80,
      y: 229,
      width: 28,
      height: 25,
      colour: "transparent",
    };

    const sign2: CollisionObject = {
      id: "sign2",
      x: 311,
      y: 142,
      width: 28,
      height: 25,
      colour: "red",
    };

    const water: CollisionObject = {
      id: "water",
      x: 112,
      y: 395,
      width: 115,
      height: 110,
      colour: "red",
    };

    const collisionObjects: CollisionObject[] = [
      aliHouseMain,
      aliHouseDoor,
      alexHouse,
      oaksHouse,
      // fence1,
      // fence2,
      signAliHouse,
      sign2,
      water,
    ];

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
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    function drawCollisionObjects(
      ctx: CanvasRenderingContext2D,
      collisionObjects: CollisionObject[]
    ) {
      collisionObjects.forEach((item) => {
        ctx.fillStyle = item.colour;
        ctx.fillRect(item.x, item.y, item.width, item.height);
      });
    }

    function gameLoop() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      updatePlayer(canvas, keys, player, collisionObjects, img);
      drawPlayer(ctx, keys, player);
      drawCollisionObjects(ctx, collisionObjects);
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

  return { canvasRef, player };
};
