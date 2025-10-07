import { COLLISION_ACTION_COLOUR, COLLISION_COLOUR, CollisionObject } from "..";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../const";
import { aliBedroomInteractionObjects } from "../../interaction-objects/ali-bedroom/ali-bedroom-objects";
import { malletTownInteractionObjects } from "../../interaction-objects/mallet-town/mallet-town-objects";
import { changeScene, currentScene } from "../../useSetupCanvas";
import { aliBedroomCollisionObjects } from "../ali-bedroom/ali-bedroom-objects";
import { malletTownCollisionObjects } from "../mallet-town/mallet-town-objects";

// bounds -------------------------------------

const topBounds: CollisionObject = {
  x: 0,
  y: 0,
  width: CANVAS_WIDTH,
  height: 32,
  colour: COLLISION_COLOUR,
};

const rightBounds: CollisionObject = {
  x: 668,
  y: 0,
  width: 32,
  height: CANVAS_HEIGHT,
  colour: COLLISION_COLOUR,
};

const bottomBounds1: CollisionObject = {
  x: 0,
  y: 510,
  width: 221,
  height: 66,
  colour: COLLISION_COLOUR,
};
const bottomBounds2: CollisionObject = {
  x: 293,
  y: 547,
  width: 411,
  height: 32,
  colour: COLLISION_COLOUR,
};

const bottomBounds3: CollisionObject = {
  x: 291,
  y: 512,
  width: 123,
  height: 67,
  colour: COLLISION_COLOUR,
};

const bottomBounds4: CollisionObject = {
  x: 609,
  y: 512,
  width: 92,
  height: 61,
  colour: COLLISION_COLOUR,
};

const leftBounds: CollisionObject = {
  x: 0,
  y: 0,
  width: 32,
  height: 567,
  colour: COLLISION_COLOUR,
};

const backWallBound: CollisionObject = {
  x: 131,
  y: 56,
  width: 442,
  height: 38,
  colour: COLLISION_COLOUR,
};

const backWallUpperBound: CollisionObject = {
  x: 34,
  y: 20,
  width: 642,
  height: 38,
  colour: COLLISION_COLOUR,
};

const backWallBookshelf1: CollisionObject = {
  x: 34,
  y: 20,
  width: 59,
  height: 94,
  colour: COLLISION_COLOUR,
};

const backWallItems: CollisionObject = {
  x: 160,
  y: 63,
  width: 286,
  height: 53,
  colour: COLLISION_COLOUR,
};

const backWallBookshelf2: CollisionObject = {
  x: 610,
  y: 31,
  width: 68,
  height: 83,
  colour: COLLISION_COLOUR,
};

// Furniture --------------------------------------------

const leftWallBookshelf: CollisionObject = {
  x: 35,
  y: 385,
  width: 26,
  height: 131,
  colour: COLLISION_COLOUR,
};

const rightWallBookshelf: CollisionObject = {
  x: 644,
  y: 255,
  width: 26,
  height: 125,
  colour: COLLISION_COLOUR,
};

const windowDesk: CollisionObject = {
  x: 480,
  y: 468,
  width: 65,
  height: 32,
  colour: COLLISION_COLOUR,
};

const windowChair: CollisionObject = {
  x: 487,
  y: 414,
  width: 20,
  height: 32,
  colour: COLLISION_COLOUR,
};

const bookDesk: CollisionObject = {
  x: 99,
  y: 205,
  width: 91,
  height: 46,
  colour: COLLISION_COLOUR,
};

const bookDeskChair: CollisionObject = {
  x: 102,
  y: 159,
  width: 20,
  height: 32,
  colour: COLLISION_COLOUR,
};

const bookDeskSideChair: CollisionObject = {
  x: 230,
  y: 224,
  width: 20,
  height: 27,
  colour: COLLISION_COLOUR,
};

const sofa: CollisionObject = {
  x: 456,
  y: 159,
  width: 82,
  height: 32,
  colour: COLLISION_COLOUR,
};

const livingRoomStand: CollisionObject = {
  x: 578,
  y: 155,
  width: 28,
  height: 37,
  colour: COLLISION_COLOUR,
};

const livingRoomChairs: CollisionObject = {
  x: 581,
  y: 225,
  width: 20,
  height: 61,
  colour: COLLISION_COLOUR,
};

// Doors -----------------------------------------------

const aliHouseExitFrontDoor: CollisionObject = {
  x: 222,
  y: 540,
  width: 68,
  height: 30,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "mallet-town",
      160,
      300,
      currentScene,
      malletTownCollisionObjects,
      malletTownInteractionObjects
    ),
};

const aliHouseExitBackDoor: CollisionObject = {
  x: 575,
  y: 65,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "mallet-town",
      224,
      90,
      currentScene,
      malletTownCollisionObjects,
      malletTownInteractionObjects
    ),
};

const aliEnterBedroomDoor: CollisionObject = {
  x: 95,
  y: 65,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "ali-bedroom",
      130,
      148,
      currentScene,
      aliBedroomCollisionObjects,
      aliBedroomInteractionObjects
    ),
};

export const aliHouseCollisionObjects = [
  topBounds,
  rightBounds,
  bottomBounds1,
  bottomBounds2,
  bottomBounds3,
  bottomBounds4,
  backWallBound,
  backWallUpperBound,
  backWallBookshelf1,
  backWallItems,
  backWallBookshelf2,
  leftBounds,
  aliHouseExitFrontDoor,
  aliHouseExitBackDoor,
  aliEnterBedroomDoor,
  leftWallBookshelf,
  rightWallBookshelf,
  windowDesk,
  windowChair,
  bookDesk,
  bookDeskChair,
  bookDeskSideChair,
  sofa,
  livingRoomStand,
  livingRoomChairs,
];
