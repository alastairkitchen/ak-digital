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

type Scene =
  | "mallet-town"
  | "ali-house"
  | "alex-house"
  | "ali-bedroom"
  | "alex-bedroom";

type CurrentScene = {
  scene: Scene;
};

export type CollisionObject = {
  x: number;
  y: number;
  width: number;
  height: number;
  colour: string;
  action?: () => void;
};

const changeScene = (
  intendedScene: Scene,
  playerX: number,
  playerY: number,
  player: Player,
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
  collisionObjects.forEach((item, i) => {
    ctx.fillStyle = item.colour;
    ctx.fillRect(item.x, item.y, item.width, item.height);
  });
}

const COLLISION_ACTION_COLOUR = "transparent";
const COLLISION_COLOUR = "transparent";

export let player: Player = {
  x: 200,
  y: 300,
  size: 30,
  color: "blue",
  speed: 2,
  dx: 0,
  dy: 0,
};
let collisionObjects: CollisionObject[] = [];
let currentScene: CurrentScene = { scene: "mallet-town" };

const aliHouseMain: CollisionObject = {
  x: 130,
  y: 165,
  width: 160,
  height: 120,
  colour: COLLISION_COLOUR,
};

const aliHouseDoor: CollisionObject = {
  x: 158,
  y: 260,
  width: 35,
  height: 40,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "ali-house",
      240,
      500,
      player,
      currentScene,
      aliHouseCollisionObjects
    ),
};

const aliHouseExitFrontDoor: CollisionObject = {
  x: 222,
  y: 540,
  width: 68,
  height: 30,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "mallet-town",
      300,
      300,
      player,
      currentScene,
      malletTownCollisionObjects
    ),
};

const aliHouseExitBackDoor: CollisionObject = {
  x: 575,
  y: 65,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "mallet-town",
      300,
      300,
      player,
      currentScene,
      malletTownCollisionObjects
    ),
};

const aliEnterBedroomDoor: CollisionObject = {
  x: 95,
  y: 65,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "ali-bedroom",
      300,
      300,
      player,
      currentScene,
      aliBedroomCollisionObjects
    ),
};

const aliBedroomExitDoor: CollisionObject = {
  x: 128,
  y: 97,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "ali-house",
      300,
      300,
      player,
      currentScene,
      aliHouseCollisionObjects
    ),
};

const alexHouse: CollisionObject = {
  x: 418,
  y: 165,
  width: 160,
  height: 120,
  colour: COLLISION_COLOUR,
};

const alexHouseDoor: CollisionObject = {
  x: 478,
  y: 260,
  width: 35,
  height: 40,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "alex-house",
      100,
      500,
      player,
      currentScene,
      alexHouseCollisionObjects
    ),
};

const alexHouseExitFrontDoor: CollisionObject = {
  x: 320,
  y: 540,
  width: 65,
  height: 30,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "mallet-town",
      300,
      300,
      player,
      currentScene,
      malletTownCollisionObjects
    ),
};

const alexHouseExitBackDoor: CollisionObject = {
  x: 96,
  y: 64,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "mallet-town",
      300,
      300,
      player,
      currentScene,
      malletTownCollisionObjects
    ),
};
const alexEnterBedroomDoor: CollisionObject = {
  x: 576,
  y: 64,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "alex-bedroom",
      300,
      300,
      player,
      currentScene,
      alexBedroomCollisionObjects
    ),
};

const alexBedroomExitDoor: CollisionObject = {
  x: 512,
  y: 98,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "alex-house",
      300,
      300,
      player,
      currentScene,
      alexHouseCollisionObjects
    ),
};

const signAlexHouse: CollisionObject = {
  x: 388,
  y: 260,
  width: 28,
  height: 25,
  colour: COLLISION_COLOUR,
};

const fence1: CollisionObject = {
  x: 285,
  y: 370,
  width: 170,
  height: 25,
  colour: COLLISION_COLOUR,
};

const signAliHouse: CollisionObject = {
  x: 98,
  y: 260,
  width: 28,
  height: 25,
  colour: COLLISION_COLOUR,
};

const water: CollisionObject = {
  x: 112,
  y: 395,
  width: 115,
  height: 110,
  colour: COLLISION_COLOUR,
};

const malletTownCollisionObjects = [
  aliHouseMain,
  aliHouseDoor,
  alexHouseDoor,
  alexHouse,
  fence1,
  signAliHouse,
  signAlexHouse,
  water,
];

const aliHouseCollisionObjects = [
  aliHouseExitFrontDoor,
  aliHouseExitBackDoor,
  aliEnterBedroomDoor,
];
const alexHouseCollisionObjects = [
  alexHouseExitFrontDoor,
  alexHouseExitBackDoor,
  alexEnterBedroomDoor,
];
const aliBedroomCollisionObjects = [aliBedroomExitDoor];
const alexBedroomCollisionObjects = [alexBedroomExitDoor];

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
