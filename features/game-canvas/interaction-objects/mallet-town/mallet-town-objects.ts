import {
  COLLISION_INTERACTION_COLOUR,
  CollisionObject,
} from "../../collision-objects";

const aliHouseSign: CollisionObject = {
  x: 100,
  y: 277,
  width: 26,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxContent: "Ali's house.",
    textBoxHeader: null,
  },
};

const aliHouseSignSide: CollisionObject = {
  x: 90,
  y: 262,
  width: 20,
  height: 22,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    modalType: null,
    cvSection: null,
    textBoxContent: "Ali's house.",
    textBoxHeader: null,
  },
};

const alexHouseSign: CollisionObject = {
  x: 386,
  y: 275,
  width: 26,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxContent: "Alex's house.",
    textBoxHeader: null,
  },
};

const alexHouseSignSide: CollisionObject = {
  x: 376,
  y: 262,
  width: 20,
  height: 22,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    modalType: null,
    cvSection: null,
    textBoxContent: "Ali's house.",
    textBoxHeader: null,
  },
};

const grassSign: CollisionObject = {
  x: 135,
  y: 402,
  width: 26,
  height: 20,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "up",
    modalType: null,
    cvSection: null,
    textBoxContent: "The community graden.",
    textBoxHeader: null,
  },
};

const grassSignSide: CollisionObject = {
  x: 115,
  y: 389,
  width: 20,
  height: 22,
  colour: COLLISION_INTERACTION_COLOUR,
  interaction: {
    playerDirectionToActivate: "right",
    modalType: null,
    cvSection: null,
    textBoxContent: "The community graden.",
    textBoxHeader: null,
  },
};

export const malletTownInteractionObjects = [
  aliHouseSign,
  aliHouseSignSide,
  alexHouseSign,
  alexHouseSignSide,
  grassSign,
  grassSignSide,
];
