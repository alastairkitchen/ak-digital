import { CollisionObject } from "../collision-objects";
import { currentInteractionCooldownUntil, Player } from "../useSetupCanvas";
import { wouldCollide } from "./would-collide";
import { useDispatch } from "react-redux";
import { openTextBox, setCvProgress } from "../../../store/appSlice";

export const useHandleInteraction = () => {
  const dispatch = useDispatch();

  const handleInteraction = (
    keys: Record<string, boolean>,
    player: Player,
    interactionObjects: CollisionObject[]
  ) => {
    if (
      currentInteractionCooldownUntil.value &&
      Date.now() < currentInteractionCooldownUntil.value
    ) {
      return;
    }

    if (keys["Enter"] || keys[" "]) {
      const { isColliding, collidingObject } = wouldCollide(
        player.x,
        player.y,
        interactionObjects,
        player
      );
      if (
        isColliding &&
        collidingObject &&
        collidingObject.interaction?.playerDirectionToActivate ===
          player.direction
      ) {
        dispatch(
          openTextBox({
            header: collidingObject.interaction.textBoxHeader,
            content: collidingObject.interaction.textBoxContent,
            modalType: collidingObject.interaction.modalType,
          })
        );
        if (collidingObject.interaction.cvSection !== null) {
          dispatch(setCvProgress(collidingObject.interaction.cvSection));
        }
      }
    }
  };

  return { handleInteraction };
};
