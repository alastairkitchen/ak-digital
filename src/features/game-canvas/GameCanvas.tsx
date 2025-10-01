"use client";
import { useState } from "react";
import { useSetupCanvas } from "./useSetupCanvas";
import { player } from "./useSetupCanvas";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./const";
import { Box, Flex, FlexProps, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { TbTie } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { useSelector } from "react-redux";
import { cvProgressSelector } from "@/store/appSlice";

export const GameCanvas: React.FC = () => {
  const { canvasRef, rect } = useSetupCanvas();
  const [update, setUpdate] = useState(true);

  const cvProgress = useSelector(cvProgressSelector);

  return (
    <>
      <div>{player.x}</div>
      <div>{player.y}</div>

      <p className="mt-2">
        <strong>Rectangle:</strong> x: {Math.round(rect.x)}, y:{" "}
        {Math.round(rect.y)}, width: {Math.round(rect.width)}, height:{" "}
        {Math.round(rect.height)}
      </p>
      <button onClick={() => setUpdate(!update)}>update</button>

      <Box
        width={CANVAS_WIDTH}
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

        <Flex
          alignItems="center"
          height="50px"
          bg="#bacbc5"
          gap={2}
          px={4}
          color="black"
        >
          <Box>
            <Image
              src="/character-sprites/down-1.png"
              alt="avatar"
              width={32}
              height={32}
            />
          </Box>

          <Text fontSize="sm" fontWeight="bold">
            CV:{" "}
            <Box asChild letterSpacing="-2px" fontSize="lg">
              <span>{cvProgress.length} / 5</span>
            </Box>
          </Text>

          {/* summary */}
          <ProgressItem active={cvProgress.includes("summary")}>
            <Icon>
              <HiOutlineDocumentText size={18} />
            </Icon>
          </ProgressItem>

          {/* skills */}
          <ProgressItem active={cvProgress.includes("skills")}>
            <Icon>
              <HiMiniComputerDesktop size={19} />
            </Icon>
          </ProgressItem>

          {/* experience */}
          <ProgressItem active={cvProgress.includes("experience")}>
            <Icon>
              <TbTie size={18} />
            </Icon>
          </ProgressItem>

          {/* projects */}
          <ProgressItem active={cvProgress.includes("projects")}>
            <Icon>
              <FaCode size={19} />
            </Icon>
          </ProgressItem>

          {/* education */}
          <ProgressItem active={cvProgress.includes("education")}>
            <Icon>
              <LuGraduationCap size={19} />
            </Icon>
          </ProgressItem>
        </Flex>
      </Box>
    </>
  );
};

const ProgressItem: React.FC<FlexProps & { active?: boolean }> = ({
  active = false,
  children,
  ...rest
}) => {
  return (
    <Flex
      w="30px"
      h="30px"
      alignItems="center"
      justifyContent="center"
      background={active ? "#d0a207" : "transparent"}
      color="#000000"
      boxShadow={active ? "0px 4px 2px black" : "none"}
      outline="2px solid"
      outlineColor="blackAlpha.800"
      borderRadius="sm"
      mb={active ? "4px" : "0px"}
      opacity={active ? 1 : 0.5}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export { CANVAS_HEIGHT, CANVAS_WIDTH };
