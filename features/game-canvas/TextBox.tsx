import {
  closeTextBox,
  textBoxContentSelector,
  textBoxIsOpenSelector,
  textBoxModalSelector,
} from "../../store/appSlice";
import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { IoCaretDownSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useOpenDirectModal } from "../redux-modals/useOpenModal";
import { useEffect, useMemo, useRef, useState } from "react";

const CHARACTER_LIMIT = 160;

const chunkText = (text: string) => {
  const chunks = [];
  let nextCharacter = text[0];
  let startIndex = 0;
  let endIndex = CHARACTER_LIMIT;

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
  const textBoxIsOpen = useSelector(textBoxIsOpenSelector);
  const textBoxContent = useSelector(textBoxContentSelector);
  const textBoxModal = useSelector(textBoxModalSelector);
  const dispatch = useDispatch();
  const { openModal } = useOpenDirectModal();
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const textChunks = chunkText(textBoxContent || "");
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);

  const needUserInput = useMemo(
    () => currentChunkIndex + 1 >= textChunks.length && textBoxModal,
    [currentChunkIndex, textBoxModal]
  );

  console.dir({ chunkTextLength: textChunks.length, currentChunkIndex });

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

  if (!textBoxIsOpen || !textBoxContent) {
    return null;
  }

  const handleOpenModal = () => {
    if (textBoxModal) {
      openModal(textBoxModal);
    }
  };

  const handleCloseTextBox = () => {
    dispatch(closeTextBox());
    setCurrentChunkIndex(0);
  };

  const handleNextChunk = () => {
    if (currentChunkIndex < textChunks.length - 1) {
      setCurrentChunkIndex(currentChunkIndex + 1);
    }
  };

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
      {textChunks.length > 1 && (
        <Button
          ref={continueButtonRef}
          position="absolute"
          bottom="5px"
          right="5px"
          width="30px"
          height="30px"
          minW="0"
          p={0}
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
        <Box
          position="absolute"
          top="-10px"
          transform="translateY(-100%)"
          right="0"
          background="inherit"
          border="inherit"
          borderRadius="inherit"
          width="60px"
        >
          <>
            <Box>
              <Button
                ref={yesButtonRef}
                onClick={handleOpenModal}
                minW="0"
                p={0}
                width="100%"
              >
                Yes
              </Button>
            </Box>
            <Box>
              <Button onClick={handleCloseTextBox} minW="0" p={0} width="100%">
                No
              </Button>
            </Box>
          </>
        </Box>
      )}
    </Box>
  );
};
