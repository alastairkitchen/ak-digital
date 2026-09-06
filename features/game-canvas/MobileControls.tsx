"use client";
import { RefObject } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";

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
  // Pointer events cover touch and mouse so the same handlers work if a
  // small viewport is being tested with a mouse.
  const press = (key: string) => (e: React.PointerEvent) => {
    e.preventDefault();
    keysRef.current[key] = true;
  };

  const release = (key: string) => (e: React.PointerEvent) => {
    e.preventDefault();
    keysRef.current[key] = false;
  };

  const directionButton = (
    key: string,
    label: string,
    gridColumn: number,
    gridRow: number,
  ) => (
    <Button
      aria-label={label}
      onPointerDown={press(key)}
      onPointerUp={release(key)}
      onPointerLeave={release(key)}
      onPointerCancel={release(key)}
      style={{ touchAction: "none", gridColumn, gridRow }}
      size="lg"
      variant="surface"
      colorPalette="gray"
      opacity={0.8}
    >
      {label}
    </Button>
  );

  const pressInteraction = () => (e: React.PointerEvent) => {
    e.preventDefault();
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
        {directionButton(DIRECTION_KEYS.up, "↑", 2, 1)}
        {directionButton(DIRECTION_KEYS.left, "←", 1, 2)}
        {directionButton(DIRECTION_KEYS.right, "→", 3, 2)}
        {directionButton(DIRECTION_KEYS.down, "↓", 2, 3)}
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
