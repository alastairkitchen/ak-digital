import { changeScene, currentScene } from "../../useSetupCanvas";
import { alexHouseCollisionObjects } from "../alex-house/alex-house-objects";
import { COLLISION_ACTION_COLOUR, COLLISION_COLOUR, CollisionObject } from "..";
import { aliHouseCollisionObjects } from "../ali-house/ali-house-objects";

// Bounds -----------------------------------------------

const topBounds: CollisionObject = {
  x: 0,
  y: 30,
  width: 703,
  height: 30,
  colour: COLLISION_COLOUR,
};

const rightBounds: CollisionObject = {
  x: 670,
  y: 30,
  width: 32,
  height: 550,
  colour: COLLISION_COLOUR,
};

const bottomBounds: CollisionObject = {
  x: 0,
  y: 545,
  width: 703,
  height: 30,
  colour: COLLISION_COLOUR,
};

const leftBounds: CollisionObject = {
  x: 0,
  y: 30,
  width: 32,
  height: 550,
  colour: COLLISION_COLOUR,
};

// Ali house ----------------------------------------------

const aliHouseMain: CollisionObject = {
  x: 130,
  y: 165,
  width: 160,
  height: 120,
  colour: COLLISION_COLOUR,
};

const aliHouseDoor: CollisionObject = {
  x: 158,
  y: 260,
  width: 35,
  height: 40,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene("ali-house", 240, 500, currentScene, aliHouseCollisionObjects),
};

const aliHouseBackDoor: CollisionObject = {
  x: 224,
  y: 145,
  width: 32,
  height: 29,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene("ali-house", 574, 120, currentScene, aliHouseCollisionObjects),
};

const signAliHouse: CollisionObject = {
  x: 98,
  y: 260,
  width: 28,
  height: 25,
  colour: COLLISION_COLOUR,
};

// Alex house ----------------------------------------------

const alexHouse: CollisionObject = {
  x: 418,
  y: 165,
  width: 160,
  height: 120,
  colour: COLLISION_COLOUR,
};

const alexHouseDoor: CollisionObject = {
  x: 478,
  y: 260,
  width: 35,
  height: 40,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "alex-house",
      338,
      455,
      currentScene,
      alexHouseCollisionObjects
    ),
};

const alexHouseBackDoor: CollisionObject = {
  x: 448,
  y: 145,
  width: 33,
  height: 36,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene("alex-house", 98, 135, currentScene, alexHouseCollisionObjects),
};

const signAlexHouse: CollisionObject = {
  x: 388,
  y: 260,
  width: 28,
  height: 25,
  colour: COLLISION_COLOUR,
};

// Environment ----------------------------------------------

const planterFence: CollisionObject = {
  x: 135,
  y: 386,
  width: 150,
  height: 32,
  colour: COLLISION_COLOUR,
};

const water: CollisionObject = {
  x: 450,
  y: 418,
  width: 160,
  height: 160,
  colour: COLLISION_COLOUR,
};

export const malletTownCollisionObjects = [
  topBounds,
  rightBounds,
  bottomBounds,
  leftBounds,
  aliHouseMain,
  aliHouseDoor,
  alexHouseDoor,
  alexHouse,
  planterFence,
  signAliHouse,
  signAlexHouse,
  water,
  aliHouseBackDoor,
  alexHouseBackDoor,
];
