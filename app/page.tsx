"use client";
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { GameCanvas } from "../features/game-canvas/GameCanvas";
import { ReduxModalsContainer } from "../features/redux-modals/ReduxModalsContainer";
import {
  useOpenDirectModal,
  useOpenModal,
} from "../features/redux-modals/useOpenModal";
import { gameModeSelector } from "@/store/appSlice";
import { useSelector } from "react-redux";

export default function Home() {
  const { openModal: openCVSummaryModal } = useOpenModal("cvSummary");
  const { openModal: openSkillsModal } = useOpenModal("skills");
  const { openModal } = useOpenDirectModal();
  const gameMode = useSelector(gameModeSelector);

  return (
    <>
      <main>
        <Box maxW="900px" margin="0 auto">
          <Heading as="h1">Hi my name is Alastair Kitchen</Heading>

          <Text>
            I'm a frontend developer that specialises in solving problems using
            React, Typescript, Html and css
          </Text>

          <Text>Explore my Cv</Text>

          <GameCanvas />

          <Box inert={gameMode === "text-box"}>
            <Button onClick={() => openCVSummaryModal()}>Summary</Button>
            <Button onClick={() => openSkillsModal()}>Technical Skills</Button>
            <Button onClick={() => openModal("experience")}>Experience</Button>
            <Button onClick={() => openModal("projects")}>projects</Button>
            <Button onClick={() => openModal("education")}>education</Button>
            <Text>
              Alternaitavely <Link>Download cv as PDF</Link>
            </Text>
          </Box>
        </Box>
      </main>
      <ReduxModalsContainer />
      <footer>Add something here</footer>
    </>
  );
}
