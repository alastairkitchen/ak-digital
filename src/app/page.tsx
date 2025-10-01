"use client";
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { GameCanvas } from "../features/game-canvas/GameCanvas";
import { Counter } from "@/features/Counter";
import { ReduxModalsContainer } from "@/features/redux-modals/ReduxModalsContainer";
import {
  useOpenDirectModal,
  useOpenModal,
} from "@/features/redux-modals/useOpenModal";

export default function Home() {
  const { openModal: openCVSummaryModal } = useOpenModal("cvSummary");
  const { openModal: openSkillsModal } = useOpenModal("skills");
  const { openModal } = useOpenDirectModal();

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

          <Button onClick={() => openCVSummaryModal()}>Summary</Button>
          <Button onClick={() => openSkillsModal()}>Technical Skills</Button>
          <Button onClick={() => openModal("experience")}>Experience</Button>
          <Button onClick={() => openModal("projects")}>projects</Button>
          <Button onClick={() => openModal("education")}>education</Button>

          <Counter />

          <Text>
            Alternaitavely <Link>Download cv as PDF</Link>
          </Text>
        </Box>
      </main>
      <ReduxModalsContainer />
      <footer>Add something here</footer>
    </>
  );
}
