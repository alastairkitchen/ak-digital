"use client";
import { useSetupCanvas } from "./useSetupCanvas";

export const CvCanvas: React.FC = () => {
  const { canvasRef } = useSetupCanvas();

  return <canvas ref={canvasRef} height="508" width="566"></canvas>;
};
