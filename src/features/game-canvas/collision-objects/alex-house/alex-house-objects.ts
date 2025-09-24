import { COLLISION_ACTION_COLOUR, COLLISION_COLOUR, CollisionObject } from "..";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../const";
import { changeScene, currentScene } from "../../useSetupCanvas";
import { alexBedroomCollisionObjects } from "../alex-bedroom/alex-bedroom-objects";
import { malletTownCollisionObjects } from "../mallet-town/mallet-town-objects";

// Bounds ------------------------------------------

const topBounds: CollisionObject = {
  x: 0,
  y: 0,
  width: CANVAS_WIDTH,
  height: 32,
  colour: COLLISION_COLOUR,
};

const bottomLeftBounds: CollisionObject = {
  x: 0,
  y: 512,
  width: 318,
  height: 35,
  colour: COLLISION_COLOUR,
};

const bottomRightBounds: CollisionObject = {
  x: 386,
  y: 512,
  width: 318,
  height: 35,
  colour: COLLISION_COLOUR,
};

const leftBounds: CollisionObject = {
  x: 0,
  y: 0,
  width: 32,
  height: CANVAS_HEIGHT,
  colour: COLLISION_COLOUR,
};

const rightBounds: CollisionObject = {
  x: 672,
  y: 0,
  width: 32,
  height: CANVAS_HEIGHT,
  colour: COLLISION_COLOUR,
};

const backWall: CollisionObject = {
  x: 130,
  y: 32,
  width: 444,
  height: 63,
  colour: COLLISION_COLOUR,
};

// Furniture --------------------------------------

const bluePillTable: CollisionObject = {
  x: 129,
  y: 387,
  width: 97,
  height: 44,
  colour: COLLISION_COLOUR,
};

const bluePillTableChair: CollisionObject = {
  x: 134,
  y: 351,
  width: 20,
  height: 27,
  colour: COLLISION_COLOUR,
};

const bluePillTableSideChair: CollisionObject = {
  x: 228,
  y: 416,
  width: 20,
  height: 26,
  colour: COLLISION_COLOUR,
};

const redPillTable: CollisionObject = {
  x: 479,
  y: 387,
  width: 97,
  height: 44,
  colour: COLLISION_COLOUR,
};

const redPillTableChair: CollisionObject = {
  x: 552,
  y: 351,
  width: 20,
  height: 27,
  colour: COLLISION_COLOUR,
};

const redPillTableSideChair: CollisionObject = {
  x: 580,
  y: 418,
  width: 20,
  height: 26,
  colour: COLLISION_COLOUR,
};

const bookshelf1: CollisionObject = {
  x: 43,
  y: 27,
  width: 43,
  height: 88,
  colour: COLLISION_COLOUR,
};

const bookshelf2: CollisionObject = {
  x: 619,
  y: 27,
  width: 44,
  height: 88,
  colour: COLLISION_COLOUR,
};

const firePlace: CollisionObject = {
  x: 230,
  y: 32,
  width: 54,
  height: 84,
  colour: COLLISION_COLOUR,
};

const backWallItems: CollisionObject = {
  x: 330,
  y: 49,
  width: 212,
  height: 67,
  colour: COLLISION_COLOUR,
};

const candleStand: CollisionObject = {
  x: 642,
  y: 409,
  width: 28,
  height: 29,
  colour: COLLISION_COLOUR,
};

const leftWallSideShelf: CollisionObject = {
  x: 32,
  y: 321,
  width: 29,
  height: 111,
  colour: COLLISION_COLOUR,
};

const rightWallSideShelf: CollisionObject = {
  x: 642,
  y: 191,
  width: 29,
  height: 111,
  colour: COLLISION_COLOUR,
};

// Doors ------------------------------------------

const alexHouseExitFrontDoor: CollisionObject = {
  x: 320,
  y: 540,
  width: 65,
  height: 30,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "mallet-town",
      482,
      310,
      currentScene,
      malletTownCollisionObjects
    ),
};

const alexHouseExitBackDoor: CollisionObject = {
  x: 96,
  y: 64,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "mallet-town",
      446,
      92,
      currentScene,
      malletTownCollisionObjects
    ),
};
const alexEnterBedroomDoor: CollisionObject = {
  x: 576,
  y: 64,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "alex-bedroom",
      512,
      146,
      currentScene,
      alexBedroomCollisionObjects
    ),
};

export const alexHouseCollisionObjects = [
  alexHouseExitFrontDoor,
  alexHouseExitBackDoor,
  alexEnterBedroomDoor,
  topBounds,
  bottomLeftBounds,
  bottomRightBounds,
  leftBounds,
  rightBounds,
  bookshelf1,
  backWall,
  bluePillTable,
  bluePillTableChair,
  bluePillTableSideChair,
  redPillTable,
  redPillTableChair,
  redPillTableSideChair,
  bookshelf2,
  firePlace,
  backWallItems,
  candleStand,
  leftWallSideShelf,
  rightWallSideShelf,
];
