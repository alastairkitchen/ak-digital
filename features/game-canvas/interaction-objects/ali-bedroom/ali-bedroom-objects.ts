import {
  COLLISION_INTERACTION_COLOUR,
  CollisionObject,
} from "../../collision-objects";

const computer: CollisionObject = {
  x: 187,
  y: 390,
  width: 43,
  height: 23,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: "experience",
    cvSection: "experience",
    textBoxHeader: "Professional Experience",
    textBoxContent:
      "React Developer - Serial Affinity (Jan 2023 - Sept 2025), Developing scalable, reusable web components for an entertainment client, supporting both an internal admin dashboard and a customer-facing payment platform. Collaborating with cross-functional teams and leveraging modern frameworks to create efficient and maintainable features.",
  },
};

const pizza: CollisionObject = {
  x: 515,
  y: 226,
  width: 29,
  height: 26,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "Ali's left over pizza, yum pinapple!",
  },
};

const bookShelf: CollisionObject = {
  x: 458,
  y: 125,
  width: 44,
  height: 26,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: "skills",
    cvSection: "skills",
    textBoxHeader: "Technical Skills",
    textBoxContent:
      "Frontend: HTML, CSS, Sass, JavaScript (ES6+), TypeScript, React, Redux, Next.js, React Query, React Hook Form",
  },
};

export const aliBedroomInteractionObjects = [computer, pizza, bookShelf];
