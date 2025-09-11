import { COLLISION_ACTION_COLOUR, CollisionObject } from "..";
import { changeScene, currentScene } from "../../useSetupCanvas";
import { malletTownCollisionObjects } from "../mallet-town/mallet-town-objects";

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

export const alexHouseCollisionObjects = [
  alexHouseExitFrontDoor,
  alexHouseExitBackDoor,
  alexEnterBedroomDoor,
];

export const alexBedroomCollisionObjects = [alexBedroomExitDoor];
