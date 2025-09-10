"use client";
import { useState } from "react";
import { useSetupCanvas } from "./useSetupCanvas";
import { player } from "./useSetupCanvas";

export const CvCanvas: React.FC = () => {
  const { canvasRef } = useSetupCanvas();

  const [update, setUpdate] = useState(true);

  return (
    <>
      <div>{player.x}</div>
      <div>{player.y}</div>
      <button onClick={() => setUpdate(!update)}>update</button>
      <canvas ref={canvasRef} height="576" width="704"></canvas>
    </>
  );
};
