import { ComponentProps } from "react";
import { SharedDialog } from "../../shared";
import { Box, Heading, List, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { closeTextBox } from "@/store/appSlice";

export const ProfessionalExperienceModal: React.FC<
  ComponentProps<typeof SharedDialog>
> = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const handleOnClose = () => {
    dispatch(closeTextBox());
    onClose();
  };

  return (
    <SharedDialog
      open={open}
      onClose={handleOnClose}
      title="Professional Experience"
    >
      <Box>
        <Box mb={8}>
          <Heading as="h3" size="md" mb={2}>
            React Developer - Serial Affinity (Jan 2023 - Present)
          </Heading>
          <Text mb={4}>
            Developing scalable, reusable web components for an entertainment
            client, supporting both an internal admin dashboard and a
            customer-facing payment platform. Collaborating with
            cross-functional teams and leveraging modern frameworks to create
            efficient and maintainable features.
          </Text>

          <Heading as="h3" size="md" mb={2}>
            Key Responsibilities
          </Heading>
          <List.Root mb={4}>
            <List.Item>
              Build and style performant user interfaces using React, Next.js,
              Chakra UI, and CSS-in-JS.
            </List.Item>
            <List.Item>
              Collaborate with backend developers to define and integrate REST
              APIs.
            </List.Item>
            <List.Item>
              Scope tasks for features and estimate development timelines.
            </List.Item>
            <List.Item>
              Conduct peer code reviews to ensure adherence to coding standards
              and best practices.
            </List.Item>
            <List.Item>
              Deploy using Azure DevOps pipelines and participate in CI/CD
              release cycles.
            </List.Item>
            <List.Item>
              Take ownership of features and clear blockers to maintain project
              momentum.
            </List.Item>
            <List.Item>
              Identify and refactor technical debt to improve maintainability
              and performance.
            </List.Item>
            <List.Item>
              Write unit tests (Jest, React Testing Library) for feature work.
            </List.Item>
            <List.Item>
              Work closely with QA teams to resolve testing issues and support
              production incidents.
            </List.Item>
          </List.Root>

          <Heading as="h3" size="md" mb={2}>
            Key Accomplishments
          </Heading>
          <List.Root mb={4}>
            <List.Item>
              <strong>Customer Payouts:</strong> Built the frontend for a
              customer-facing payouts page using React and Typescript that
              enables 2 types of users to request a transfer of transactions to
              their crypto wallets.
            </List.Item>
            <List.Item>
              Built frontend for admin moderators to review, approve, or reject
              incoming payout requests.
            </List.Item>
            <List.Item>
              Enhanced user experience by implementing frontend validation using
              React state management.
            </List.Item>
            <List.Item>
              <strong>Admin Moderation Pages:</strong> Delivered the frontend
              build for multiple moderation pages enabling admins to review and
              ban non-compliant content on the web platform using React and
              Redux.
            </List.Item>
            <List.Item>
              Created 3+ custom table layouts with sticky headers using CSS Grid
              and CSS Subgrid.
            </List.Item>
            <List.Item>
              Integrated data fetching and state management using React Query
              for 10+ features.
            </List.Item>
            <List.Item>
              Enhanced technical knowledge by learning React Query, Jest
              testing, and some basic C# programming.
            </List.Item>
          </List.Root>
        </Box>

        <Box mb={8}>
          <Heading as="h3" size="md" mb={2}>
            Web Developer – Equator (Dec 2017 – Apr 2021)
          </Heading>
          <Text mb={4}>
            Worked at a digital agency to build and maintain websites for
            clients across various industries. Worked in cross functional teams
            consisting of product managers, strategists, developers and testers.
            Focused on creating modular, accessible, and responsive web
            components using modern development tools and techniques.
          </Text>

          <Heading as="h3" size="md" mb={2}>
            Key Responsibilities
          </Heading>
          <List.Root mb={4}>
            <List.Item>
              Build and style responsive web components using React, Sass, and
              Webpack.
            </List.Item>
            <List.Item>
              Collaborate with clients to refine acceptance criteria and
              identify trade-offs.
            </List.Item>
            <List.Item>
              Ensure components meet project requirements and adhere to
              accessibility standards AA.
            </List.Item>
            <List.Item>
              Mentor junior colleagues by guiding problem-solving pair
              programming sessions.
            </List.Item>
            <List.Item>
              Collaborate with backend developers and designers to scope feature
              work.
            </List.Item>
            <List.Item>
              Integrate React components with CMS platforms such as Umbraco,
              enabling content management.
            </List.Item>
            <List.Item>
              Quickly identify and resolve bugs in time-sensitive projects.
            </List.Item>
          </List.Root>

          <Heading as="h3" size="md" mb={2}>
            Key Accomplishments
          </Heading>
          <List.Root mb={4}>
            <List.Item>
              <strong>ASPC Reskin:</strong> Contributed to modernizing a
              property website (aspc.co.uk) by adding React and replacing
              Knockoutjs in a .NET application.
            </List.Item>
            <List.Item>
              Scoped and defined key features, built layouts, and implemented
              functionality such as image slideshows.
            </List.Item>
            <List.Item>
              <strong>Tili Move Assistant:</strong> Created features for an app
              that helps users set up utilities when moving home using React.
            </List.Item>
            <List.Item>
              Gained expertise in writing BEM CSS, improving code
              maintainability and scalability.
            </List.Item>
            <List.Item>
              Advanced JavaScript knowledge by adopting ES6+ features and
              modular architecture.
            </List.Item>
            <List.Item>
              Improved debugging skills by using chrome dev tools and
              breakpoints.
            </List.Item>
            <List.Item>
              <strong>Equator Project examples:</strong> aspc.co.uk |
              tilitenantportal.asktili.com
            </List.Item>
          </List.Root>
        </Box>

        <Box mb={8}>
          <Heading as="h3" size="md" mb={2}>
            Frontend Developer – Senshi Digital (Aug 2015 – Nov 2017)
          </Heading>
          <Text mb={4}>
            Worked as part of a small development team at a digital agency to
            create and maintain websites for clients, particularly in the
            tourism sector. Focused on implementing responsive frontend designs,
            integrating CMS functionality, and improving user experience.
          </Text>

          <Heading as="h3" size="md" mb={2}>
            Key Responsibilities
          </Heading>
          <List.Root mb={4}>
            <List.Item>
              Develop responsive websites using Zurb Foundation framework with
              Sass and Javascript.
            </List.Item>
            <List.Item>
              Integrate CMS functionality into websites using Concrete5 for
              dynamic content management.
            </List.Item>
            <List.Item>
              Implement functionality, such as slideshows, Google Maps
              integrations, and site navigation, using JavaScript and jQuery.
            </List.Item>
            <List.Item>
              Support websites by resolving frontend bugs and assisting with
              basic server maintenance (e.g. updating DNS records).
            </List.Item>
          </List.Root>

          <Heading as="h3" size="md" mb={2}>
            Key Accomplishments
          </Heading>
          <List.Root mb={4}>
            <List.Item>
              <strong>Walk Japan Project:</strong> Built the frontend for a
              tourism website specializing in guided walking tours across Japan
              (walkjapan.com).
            </List.Item>
            <List.Item>
              Styled PHP-based components using Sass and created modular styles
              for reusable elements.
            </List.Item>
            <List.Item>
              Improved workflow efficiency by adopting NPM, Bower, and Gulp for
              package management and task automation.
            </List.Item>
            <List.Item>
              Increased knowledge of the Foundation framework, enabling the
              creation of responsive layouts.
            </List.Item>
            <List.Item>
              <strong>Senshi Digital Project examples:</strong> walkjapan.com |
              colosseumandvaticantours.com
            </List.Item>
          </List.Root>
        </Box>

        <Box mb={8}>
          <Heading as="h3" size="md" mb={2}>
            Frontend Developer – Rejuvenate Productions (Oct 2013 – Aug 2015)
          </Heading>
          <Text mb={4}>
            Worked with a team of developers to create and maintain websites for
            clients, focusing on building frontend features and providing
            support for both new and existing websites.
          </Text>

          <Heading as="h3" size="md" mb={2}>
            Key Responsibilities
          </Heading>
          <List.Root mb={4}>
            <List.Item>
              Develop responsive websites using HTML, CSS (Less), and
              JavaScript.
            </List.Item>
            <List.Item>
              Implement interactive features like slideshows and Google Maps.
            </List.Item>
            <List.Item>
              Test websites across different browsers using Browserstack,
              ensuring compatibility and smooth performance.
            </List.Item>
            <List.Item>
              Collaborate with designers and backend developers to ensure that
              features meet project requirements.
            </List.Item>
          </List.Root>

          <Heading as="h3" size="md" mb={2}>
            Key Accomplishments
          </Heading>
          <List.Root mb={4}>
            <List.Item>
              Created an interactive map using third-party JavaScript APIs that
              displays student accommodation in Leeds.
            </List.Item>
            <List.Item>
              Delivered frontend for midwife directory website using sass to
              style web components.
            </List.Item>
          </List.Root>
        </Box>
      </Box>
    </SharedDialog>
  );
};
