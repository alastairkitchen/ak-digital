"use client";

import { useEffect, useRef } from "react";

type Player = {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  dx: number;
  dy: number;
};

export const ExploreCvCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "http://localhost:3000/canvas-background.jpg";

    const characterUp1 = new Image();
    characterUp1.src = "http://localhost:3000/character-sprites/up-1.png";
    const characterUp2 = new Image();
    characterUp2.src = "http://localhost:3000/character-sprites/up-2.png";
    const characterUp3 = new Image();
    characterUp3.src = "http://localhost:3000/character-sprites/up-3.png";
    const characterUp4 = new Image();
    characterUp4.src = "http://localhost:3000/character-sprites/up-4.png";

    const characterDown1 = new Image();
    characterDown1.src = "http://localhost:3000/character-sprites/down-1.png";
    const characterDown2 = new Image();
    characterDown2.src = "http://localhost:3000/character-sprites/down-2.png";
    const characterDown3 = new Image();
    characterDown3.src = "http://localhost:3000/character-sprites/down-3.png";
    const characterDown4 = new Image();
    characterDown4.src = "http://localhost:3000/character-sprites/down-4.png";

    const characterLeft1 = new Image();
    characterLeft1.src = "http://localhost:3000/character-sprites/left-1.png";
    const characterLeft2 = new Image();
    characterLeft2.src = "http://localhost:3000/character-sprites/left-2.png";
    const characterLeft3 = new Image();
    characterLeft3.src = "http://localhost:3000/character-sprites/left-3.png";
    const characterLeft4 = new Image();
    characterLeft4.src = "http://localhost:3000/character-sprites/left-4.png";

    const characterRight1 = new Image();
    characterRight1.src = "http://localhost:3000/character-sprites/right-1.png";
    const characterRight2 = new Image();
    characterRight2.src = "http://localhost:3000/character-sprites/right-2.png";
    const characterRight3 = new Image();
    characterRight3.src = "http://localhost:3000/character-sprites/right-3.png";
    const characterRight4 = new Image();
    characterRight4.src = "http://localhost:3000/character-sprites/right-4.png";

    const book = new Image();
    book.src = "http://localhost:3000/book-item/11a-blank.gif";

    const collisionHouse = {
      x: 114,
      y: 85,
      width: 112,
      height: 85,
      colour: "rgba(255, 0, 0, 0)",
    };

    const collisionHouse2 = {
      x: 341,
      y: 85,
      width: 112,
      height: 85,
      colour: "red",
    };

    let currentCharacter: HTMLImageElement = characterDown1;

    // 31 width
    // 33 height
    const player: Player = {
      x: 200,
      y: 200,
      size: 30,
      color: "blue",
      speed: 2,
      dx: 0,
      dy: 0,
    };

    let startXPosition: number = player.x;
    let startYPosition: number = player.y;

    const keys: Record<string, boolean> = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    function updatePlayer(
      canvas: HTMLCanvasElement | null,
      keys: Record<string, boolean>,
      player: Player
    ) {
      if (!canvas) return;

      // console.dir(player.dx);

      player.dx = 0;
      player.dy = 0;

      if (keys["ArrowUp"] || keys["w"]) player.dy = -player.speed;
      if (keys["ArrowDown"] || keys["s"]) player.dy = player.speed;
      if (keys["ArrowLeft"] || keys["a"]) player.dx = -player.speed;
      if (keys["ArrowRight"] || keys["d"]) player.dx = player.speed;

      if (
        player.x < collisionHouse.x + collisionHouse.width &&
        player.x + player.size > collisionHouse.x &&
        player.y < collisionHouse.y + collisionHouse.height &&
        player.y + player.size > collisionHouse.y
      ) {
        if (player.dx < 0) {
          player.x -= player.dx - 1;
        } else {
          player.x -= player.dx + 1;
        }

        if (player.dy < 0) {
          player.y -= player.dy - 1;
        } else {
          player.y -= player.dy + 1;
        }

        return;
      }

      player.x += player.dx;
      player.y += player.dy;

      // Clamp position
      player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
      player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
    }

    function drawBackground() {
      if (!ctx || !canvas) return;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    function drawPlayer() {
      if (!ctx) return;

      if (
        player.x < collisionHouse.x + collisionHouse.width &&
        player.x + player.size > collisionHouse.x &&
        player.y < collisionHouse.y + collisionHouse.height &&
        player.y + player.size > collisionHouse.y
      ) {
        // console.dir("COLLISION");
        // currentCharacter = book;
      } else {
        if (keys["ArrowUp"] || keys["w"]) {
          if (
            player.y >= startYPosition - 10 &&
            player.y <= startYPosition - 1
          ) {
            currentCharacter = characterUp1;
          }
          if (
            player.y >= startYPosition - 20 &&
            player.y <= startYPosition - 11
          ) {
            currentCharacter = characterUp2;
          }
          if (
            player.y >= startYPosition - 30 &&
            player.y <= startYPosition - 21
          ) {
            currentCharacter = characterUp3;
          }
          if (
            player.y >= startYPosition - 40 &&
            player.y <= startYPosition - 31
          ) {
            currentCharacter = characterUp4;
          }
        }
        if (keys["ArrowDown"] || keys["s"]) {
          if (player.y >= startYPosition && player.y <= startYPosition + 9) {
            currentCharacter = characterDown1;
          }
          if (
            player.y >= startYPosition + 10 &&
            player.y <= startYPosition + 19
          ) {
            currentCharacter = characterDown2;
          }
          if (
            player.y >= startYPosition + 20 &&
            player.y <= startYPosition + 29
          ) {
            currentCharacter = characterDown3;
          }
          if (
            player.y >= startYPosition + 30 &&
            player.y <= startYPosition + 39
          ) {
            currentCharacter = characterDown4;
          }
        }
        if (keys["ArrowLeft"] || keys["a"]) {
          if (
            player.x >= startXPosition - 10 &&
            player.x <= startXPosition - 1
          ) {
            currentCharacter = characterLeft1;
          }
          if (
            player.x >= startXPosition - 20 &&
            player.x <= startXPosition - 11
          ) {
            currentCharacter = characterLeft2;
          }
          if (
            player.x >= startXPosition - 30 &&
            player.x <= startXPosition - 21
          ) {
            currentCharacter = characterLeft3;
          }
          if (
            player.x >= startXPosition - 40 &&
            player.x <= startXPosition - 31
          ) {
            currentCharacter = characterLeft4;
          }
        }
        if (keys["ArrowRight"] || keys["d"]) {
          if (player.x >= startXPosition && player.x <= startXPosition + 9) {
            currentCharacter = characterRight1;
          }
          if (
            player.x >= startXPosition + 10 &&
            player.x <= startXPosition + 19
          ) {
            currentCharacter = characterRight2;
          }
          if (
            player.x >= startXPosition + 20 &&
            player.x <= startXPosition + 29
          ) {
            currentCharacter = characterRight3;
          }
          if (
            player.x >= startXPosition + 30 &&
            player.x <= startXPosition + 39
          ) {
            currentCharacter = characterRight4;
          }
        }
      }

      ctx.drawImage(
        currentCharacter,
        player.x,
        player.y,
        player.size,
        player.size
      );

      if (player.y >= startYPosition + 40 || player.y <= startYPosition - 40) {
        startYPosition = player.y;
      }
      if (player.x >= startXPosition + 40 || player.x <= startXPosition - 40) {
        startXPosition = player.x;
      }
    }

    function gameLoop() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      updatePlayer(canvas, keys, player);
      drawPlayer();
      ctx.fillStyle = collisionHouse.colour;
      ctx.fillRect(
        collisionHouse.x,
        collisionHouse.y,
        collisionHouse.width,
        collisionHouse.height
      );
      ctx.fillStyle = collisionHouse2.colour;
      ctx.fillRect(
        collisionHouse2.x,
        collisionHouse2.y,
        collisionHouse2.width,
        collisionHouse2.height
      );
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

  return <canvas ref={canvasRef} height="508" width="566"></canvas>;
};
