import { changeScene, currentScene } from "../useSetupCanvas";

const COLLISION_ACTION_COLOUR = "green";
const COLLISION_COLOUR = "red";

export type CollisionObject = {
  x: number;
  y: number;
  width: number;
  height: number;
  colour: string;
  action?: () => void;
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
      malletTownCollisionObjects
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
      300,
      300,
      currentScene,
      malletTownCollisionObjects
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
      300,
      300,
      currentScene,
      aliBedroomCollisionObjects
    ),
};

const aliBedroomExitDoor: CollisionObject = {
  x: 128,
  y: 97,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene("ali-house", 300, 300, currentScene, aliHouseCollisionObjects),
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

const alexHouseExitFrontDoor: CollisionObject = {
  x: 320,
  y: 540,
  width: 65,
  height: 30,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "mallet-town",
      300,
      300,
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
      300,
      300,
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
      300,
      300,
      currentScene,
      alexBedroomCollisionObjects
    ),
};

const alexBedroomExitDoor: CollisionObject = {
  x: 512,
  y: 98,
  width: 32,
  height: 32,
  colour: COLLISION_ACTION_COLOUR,
  action: () =>
    changeScene(
      "alex-house",
      300,
      300,
      currentScene,
      alexHouseCollisionObjects
    ),
};

const signAlexHouse: CollisionObject = {
  x: 388,
  y: 260,
  width: 28,
  height: 25,
  colour: COLLISION_COLOUR,
};

const fence1: CollisionObject = {
  x: 285,
  y: 370,
  width: 170,
  height: 25,
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
  x: 400,
  y: 500,
  width: 115,
  height: 200,
  colour: COLLISION_COLOUR,
};

export const malletTownCollisionObjects = [
  aliHouseMain,
  aliHouseDoor,
  alexHouseDoor,
  alexHouse,
  //fence1,
  signAliHouse,
  signAlexHouse,
  water,
];

export const aliHouseCollisionObjects = [
  aliHouseExitFrontDoor,
  aliHouseExitBackDoor,
  aliEnterBedroomDoor,
];
export const alexHouseCollisionObjects = [
  alexHouseExitFrontDoor,
  alexHouseExitBackDoor,
  alexEnterBedroomDoor,
];
export const aliBedroomCollisionObjects = [aliBedroomExitDoor];
export const alexBedroomCollisionObjects = [alexBedroomExitDoor];
