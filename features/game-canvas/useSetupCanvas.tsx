"use client";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  gameModeSelector,
  interactionCooldownUntilSelector,
} from "@/store/appSlice";
import { useUpdatePlayer } from "./utils/useUpdatePlayer";
import { useHandleInteraction } from "./utils/useHandleInteraction";
import { useDrawerPlayer } from "./utils/useDrawerPlayer";
import { useKeyboardInput } from "./utils/useKeyboardInput";
import { useImagePreloader } from "./utils/useImagePreloader";
import {
  drawBackground,
  drawCollisionObjects,
  drawInteractionObjects,
} from "./utils/drawScene";
import { useCollisionDebug } from "./debug/useCollisionDebug";
import { COLLISION_DEBUG } from "./const";
import { malletTownCollisionObjects } from "./collision-objects/mallet-town/mallet-town-objects";
import { malletTownInteractionObjects } from "./interaction-objects/mallet-town/mallet-town-objects";
import {
  player,
  collisionObjects,
  interactionObjects,
  currentScene,
  currentGameMode,
  currentInteractionCooldownUntil,
} from "./state/gameState";

export const useSetupCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { drawPlayer } = useDrawerPlayer();
  const { updatePlayer } = useUpdatePlayer();
  const { handleInteraction } = useHandleInteraction();
  const keysRef = useKeyboardInput();
  const images = useImagePreloader();
  const {
    rect,
    debugInteraction,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    drawDebugOverlay,
  } = useCollisionDebug(canvasRef);

  const gameMode = useSelector(gameModeSelector);
  const interactionCooldownUntil = useSelector(
    interactionCooldownUntilSelector,
  );

  useEffect(() => {
    currentGameMode.mode = gameMode;
  }, [gameMode]);

  useEffect(() => {
    currentInteractionCooldownUntil.value = interactionCooldownUntil;
  }, [interactionCooldownUntil]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    collisionObjects.push(...malletTownCollisionObjects);
    interactionObjects.push(...malletTownInteractionObjects);

    let mouseMoveTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const debouncedMouseMove = (e: MouseEvent) => {
      if (mouseMoveTimeoutId === null) {
        mouseMoveTimeoutId = setTimeout(() => {
          handleMouseMove(e);
          mouseMoveTimeoutId = null;
        }, 50);
      }
    };

    if (COLLISION_DEBUG) {
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", debouncedMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mouseleave", handleMouseUp);
    }

    function gameLoop() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground(ctx, canvas, images, currentScene);
      updatePlayer(canvas, keysRef.current, player, collisionObjects);
      handleInteraction(keysRef.current, player, interactionObjects);
      drawPlayer(ctx, keysRef.current, player);
      drawCollisionObjects(ctx, collisionObjects);
      drawInteractionObjects(ctx, interactionObjects);
      if (COLLISION_DEBUG) drawDebugOverlay(ctx);
      requestAnimationFrame(gameLoop);
    }

    gameLoop();

    return () => {
      if (COLLISION_DEBUG) {
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mousemove", debouncedMouseMove);
        canvas.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [debugInteraction, rect, images]);

  return { canvasRef, rect };
};
