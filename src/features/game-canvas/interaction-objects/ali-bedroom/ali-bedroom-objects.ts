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
    modalType: "experience", // TODO add common
    cvSection: "experience",
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
  },
};

export const aliBedroomInteractionObjects = [computer, pizza, bookShelf];
