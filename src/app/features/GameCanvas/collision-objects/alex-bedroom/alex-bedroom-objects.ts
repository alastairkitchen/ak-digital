import { COLLISION_ACTION_COLOUR, CollisionObject } from "..";
import { changeScene, currentScene } from "../../useSetupCanvas";
import { alexHouseCollisionObjects } from "../alex-house/alex-house-objects";

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

export const alexBedroomCollisionObjects = [alexBedroomExitDoor];
