import {
  COLLISION_INTERACTION_COLOUR,
  CollisionObject,
} from "../../collision-objects";

const computer: CollisionObject = {
  x: 469,
  y: 384,
  width: 46,
  height: 27,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: "education",
    cvSection: "education",
    textBoxHeader: "Education",
    textBoxContent:
      "Leeds Beckett University, BSc Hons in Multimedia Technology (2:1)",
  },
};

const bookshelf: CollisionObject = {
  x: 235,
  y: 122,
  width: 46,
  height: 27,
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

const plant: CollisionObject = {
  x: 129,
  y: 127,
  width: 30,
  height: 28,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "The cactus is looking healthy.",
  },
};

const coffee: CollisionObject = {
  x: 206,
  y: 230,
  width: 20,
  height: 26,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "left",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "A cup of coffee.",
  },
};

const tallServer: CollisionObject = {
  x: 450,
  y: 292,
  width: 27,
  height: 34,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "A server tower humming quietly.",
  },
};

const bedRight: CollisionObject = {
  x: 193,
  y: 348,
  width: 27,
  height: 38,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "left",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "A cosy bed, perfect for a nap.",
  },
};

const bedLeft: CollisionObject = {
  x: 128,
  y: 351,
  width: 27,
  height: 38,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    modalType: null,
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "A cosy bed, perfect for a nap.",
  },
};

export const alexBedroomInteractionObjects = [
  computer,
  bookshelf,
  plant,
  coffee,
  tallServer,
  bedRight,
  bedLeft,
];
