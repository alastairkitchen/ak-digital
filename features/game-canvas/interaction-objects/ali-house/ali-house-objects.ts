import {
  COLLISION_INTERACTION_COLOUR,
  CollisionObject,
} from "../../collision-objects";

const tableBook: CollisionObject = {
  x: 128,
  y: 232,
  width: 35,
  height: 21,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: "cvSummary",
    cvSection: "summary",
    textBoxHeader: "Professional Summary",
    textBoxContent:
      "A web developer with 9 years of experience in frontend development, specializing in React, Next.js, and modern JavaScript frameworks. ",
  },
};
const bookcaseOne: CollisionObject = {
  x: 43,
  y: 104,
  width: 42,
  height: 20,
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
const bookcaseTwo: CollisionObject = {
  x: 619,
  y: 103,
  width: 42,
  height: 20,
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
const kitchenCupboard: CollisionObject = {
  x: 299,
  y: 105,
  width: 42,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent:
      "This is a cupboard. You can see kitchen utensils and cooking equipment inside.",
    modalType: null,
  },
};

export const aliHouseInteractionObjects = [
  tableBook,
  bookcaseOne,
  bookcaseTwo,
  kitchenCupboard,
];
