import { ComponentProps } from "react";
import { SharedDialog } from "../../shared";
import { Box, Stack, Text } from "@chakra-ui/react";

export const TechnicalSkillsModal: React.FC<
  ComponentProps<typeof SharedDialog>
> = ({ open, onClose }) => {
  return (
    <SharedDialog open={open} onClose={onClose} title="Professional Summary">
      <Stack gap={5}>
        <Text>
          <Box as="span" fontWeight="bold">
            Frontend:
          </Box>{" "}
          HTML, CSS, Sass, JavaScript (ES6+), TypeScript, React, Redux, Next.js,
          React Query, React Hook Form
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            Tools & Testing:
          </Box>{" "}
          Azure DevOps, Netlify, Webpack, Jest, React testing library
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            CMS:
          </Box>{" "}
          Decap (Formerly Netlify CMS), Umbraco
        </Text>
        <Text>
          <Box as="span" fontWeight="bold">
            Other:
          </Box>{" "}
          Accessibility (WCAG AA), CI/CD, API Integration (REST), Refactoring /
          Technical debt cleanup
        </Text>
      </Stack>
    </SharedDialog>
  );
};
