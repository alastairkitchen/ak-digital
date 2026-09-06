"use client";
import { RefObject } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import {
  activateTextBoxConfirmSelection,
  advanceTextBox,
  retreatTextBoxChunk,
  setTextBoxConfirmSelection,
  textBoxIsOpenSelector,
  textBoxStepSelector,
} from "../../store/appSlice";

type MobileControlsProps = {
  keysRef: RefObject<Record<string, boolean>>;
};

const DIRECTION_KEYS = {
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
} as const;

export const MobileControls: React.FC<MobileControlsProps> = ({ keysRef }) => {
  const dispatch = useDispatch<AppDispatch>();
  const textBoxIsOpen = useSelector(textBoxIsOpenSelector);
  const textBoxStep = useSelector(textBoxStepSelector);

  const release = (key: string) => (e: React.PointerEvent) => {
    e.preventDefault();
    keysRef.current[key] = false;
  };

  const directionButton = (
    key: string,
    label: string,
    gridColumn: number,
    gridRow: number,
    onTextBoxPress?: () => void,
  ) => (
    <Button
      aria-label={label}
      onPointerDown={(e) => {
        e.preventDefault();
        if (textBoxIsOpen && onTextBoxPress) {
          onTextBoxPress();
          return;
        }
        keysRef.current[key] = true;
      }}
      onPointerUp={release(key)}
      onPointerLeave={release(key)}
      onPointerCancel={release(key)}
      style={{ touchAction: "none", gridColumn, gridRow }}
      size="lg"
      variant="surface"
      bg="white"
      color="black"
    >
      {label}
    </Button>
  );

  const pressInteraction = () => (e: React.PointerEvent) => {
    e.preventDefault();
    if (textBoxIsOpen) {
      dispatch(activateTextBoxConfirmSelection());
      return;
    }
    keysRef.current["Enter"] = true;
  };

  const releaseInteraction = () => (e: React.PointerEvent) => {
    e.preventDefault();
    keysRef.current["Enter"] = false;
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" p="0 15px">
      <Box
        display={{ base: "grid", md: "none" }}
        zIndex={10}
        gridTemplateColumns="repeat(3, 48px)"
        gridTemplateRows="repeat(3, 48px)"
        gap={1}
      >
        {directionButton(DIRECTION_KEYS.up, "↑", 2, 1, () =>
          textBoxStep === "confirm"
            ? dispatch(setTextBoxConfirmSelection("yes"))
            : dispatch(retreatTextBoxChunk()),
        )}
        {directionButton(DIRECTION_KEYS.left, "←", 1, 2)}
        {directionButton(DIRECTION_KEYS.right, "→", 3, 2)}
        {directionButton(DIRECTION_KEYS.down, "↓", 2, 3, () =>
          textBoxStep === "confirm"
            ? dispatch(setTextBoxConfirmSelection("no"))
            : dispatch(advanceTextBox()),
        )}
      </Box>

      <Button
        onPointerDown={pressInteraction()}
        onPointerUp={releaseInteraction()}
        onPointerLeave={releaseInteraction()}
        onPointerCancel={releaseInteraction()}
      >
        A
      </Button>
    </Flex>
  );
};
