import { cvProgressSelector } from "@/store/appSlice";
import { Flex, Box, Icon, Text, FlexProps } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { LuGraduationCap } from "react-icons/lu";
import { TbTie } from "react-icons/tb";
import { useSelector } from "react-redux";
import Image from "next/image";

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

export const ProgressBanner: React.FC = () => {
  const cvProgress = useSelector(cvProgressSelector);
  return (
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
  );
};
