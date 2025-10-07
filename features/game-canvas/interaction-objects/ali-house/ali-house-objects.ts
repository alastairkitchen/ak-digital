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

const fireplace: CollisionObject = {
  x: 386,
  y: 97,
  width: 60,
  height: 30,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "The fire is crackling warmly.",
    modalType: null,
  },
};

const beerKeg: CollisionObject = {
  x: 355,
  y: 97,
  width: 27,
  height: 25,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent:
      "The beer keg is full and ready to serve, no time for a pint now though!",
    modalType: null,
  },
};

const sink: CollisionObject = {
  x: 194,
  y: 99,
  width: 27,
  height: 25,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "The sink is sparkling clean, Ali runs a tight ship.",
    modalType: null,
  },
};

const stove: CollisionObject = {
  x: 226,
  y: 99,
  width: 30,
  height: 25,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "The stove, ali enjoys cooking up a storm.",
    modalType: null,
  },
};

const cabinateRightTop: CollisionObject = {
  x: 634,
  y: 258,
  width: 26,
  height: 51,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent:
      "The cabinate is packed full of pokemon cards, ali loves collecting.",
    modalType: null,
  },
};

const cabinateRightBottom: CollisionObject = {
  x: 634,
  y: 321,
  width: 26,
  height: 51,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "More pokemon cards, giratina v 186/196 is my favourite!",
    modalType: null,
  },
};

const cabinateLeftTop: CollisionObject = {
  x: 49,
  y: 385,
  width: 22,
  height: 52,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "left",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent:
      "The cabinate is full of photos of alis family and friends.",
    modalType: null,
  },
};

const cabinateLeftBottom: CollisionObject = {
  x: 49,
  y: 450,
  width: 22,
  height: 52,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "left",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "There is a yoga mat rolled up in the cabinate.",
    modalType: null,
  },
};

const writingDeskPen: CollisionObject = {
  x: 509,
  y: 452,
  width: 35,
  height: 27,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "down",
    cvSection: null,
    textBoxHeader: null,
    textBoxContent: "A writing desk with a quill, old timey!",
    modalType: null,
  },
};

export const aliHouseInteractionObjects = [
  tableBook,
  bookcaseOne,
  bookcaseTwo,
  kitchenCupboard,
  fireplace,
  beerKeg,
  sink,
  stove,
  cabinateRightTop,
  cabinateRightBottom,
  cabinateLeftTop,
  cabinateLeftBottom,
  writingDeskPen,
];
