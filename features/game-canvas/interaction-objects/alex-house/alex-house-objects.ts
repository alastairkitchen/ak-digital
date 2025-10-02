import {
  COLLISION_INTERACTION_COLOUR,
  CollisionObject,
} from "../../collision-objects";

const bookOneTop: CollisionObject = {
  x: 166,
  y: 380,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "down",
    modalType: "projects",
    cvSection: "projects",
    textBoxContent: "This is a book. It contains my projects.",
  },
};

const bookTwoTop: CollisionObject = {
  x: 199,
  y: 380,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "down",
    modalType: "projects",
    cvSection: "projects",
    textBoxContent: "This is a book. It contains my projects.",
  },
};

const bookTwoSide: CollisionObject = {
  x: 214,
  y: 388,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "left",
    modalType: "projects",
    cvSection: "projects",
    textBoxContent: "This is a book. It contains my projects.",
  },
};

const bookThreeTop: CollisionObject = {
  x: 485,
  y: 379,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "down",
    modalType: "projects",
    cvSection: "projects",
    textBoxContent: "This is a book. It contains my projects.",
  },
};

const bookThreeSide: CollisionObject = {
  x: 470,
  y: 391,
  width: 21,
  height: 26,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    modalType: "projects",
    cvSection: "projects",
    textBoxContent: "This is a book. It contains my projects.",
  },
};

const bookFourTop: CollisionObject = {
  x: 516,
  y: 379,
  width: 22,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "down",
    modalType: "projects",
    cvSection: "projects",
    textBoxContent: "This is a book. It contains my projects.",
  },
};

const bookShelfLeft: CollisionObject = {
  x: 42,
  y: 99,
  width: 45,
  height: 24,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: "skills",
    cvSection: "skills",
    textBoxContent: "This is a bookshelf. It contains my skills.",
  },
};

const bookShelfRight: CollisionObject = {
  x: 619,
  y: 99,
  width: 45,
  height: 24,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: "skills",
    cvSection: "skills",
    textBoxContent: "This is a bookshelf. It contains my skills.",
  },
};

export const alexHouseInteractionObjects = [
  bookThreeTop,
  bookThreeSide,
  bookOneTop,
  bookTwoTop,
  bookTwoSide,
  bookFourTop,
  bookShelfLeft,
  bookShelfRight,
];
