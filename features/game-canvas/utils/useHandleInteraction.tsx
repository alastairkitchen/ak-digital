import { CollisionObject } from "../collision-objects";
import { Player } from "../useSetupCanvas";
import { wouldCollide } from "./would-collide";
import { useDispatch } from "react-redux";
import { openTextBox } from "../../../store/appSlice";

export function useHandleInteraction() {
  const dispatch = useDispatch();

  const handleInteraction = (
    keys: Record<string, boolean>,
    player: Player,
    interactionObjects: CollisionObject[]
  ) => {
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
            content: collidingObject.interaction.textBoxContent,
            modalType: collidingObject.interaction.modalType || null,
          })
        );

        // dispatch(setCvProgress(collidingObject.interaction.cvSection));
      }
    }
  };

  return { handleInteraction };
}
