"use client";
import { useEffect, useState } from "react";
import { useSetupCanvas } from "./useSetupCanvas";
import { player } from "./state/gameState";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./const";
import { Box } from "@chakra-ui/react";
import { TextBox } from "./TextBox";
import { ProgressBanner } from "./ProgressBanner";
import { useDispatch, useSelector } from "react-redux";
import {
  gameModeSelector,
  introIsOpenSelector,
  openIntroTextBox,
} from "@/store/appSlice";

export const GameCanvas: React.FC = () => {
  const dispatch = useDispatch();
  const { canvasRef, rect } = useSetupCanvas();
  const [update, setUpdate] = useState(true);
  const gameMode = useSelector(gameModeSelector);
  const introIsOpen = useSelector(introIsOpenSelector);

  useEffect(() => {
    const INTRO_MESSAGE =
      "Welcome to my interactive CV game! Use the keyboard to control the player and interact with the world to find all of the CV sections. Once you have found all 5 collect a special prize on ali's pc.";

    dispatch(
      openIntroTextBox({
        header: "Welcome!",
        content: INTRO_MESSAGE,
      }),
    );
  }, []);

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
        tabIndex={0}
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
          style={{
            filter: introIsOpen ? "blur(3px)" : "none",
            transition: "filter 0.3s ease",
          }}
        ></canvas>

        <TextBox />
        <ProgressBanner
          inert={gameMode === "text-box"}
          filter={introIsOpen ? "blur(3px)" : "none"}
          transition="filter 0.3s ease"
        />
      </Box>
    </>
  );
};

export { CANVAS_HEIGHT, CANVAS_WIDTH };
