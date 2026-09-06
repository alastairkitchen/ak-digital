import {
  advanceTextBox,
  dismissTextBox,
  retreatTextBoxChunk,
  setTextBoxConfirmSelection,
  startGame,
  TextBoxStep,
  textBoxChunksSelector,
  textBoxConfirmSelectionSelector,
  textBoxContentSelector,
  textBoxCurrentChunkIndexSelector,
  textBoxIsOpenSelector,
  textBoxStepSelector,
} from "../../store/appSlice";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { AppDispatch } from "../../store";

export const TextBox = () => {
  const dispatch = useDispatch<AppDispatch>();

  const textBoxIsOpen = useSelector(textBoxIsOpenSelector);
  const textBoxContent = useSelector(textBoxContentSelector);
  const currentChunkIndex = useSelector(textBoxCurrentChunkIndexSelector);
  const textChunks = useSelector(textBoxChunksSelector);
  const step = useSelector(textBoxStepSelector);
  const confirmSelection = useSelector(textBoxConfirmSelectionSelector);

  const isLastChunk = currentChunkIndex + 1 >= textChunks.length;

  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const startGameButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const previousButtonRef = useRef<HTMLButtonElement>(null);
  const stepRef = useRef<TextBoxStep>(step);

  useEffect(() => {
    if (!textBoxIsOpen) return;

    if (step === "confirm") {
      (confirmSelection === "no" ? noButtonRef : yesButtonRef).current?.focus();
      return;
    }

    if (step === "advance" || step === "close") {
      continueButtonRef.current?.focus();
    }
  }, [textBoxIsOpen, step, confirmSelection]);

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (stepRef.current === "advance") {
        if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
          dispatch(advanceTextBox());
        }
      }

      if (stepRef.current === "start") {
        if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
          dispatch(retreatTextBoxChunk());
        }
      }

      if (stepRef.current === "confirm") {
        if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
          dispatch(setTextBoxConfirmSelection("yes"));
        }
        if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
          dispatch(setTextBoxConfirmSelection("no"));
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  if (!textBoxIsOpen || !textBoxContent) {
    return null;
  }

  return (
    <Box
      position="absolute"
      bottom="60px"
      background="#f1f3ec"
      width="calc(100% - 40px)"
      height="120px"
      left="50%"
      transform="translateX(-50%)"
      borderRadius="6px"
      border="3px solid black"
      color="black"
      padding="10px"
      paddingRight="45px"
    >
      {step === "start" && (
        <Button
          ref={startGameButtonRef}
          position="absolute"
          top="-10px"
          right="0"
          height="30px"
          transform="translateY(-100%)"
          px={3}
          _focus={{ bg: "#d0a207" }}
          onClick={() => dispatch(startGame())}
        >
          Start Game
        </Button>
      )}

      <Button
        ref={continueButtonRef}
        position="absolute"
        bottom="5px"
        right="5px"
        width="30px"
        height="30px"
        minW="0"
        p={0}
        bg="#d0a207"
        onClick={() => dispatch(advanceTextBox())}
        opacity={isLastChunk ? 0.3 : 1}
      >
        <Icon>
          <IoCaretDownSharp size="20px" />
        </Icon>
      </Button>

      <Button
        ref={previousButtonRef}
        aria-label="Previous message"
        position="absolute"
        bottom="40px"
        right="5px"
        width="30px"
        height="30px"
        minW="0"
        p={0}
        bg="#d0a207"
        onClick={() => dispatch(retreatTextBoxChunk())}
        opacity={currentChunkIndex > 0 ? 1 : 0.3}
      >
        <Icon>
          <IoCaretUpSharp size="20px" />
        </Icon>
      </Button>

      {textChunks.length === 1 ? (
        <Text>{textChunks[0]}</Text>
      ) : (
        <Text>{textChunks[currentChunkIndex]}</Text>
      )}

      {step === "close" && (
        <Button
          onClick={() => dispatch(dismissTextBox())}
          top="-10px"
          position="absolute"
          transform="translateY(-100%)"
          right="0"
          minW="0"
          p={0}
          width="60px"
          bg="#d0a207"
        >
          Close
        </Button>
      )}

      {step === "confirm" && <Text mt={2}>Read more?</Text>}

      {step === "confirm" && (
        <Flex
          position="absolute"
          top="-10px"
          transform="translateY(-100%)"
          right="0"
          background="inherit"
          border="inherit"
          borderRadius="inherit"
          width="60px"
          flexDirection="column"
          gap="5px"
        >
          <Button
            ref={yesButtonRef}
            data-focus-element-id="yes-button"
            onClick={() => dispatch(advanceTextBox())}
            minW="0"
            p={0}
            width="100%"
            _focus={{ bg: "#d0a207" }}
          >
            Yes
          </Button>

          <Button
            ref={noButtonRef}
            data-focus-element-id="no-button"
            onClick={() => dispatch(dismissTextBox())}
            minW="0"
            p={0}
            width="100%"
            _focus={{ bg: "#d0a207" }}
          >
            No
          </Button>
        </Flex>
      )}
    </Box>
  );
};
