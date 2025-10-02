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
import { useEffect, useRef } from "react";

export const TextBox = () => {
  const textBoxIsOpen = useSelector(textBoxIsOpenSelector);
  const textBoxContent = useSelector(textBoxContentSelector);
  const textBoxModal = useSelector(textBoxModalSelector);
  const dispatch = useDispatch();
  const { openModal } = useOpenDirectModal();
  const continueButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (textBoxIsOpen && continueButtonRef.current) {
      continueButtonRef.current.focus();
    }
  }, [textBoxIsOpen]);

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
      <Button
        ref={continueButtonRef}
        position="absolute"
        bottom="5px"
        right="5px"
        width="30px"
        height="30px"
        minW="0"
        p={0}
        onClick={handleCloseTextBox}
      >
        <Icon>
          <IoCaretDownSharp size="20px" />
        </Icon>
      </Button>

      <Text>{textBoxContent}</Text>
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
        {textBoxModal && (
          <>
            <Box>
              <Button onClick={handleOpenModal} minW="0" p={0} width="100%">
                Yes
              </Button>
            </Box>
            <Box>
              <Button onClick={handleCloseTextBox} minW="0" p={0} width="100%">
                No
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
