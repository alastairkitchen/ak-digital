import {
  closeTextBox,
  congratsMessageShownSelector,
  cvProgressSelector,
  CvSection,
  ModalType,
  setCongratsMessageShown,
  setTextBoxCurrentChunkIndex,
  textBoxContentSelector,
  textBoxCurrentChunkIndexSelector,
  textBoxHeaderSelector,
  textBoxIsOpenSelector,
  textBoxModalSelector,
} from "../../store/appSlice";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IoCaretDownSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useOpenDirectModal } from "../redux-modals/useOpenModal";
import { useEffect, useMemo, useRef } from "react";

const CHARACTER_LIMIT = 160;

const congratulationsMessage =
  "Congratulations you found your first section of the CV, find all sections then check ali's computer to collect your prize!";

const chunkText = (
  header: string,
  text: string,
  cvProgress: CvSection[],
  congratsMessageShown: boolean,
  textBoxModal: ModalType | null
) => {
  const chunks = [];
  let nextCharacter = text[0];
  let startIndex = 0;
  let endIndex = CHARACTER_LIMIT;

  if (textBoxModal !== null) {
    if (cvProgress.length < 2 && !congratsMessageShown) {
      chunks.push(congratulationsMessage);
    }

    chunks.push(header);
  }

  if (text.length <= CHARACTER_LIMIT) {
    chunks.push(text);
    return chunks;
  }

  while (nextCharacter) {
    const newChunk = text.slice(startIndex, endIndex);
    chunks.push(newChunk);
    startIndex = endIndex + 1;
    endIndex = startIndex + CHARACTER_LIMIT;
    nextCharacter = text[startIndex];
  }

  return chunks;
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

  const textChunks = chunkText(
    textBoxHeader || "",
    textBoxContent || "",
    cvProgress,
    congratsMessageShown,
    textBoxModal
  );

  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const needUserInput = useMemo(
    () => currentChunkIndex + 1 >= textChunks.length && textBoxModal !== null,
    [currentChunkIndex, textBoxContent]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
    };

    document.addEventListener("keydown", handleKeyDown);

    () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (textBoxIsOpen && continueButtonRef.current) {
      continueButtonRef.current.focus();
    }
  }, [textBoxIsOpen]);

  useEffect(() => {
    if (needUserInput && yesButtonRef.current) {
      yesButtonRef.current.focus();
    }
  }, [needUserInput]);

  const handleOpenModal = () => {
    if (textBoxModal) {
      openModal(textBoxModal);
    }
  };

  const handleCloseTextBox = () => {
    dispatch(closeTextBox());

    if (!congratsMessageShown && textBoxModal !== null) {
      dispatch(setCongratsMessageShown());
    }
  };

  const handleNextChunk = () => {
    if (currentChunkIndex < textChunks.length - 1) {
      const nextChunkIndex = currentChunkIndex + 1;
      dispatch(setTextBoxCurrentChunkIndex(nextChunkIndex));
    }
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
    >
      {!needUserInput && (
        <Button
          ref={continueButtonRef}
          position="absolute"
          bottom="5px"
          right="5px"
          width="30px"
          height="30px"
          minW="0"
          p={0}
          _focus={{ bg: "#d0a207" }}
          onClick={
            currentChunkIndex < textChunks.length - 1
              ? handleNextChunk
              : handleCloseTextBox
          }
        >
          <Icon>
            <IoCaretDownSharp size="20px" />
          </Icon>
        </Button>
      )}

      {textChunks.length === 1 ? (
        <Text>{textChunks[0]}</Text>
      ) : (
        <Text>{textChunks[currentChunkIndex]}</Text>
      )}

      {needUserInput && <Text mt={2}>Read more?</Text>}

      {needUserInput && (
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
