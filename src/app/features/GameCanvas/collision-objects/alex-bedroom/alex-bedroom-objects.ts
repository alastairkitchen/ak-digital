import { COLLISION_ACTION_COLOUR, COLLISION_COLOUR, CollisionObject } from "..";
import { changeScene, currentScene } from "../../useSetupCanvas";
import { alexHouseCollisionObjects } from "../alex-house/alex-house-objects";

const rightBounds: CollisionObject = {
  x: 612,
  y: 53,
  width: 32,
  height: 470,
  colour: COLLISION_COLOUR,
};

const bottomBounds: CollisionObject = {
  x: 87,
  y: 515,
  width: 530,
  height: 32,
  colour: COLLISION_COLOUR,
};

const leftBounds: CollisionObject = {
  x: 60,
  y: 49,
  width: 32,
  height: 470,
  colour: COLLISION_COLOUR,
};

const topWall: CollisionObject = {
  x: 97,
  y: 95,
  width: 410,
  height: 32,
  colour: COLLISION_COLOUR,
};

const topWallRight: CollisionObject = {
  x: 548,
  y: 80,
  width: 61,
  height: 48,
  colour: COLLISION_COLOUR,
};

// Furniture --------------------------------------------

const topFurniture: CollisionObject = {
  x: 128,
  y: 111,
  width: 257,
  height: 29,
  colour: COLLISION_COLOUR,
};

const bed: CollisionObject = {
  x: 145,
  y: 337,
  width: 62,
  height: 59,
  colour: COLLISION_COLOUR,
};

const bedCabinate: CollisionObject = {
  x: 159,
  y: 401,
  width: 33,
  height: 35,
  colour: COLLISION_COLOUR,
};

const coffeeTableChairLeft: CollisionObject = {
  x: 130,
  y: 225,
  width: 24,
  height: 29,
  colour: COLLISION_COLOUR,
};

const coffeeTableChairTop: CollisionObject = {
  x: 196,
  y: 193,
  width: 24,
  height: 29,
  colour: COLLISION_COLOUR,
};

const coffeeTable: CollisionObject = {
  x: 170,
  y: 239,
  width: 42,
  height: 33,
  colour: COLLISION_COLOUR,
};

const tallServer: CollisionObject = {
  x: 450,
  y: 265,
  width: 28,
  height: 47,
  colour: COLLISION_COLOUR,
};

const cabinateServer: CollisionObject = {
  x: 483,
  y: 289,
  width: 58,
  height: 24,
  colour: COLLISION_COLOUR,
};

const computerDesk: CollisionObject = {
  x: 449,
  y: 364,
  width: 93,
  height: 34,
  colour: COLLISION_COLOUR,
};

const computerChair: CollisionObject = {
  x: 518,
  y: 417,
  width: 20,
  height: 28,
  colour: COLLISION_COLOUR,
};

// Doors --------------------------------------------

const alexBedroomExitDoor: CollisionObject = {
  x: 512,
  y: 98,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "alex-house",
      576,
      120,
      currentScene,
      alexHouseCollisionObjects
    ),
};

export const alexBedroomCollisionObjects = [
  alexBedroomExitDoor,
  rightBounds,
  bottomBounds,
  leftBounds,
  topWall,
  topWallRight,
  bed,
  bedCabinate,
  coffeeTableChairLeft,
  coffeeTableChairTop,
  coffeeTable,
  tallServer,
  cabinateServer,
  computerDesk,
  computerChair,
  topFurniture,
];
