import { ComponentProps } from "react";
import { SharedDialog } from "../../shared";
import { Heading, List, Text } from "@chakra-ui/react";

export const EducationModal: React.FC<ComponentProps<typeof SharedDialog>> = ({
  open,
  onClose,
}) => {
  return (
    <SharedDialog open={open} onClose={onClose} title="Education">
      <Heading as="h3">Leeds Beckett University</Heading>
      <Text fontWeight="bold">BSc Hons in Multimedia Technology (2:1)</Text>

      <Text>Key Modules:</Text>

      <List.Root>
        <List.Item>Web Authoring</List.Item>
        <List.Item>Implementing Web Applications</List.Item>
        <List.Item>Graphical Communications</List.Item>
      </List.Root>

      <Heading as="h3">St John Fisher High School:</Heading>

      <List.Root>
        <List.Item>3 A Levels</List.Item>
        <List.Item>9 GCSEs</List.Item>
      </List.Root>
    </SharedDialog>
  );
};
