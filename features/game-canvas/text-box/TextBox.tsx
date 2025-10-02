import { textBoxIsOpenSelector } from "../../../store/appSlice";
import { Box, Icon, Text } from "@chakra-ui/react";
import { IoCaretDownSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

export const TextBox = () => {
  const textBoxIsOpen = useSelector(textBoxIsOpenSelector);

  if (!textBoxIsOpen) {
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
      <Icon position="absolute" bottom="5px" right="5px">
        <IoCaretDownSharp size="20px" />
      </Icon>
      <Text>
        Professional Summary: A web developer with 9 years of experience in
        frontend development, specializing in React, Next.js, and modern
        JavaScript frameworks.
      </Text>
      <Text>Read more?</Text>
      <Box
        position="absolute"
        top="-80px"
        right="0"
        background="inherit"
        border="inherit"
        borderRadius="inherit"
        width="60px"
      >
        <Box p={1} pl="10px">
          Yes
        </Box>
        <Box p={1} pl="10px">
          No
        </Box>
      </Box>
    </Box>
  );
};
