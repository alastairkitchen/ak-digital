import { useEffect, useRef, useState } from "react";
import { useUpdatePlayer } from "./utils/useUpdatePlayer";
import { useDrawerPlayer } from "./utils/useDrawerPlayer";
import { CollisionObject } from "./collision-objects";
import { COLLISION_DEBUG } from "./const";
import { malletTownCollisionObjects } from "./collision-objects/mallet-town/mallet-town-objects";

type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type InteractionState = {
  isDragging: boolean;
  isResizing: boolean;
  resizeHandle: string | null; // 'n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'
  dragOffset: { x: number; y: number };
};

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
// export let currentScene: CurrentScene = { scene: "alex-house" };

export const useSetupCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { drawPlayer } = useDrawerPlayer();
  const { updatePlayer } = useUpdatePlayer();

  const [rect, setRect] = useState<Rectangle>({
    x: 150,
    y: 100,
    width: 200,
    height: 150,
  });

  const [interaction, setInteraction] = useState<InteractionState>({
    isDragging: false,
    isResizing: false,
    resizeHandle: null,
    dragOffset: { x: 0, y: 0 },
  });

  const HANDLE_SIZE = 8;

  const getMousePos = (canvas: HTMLCanvasElement, event: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const isPointInRect = (point: { x: number; y: number }) => {
    return (
      point.x >= rect.x &&
      point.x <= rect.x + rect.width &&
      point.y >= rect.y &&
      point.y <= rect.y + rect.height
    );
  };

  const getResizeHandle = (mousePos: { x: number; y: number }) => {
    const { x, y, width, height } = rect;
    const handles = {
      // Corners
      nw: { x: x - HANDLE_SIZE / 2, y: y - HANDLE_SIZE / 2 },
      ne: { x: x + width - HANDLE_SIZE / 2, y: y - HANDLE_SIZE / 2 },
      sw: { x: x - HANDLE_SIZE / 2, y: y + height - HANDLE_SIZE / 2 },
      se: { x: x + width - HANDLE_SIZE / 2, y: y + height - HANDLE_SIZE / 2 },
      // Edges
      n: { x: x + width / 2 - HANDLE_SIZE / 2, y: y - HANDLE_SIZE / 2 },
      s: {
        x: x + width / 2 - HANDLE_SIZE / 2,
        y: y + height - HANDLE_SIZE / 2,
      },
      e: {
        x: x + width - HANDLE_SIZE / 2,
        y: y + height / 2 - HANDLE_SIZE / 2,
      },
      w: { x: x - HANDLE_SIZE / 2, y: y + height / 2 - HANDLE_SIZE / 2 },
    };

    for (const [handle, bounds] of Object.entries(handles)) {
      if (
        mousePos.x >= bounds.x &&
        mousePos.x <= bounds.x + HANDLE_SIZE &&
        mousePos.y >= bounds.y &&
        mousePos.y <= bounds.y + HANDLE_SIZE
      ) {
        return handle;
      }
    }
    return null;
  };

  const handleMouseDown = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mousePos = getMousePos(canvas, event);
    const resizeHandle = getResizeHandle(mousePos);

    if (resizeHandle) {
      // Start resizing
      setInteraction({
        isDragging: false,
        isResizing: true,
        resizeHandle,
        dragOffset: { x: 0, y: 0 },
      });
    } else if (isPointInRect(mousePos)) {
      // Start dragging
      setInteraction({
        isDragging: true,
        isResizing: false,
        resizeHandle: null,
        dragOffset: {
          x: mousePos.x - rect.x,
          y: mousePos.y - rect.y,
        },
      });
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mousePos = getMousePos(canvas, event);

    if (interaction.isDragging) {
      setRect((prevRect) => ({
        ...prevRect,
        x: mousePos.x - interaction.dragOffset.x,
        y: mousePos.y - interaction.dragOffset.y,
      }));
    } else if (interaction.isResizing && interaction.resizeHandle) {
      setRect((prevRect) => {
        const newRect = { ...prevRect };
        const handle = interaction.resizeHandle!;

        if (handle.includes("n")) {
          const deltaY = mousePos.y - prevRect.y;
          newRect.y = mousePos.y;
          newRect.height = prevRect.height - deltaY;
        }
        if (handle.includes("s")) {
          newRect.height = mousePos.y - prevRect.y;
        }
        if (handle.includes("w")) {
          const deltaX = mousePos.x - prevRect.x;
          newRect.x = mousePos.x;
          newRect.width = prevRect.width - deltaX;
        }
        if (handle.includes("e")) {
          newRect.width = mousePos.x - prevRect.x;
        }

        // Ensure minimum size
        newRect.width = Math.max(20, newRect.width);
        newRect.height = Math.max(20, newRect.height);

        return newRect;
      });
    } else {
      const resizeHandle = getResizeHandle(mousePos);
      let cursor = "default";

      if (resizeHandle) {
        const cursorMap: Record<string, string> = {
          n: "n-resize",
          s: "s-resize",
          e: "e-resize",
          w: "w-resize",
          ne: "ne-resize",
          nw: "nw-resize",
          se: "se-resize",
          sw: "sw-resize",
        };
        cursor = cursorMap[resizeHandle] || "default";
      } else if (isPointInRect(mousePos)) {
        cursor = "move";
      }

      canvas.style.cursor = cursor;
    }
  };

  const handleMouseUp = () => {
    setInteraction({
      isDragging: false,
      isResizing: false,
      resizeHandle: null,
      dragOffset: { x: 0, y: 0 },
    });
  };

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
    // collisionObjects.push(...alexHouseCollisionObjects);

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

    if (COLLISION_DEBUG) {
      const handles = [
        { x: rect.x, y: rect.y }, // nw
        { x: rect.x + rect.width, y: rect.y }, // ne
        { x: rect.x, y: rect.y + rect.height }, // sw
        { x: rect.x + rect.width, y: rect.y + rect.height }, // se
        { x: rect.x + rect.width / 2, y: rect.y }, // n
        { x: rect.x + rect.width / 2, y: rect.y + rect.height }, // s
        { x: rect.x + rect.width, y: rect.y + rect.height / 2 }, // e
        { x: rect.x, y: rect.y + rect.height / 2 }, // w
      ];

      handles.forEach((handle) => {
        ctx.fillRect(
          handle.x - HANDLE_SIZE / 2,
          handle.y - HANDLE_SIZE / 2,
          HANDLE_SIZE,
          HANDLE_SIZE
        );
        ctx.strokeRect(
          handle.x - HANDLE_SIZE / 2,
          handle.y - HANDLE_SIZE / 2,
          HANDLE_SIZE,
          HANDLE_SIZE
        );
      });
    }

    function gameLoop() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      updatePlayer(canvas, keys, player, collisionObjects);
      drawPlayer(ctx, keys, player);
      drawCollisionObjects(ctx);
      requestAnimationFrame(gameLoop);

      if (COLLISION_DEBUG) {
        // Collision debug rectanglei
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        ctx.strokeStyle = "#1e40af";
        ctx.lineWidth = 2;
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
      }
    }

    // Wait until background image is loaded before starting game loop
    img.onload = () => {
      gameLoop();
    };

    let mouseMoveTimeoutId: any | null = null;

    let debouncedMouseMove = (e: MouseEvent) => {
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

    // Clean up event listeners
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);

      if (COLLISION_DEBUG) {
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mousemove", debouncedMouseMove);
        canvas.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [interaction, rect]);

  return { canvasRef, rect };
};
