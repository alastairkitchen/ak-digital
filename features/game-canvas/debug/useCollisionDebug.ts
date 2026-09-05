"use client";
import { RefObject, useState } from "react";

type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type DebugInteractionState = {
  isDragging: boolean;
  isResizing: boolean;
  resizeHandle: string | null; // 'n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'
  dragOffset: { x: number; y: number };
};

const HANDLE_SIZE = 8;

// Draggable/resizable rectangle overlay used to measure collision boxes on the
// background image. Only wired up when COLLISION_DEBUG is enabled.
export const useCollisionDebug = (
  canvasRef: RefObject<HTMLCanvasElement | null>,
) => {
  const [rect, setRect] = useState<Rectangle>({
    x: 150,
    y: 100,
    width: 200,
    height: 150,
  });

  const [debugInteraction, setDebugInteraction] =
    useState<DebugInteractionState>({
      isDragging: false,
      isResizing: false,
      resizeHandle: null,
      dragOffset: { x: 0, y: 0 },
    });

  const getMousePos = (canvas: HTMLCanvasElement, event: MouseEvent) => {
    const bounds = canvas.getBoundingClientRect();
    return {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
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
      setDebugInteraction({
        isDragging: false,
        isResizing: true,
        resizeHandle,
        dragOffset: { x: 0, y: 0 },
      });
    } else if (isPointInRect(mousePos)) {
      setDebugInteraction({
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

    if (debugInteraction.isDragging) {
      setRect((prevRect) => ({
        ...prevRect,
        x: mousePos.x - debugInteraction.dragOffset.x,
        y: mousePos.y - debugInteraction.dragOffset.y,
      }));
    } else if (debugInteraction.isResizing && debugInteraction.resizeHandle) {
      setRect((prevRect) => {
        const newRect = { ...prevRect };
        const handle = debugInteraction.resizeHandle!;

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
    setDebugInteraction({
      isDragging: false,
      isResizing: false,
      resizeHandle: null,
      dragOffset: { x: 0, y: 0 },
    });
  };

  const drawDebugOverlay = (ctx: CanvasRenderingContext2D) => {
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
        HANDLE_SIZE,
      );
      ctx.strokeRect(
        handle.x - HANDLE_SIZE / 2,
        handle.y - HANDLE_SIZE / 2,
        HANDLE_SIZE,
        HANDLE_SIZE,
      );
    });

    ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    ctx.strokeStyle = "#1e40af";
    ctx.lineWidth = 2;
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  };

  return {
    rect,
    debugInteraction,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    drawDebugOverlay,
  };
};
