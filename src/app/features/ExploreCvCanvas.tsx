"use client";

import { useEffect, useRef, useState } from "react";

export const ExploreCvCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "http://localhost:3000/canvas-background.jpg";

    const player = {
      x: 200,
      y: 200,
      size: 30,
      color: "blue",
      speed: 2,
      dx: 0,
      dy: 0,
    };

    const keys: Record<string, boolean> = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    function updatePlayer() {
      player.dx = 0;
      player.dy = 0;

      if (keys["ArrowUp"] || keys["w"]) player.dy = -player.speed;
      if (keys["ArrowDown"] || keys["s"]) player.dy = player.speed;
      if (keys["ArrowLeft"] || keys["a"]) player.dx = -player.speed;
      if (keys["ArrowRight"] || keys["d"]) player.dx = player.speed;

      player.x += player.dx;
      player.y += player.dy;

      // Clamp position
      player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
      player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
    }

    function drawBackground() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    function drawPlayer() {
      ctx.fillStyle = player.color;
      ctx.fillRect(player.x, player.y, player.size, player.size);
    }

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      updatePlayer();
      drawPlayer();
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
