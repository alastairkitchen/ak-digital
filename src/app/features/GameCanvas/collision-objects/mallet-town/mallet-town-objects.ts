import { changeScene, currentScene } from "../../useSetupCanvas";
import { alexHouseCollisionObjects } from "../alex-house/alex-house-objects";
import { COLLISION_ACTION_COLOUR, COLLISION_COLOUR, CollisionObject } from "..";
import { aliHouseCollisionObjects } from "../ali-house/ali-house-objects";

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

const signAlexHouse: CollisionObject = {
  x: 388,
  y: 260,
  width: 28,
  height: 25,
  colour: COLLISION_COLOUR,
};

const planterFence: CollisionObject = {
  x: 135,
  y: 386,
  width: 150,
  height: 32,
  colour: COLLISION_COLOUR,
};

const signAliHouse: CollisionObject = {
  x: 98,
  y: 260,
  width: 28,
  height: 25,
  colour: COLLISION_COLOUR,
};

const water: CollisionObject = {
  x: 450,
  y: 418,
  width: 160,
  height: 160,
  colour: COLLISION_COLOUR,
};

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
      100,
      500,
      currentScene,
      alexHouseCollisionObjects
    ),
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
];
