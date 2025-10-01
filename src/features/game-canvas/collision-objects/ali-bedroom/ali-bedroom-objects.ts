import { COLLISION_ACTION_COLOUR, COLLISION_COLOUR, CollisionObject } from "..";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../const";
import { aliHouseInteractionObjects } from "../../interaction-objects/ali-house/ali-house-objects";
import { changeScene, currentScene } from "../../useSetupCanvas";
import { aliHouseCollisionObjects } from "../ali-house/ali-house-objects";

// Bounds -----------------------------------------

const topBound: CollisionObject = {
  x: 0,
  y: 0,
  width: CANVAS_WIDTH,
  height: 61,
  colour: COLLISION_COLOUR,
};

const bottomBound: CollisionObject = {
  x: 0,
  y: 513,
  width: CANVAS_WIDTH,
  height: 61,
  colour: COLLISION_COLOUR,
};

const leftBound: CollisionObject = {
  x: 0,
  y: 0,
  width: 96,
  height: CANVAS_HEIGHT,
  colour: COLLISION_COLOUR,
};

const rightBound: CollisionObject = {
  x: 609,
  y: 0,
  width: 96,
  height: CANVAS_HEIGHT,
  colour: COLLISION_COLOUR,
};

const backWallLeftBound: CollisionObject = {
  x: 97,
  y: 63,
  width: 30,
  height: 65,
  colour: COLLISION_COLOUR,
};

const backWallRightBound: CollisionObject = {
  x: 163,
  y: 63,
  width: 127,
  height: 65,
  colour: COLLISION_COLOUR,
};

const backWallTopDoor: CollisionObject = {
  x: 96,
  y: 23,
  width: 84,
  height: 66,
  colour: COLLISION_COLOUR,
};

const backWallItems: CollisionObject = {
  x: 288,
  y: 80,
  width: 323,
  height: 66,
  colour: COLLISION_COLOUR,
};

// Doors ------------------------------------------

const aliBedroomExitDoor: CollisionObject = {
  x: 128,
  y: 97,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "ali-house",
      100,
      120,
      currentScene,
      aliHouseCollisionObjects,
      aliHouseInteractionObjects
    ),
};

// Furniture ------------------------------------------

const desk: CollisionObject = {
  x: 160,
  y: 364,
  width: 96,
  height: 40,
  colour: COLLISION_COLOUR,
};

const deskChair: CollisionObject = {
  x: 231,
  y: 416,
  width: 20,
  height: 27,
  colour: COLLISION_COLOUR,
};

const servers: CollisionObject = {
  x: 162,
  y: 268,
  width: 93,
  height: 43,
  colour: COLLISION_COLOUR,
};

const serverTable: CollisionObject = {
  x: 257,
  y: 292,
  width: 30,
  height: 20,
  colour: COLLISION_COLOUR,
};

const bed: CollisionObject = {
  x: 528,
  y: 357,
  width: 63,
  height: 78,
  colour: COLLISION_COLOUR,
};

const bedChest: CollisionObject = {
  x: 543,
  y: 434,
  width: 33,
  height: 32,
  colour: COLLISION_COLOUR,
};

const hangOutChair: CollisionObject = {
  x: 515,
  y: 194,
  width: 24,
  height: 27,
  colour: COLLISION_COLOUR,
};

const hangOutSideChair: CollisionObject = {
  x: 580,
  y: 226,
  width: 22,
  height: 28,
  colour: COLLISION_COLOUR,
};

const hangOutTable: CollisionObject = {
  x: 520,
  y: 236,
  width: 44,
  height: 37,
  colour: COLLISION_COLOUR,
};

export const aliBedroomCollisionObjects = [
  topBound,
  bottomBound,
  leftBound,
  rightBound,
  aliBedroomExitDoor,
  backWallLeftBound,
  backWallRightBound,
  backWallTopDoor,
  backWallItems,
  deskChair,
  servers,
  serverTable,
  bed,
  bedChest,
  hangOutChair,
  hangOutSideChair,
  hangOutTable,
  desk,
];
