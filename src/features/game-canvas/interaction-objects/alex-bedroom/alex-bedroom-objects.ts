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
  },
};

export const alexBedroomInteractionObjects = [computer, bookshelf];
