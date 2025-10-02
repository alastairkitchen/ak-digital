import { ComponentProps } from "react";
import { SharedDialog } from "../../shared";
import { Heading, Link, Text } from "@chakra-ui/react";

export const PersonalProjectsModal: React.FC<
  ComponentProps<typeof SharedDialog>
> = ({ open, onClose }) => {
  return (
    <SharedDialog open={open} onClose={onClose} title="Personal Projects">
      <Heading as="h3">
        Suzanne Wright Photographer -{" "}
        <Link href="https://suzannewrightphotographer.co.uk">
          suzannewrightphotographer.co.uk
        </Link>
      </Heading>
      <Text>
        A photography portfolio website showcasing the work of Suzanne Wright.
        Designed to present her photos in a visually appealing and interactive
        format. Technologies Used: Gatsby, Netlify CMS, GraphQL, React, Sass,
        Sketch design. Website is currently live with placeholder content.
      </Text>
      <Heading as="h3">
        Catherine Robertson Counselling - Deploy Preview -
        <Link href="https://deploy-preview-4--reverent-mahavira-7830ae.netlify.app">
          https://deploy-preview-4--reverent-mahavira-7830ae.netlify.app
        </Link>
      </Heading>
      <Text>
        A website for Catherine Robertson's counselling service, providing
        potential clients with detailed information and service offerings.
        Technologies Used: Next.js, Sass, Javascript, React.
      </Text>
      <Heading as="h3">
        Rick and morty App -{" "}
        <Link href="https://rick-and-morty-info-webapp.netlify.app">
          rick-and-morty-info-webapp.netlify.app
        </Link>
      </Heading>
      <Text>
        A web app created to display information about characters and episodes
        of an American cartoon called Rick and Morty. Technologies used: React,
        React Router, Typescript, Sass, Rick and morty app.
      </Text>
    </SharedDialog>
  );
};
