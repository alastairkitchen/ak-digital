import {
  closeTextBox,
  congratsMessageShownSelector,
  cvProgressSelector,
  introIsOpenSelector,
  ModalType,
  setCongratsMessageShown,
  setTextBoxCurrentChunkIndex,
  startGame,
  textBoxContentSelector,
  textBoxCurrentChunkIndexSelector,
  textBoxHeaderSelector,
  textBoxIsOpenSelector,
  textBoxModalSelector,
} from "../../store/appSlice";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useOpenDirectModal } from "../redux-modals/useOpenModal";
import { useEffect, useRef } from "react";
import { chunkText } from "./utils/chunkText";

type TextBoxStep = "advance" | "close" | "confirm" | "start";

const getTextBoxStep = (
  isLastChunk: boolean,
  introIsOpen: boolean,
  textBoxModal: ModalType | null,
): TextBoxStep => {
  if (!isLastChunk) return "advance";
  if (introIsOpen) return "start";
  if (textBoxModal !== null) return "confirm";
  return "close";
};

export const TextBox = () => {
  const dispatch = useDispatch();
  const { openModal } = useOpenDirectModal();

  const textBoxIsOpen = useSelector(textBoxIsOpenSelector);
  const textBoxHeader = useSelector(textBoxHeaderSelector);
  const textBoxContent = useSelector(textBoxContentSelector);
  const textBoxModal = useSelector(textBoxModalSelector);
  const cvProgress = useSelector(cvProgressSelector);
  const congratsMessageShown = useSelector(congratsMessageShownSelector);
  const currentChunkIndex = useSelector(textBoxCurrentChunkIndexSelector);
  const introIsOpen = useSelector(introIsOpenSelector);

  const textChunks = chunkText(
    textBoxHeader || "",
    textBoxContent || "",
    cvProgress,
    congratsMessageShown,
    textBoxModal,
  );

  const isLastChunk = currentChunkIndex + 1 >= textChunks.length;
  const step = getTextBoxStep(isLastChunk, introIsOpen, textBoxModal);

  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const startGameButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const previousButtonRef = useRef<HTMLButtonElement>(null);
  const stepRef = useRef<TextBoxStep>(step);

  // One ref per step, so a single effect can focus whichever is active.
  const stepFocusRef: Record<
    TextBoxStep,
    React.RefObject<HTMLButtonElement | null>
  > = {
    advance: continueButtonRef,
    close: continueButtonRef,
    start: startGameButtonRef,
    confirm: yesButtonRef,
  };

  useEffect(() => {
    if (!textBoxIsOpen || step === "start") return;

    stepFocusRef[step].current?.focus();
  }, [textBoxIsOpen, step]);

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (stepRef.current === "advance") {
        if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
          continueButtonRef.current?.click();
        }
      }

      if (stepRef.current === "start") {
        if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
          previousButtonRef.current?.click();
        }
      }

      if (stepRef.current === "confirm") {
        const activeElement = document.activeElement as HTMLElement;
        const activeElementFocusId = activeElement?.dataset?.focusElementId;

        if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
          if (activeElementFocusId === "no-button") {
            yesButtonRef.current?.focus();
          }
        }
        if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
          if (activeElementFocusId === "yes-button") {
            noButtonRef.current?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleCloseTextBox = () => {
    dispatch(closeTextBox());

    if (!congratsMessageShown && textBoxModal !== null) {
      dispatch(setCongratsMessageShown());
    }
  };

  const handleNextChunk = () => {
    dispatch(setTextBoxCurrentChunkIndex(currentChunkIndex + 1));
  };

  const handlePreviousChunk = () => {
    if (currentChunkIndex === 0) return;
    dispatch(setTextBoxCurrentChunkIndex(currentChunkIndex - 1));
  };

  const handleOpenModal = () => {
    if (textBoxModal) {
      openModal(textBoxModal);
    }
  };

  const handleStartGame = () => {
    dispatch(startGame());
  };

  const stepAction: Record<TextBoxStep, () => void> = {
    advance: handleNextChunk,
    close: handleCloseTextBox,
    confirm: handleOpenModal,
    start: handleStartGame,
  };

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
          onClick={stepAction.start}
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
        onClick={stepAction[step]}
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
        onClick={handlePreviousChunk}
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
          onClick={handleCloseTextBox}
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
            onClick={handleOpenModal}
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
            onClick={handleCloseTextBox}
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
