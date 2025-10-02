"use client";
import { useState } from "react";
import { useSetupCanvas } from "./useSetupCanvas";
import { player } from "./useSetupCanvas";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./const";
import { Box } from "@chakra-ui/react";
import { TextBox } from "./TextBox";
import { ProgressBanner } from "./ProgressBanner";
import { useSelector } from "react-redux";
import { gameModeSelector } from "@/store/appSlice";

export const GameCanvas: React.FC = () => {
  const { canvasRef, rect } = useSetupCanvas();
  const [update, setUpdate] = useState(true);
  const gameMode = useSelector(gameModeSelector);

  return (
    <>
      <Box inert={true}>
        <div>{player.x}</div>
        <div>{player.y}</div>

        <p className="mt-2">
          <strong>Rectangle:</strong> x: {Math.round(rect.x)}, y:{" "}
          {Math.round(rect.y)}, width: {Math.round(rect.width)}, height:{" "}
          {Math.round(rect.height)}
        </p>
        <button onClick={() => setUpdate(!update)}>update</button>
      </Box>

      <Box
        width={CANVAS_WIDTH}
        position="relative"
        border="1px solid"
        borderColor="whiteAlpha.500"
        overflow="hidden"
        borderRadius="md"
        mb={10}
      >
        <canvas
          ref={canvasRef}
          height={CANVAS_HEIGHT}
          width={CANVAS_WIDTH}
        ></canvas>

        <TextBox />
        <ProgressBanner inert={gameMode === "text-box"} />
      </Box>
    </>
  );
};

export { CANVAS_HEIGHT, CANVAS_WIDTH };
