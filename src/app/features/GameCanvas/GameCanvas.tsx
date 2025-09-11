"use client";
import { useState } from "react";
import { useSetupCanvas } from "./useSetupCanvas";
import { player } from "./useSetupCanvas";

export const GameCanvas: React.FC = () => {
  const { canvasRef, rect } = useSetupCanvas();

  const [update, setUpdate] = useState(true);

  return (
    <>
      <div>{player.x}</div>
      <div>{player.y}</div>

      <p className="mt-2">
        <strong>Rectangle:</strong> x: {Math.round(rect.x)}, y:{" "}
        {Math.round(rect.y)}, width: {Math.round(rect.width)}, height:{" "}
        {Math.round(rect.height)}
      </p>
      <button onClick={() => setUpdate(!update)}>update</button>
      <canvas ref={canvasRef} height="576" width="704"></canvas>
    </>
  );
};
