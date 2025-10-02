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
    textBoxContent: "This is a book on the table. It contains my CV summary.",
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
    textBoxContent: "This is a bookcase. It contains my skills.",
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
    textBoxContent: "This is a bookcase. It contains my skills.",
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
    modalType: "skills",
    cvSection: "skills",
    textBoxContent: "This is a cupboard. It contains my skills.",
  },
};

export const aliHouseInteractionObjects = [
  tableBook,
  bookcaseOne,
  bookcaseTwo,
  kitchenCupboard,
];
