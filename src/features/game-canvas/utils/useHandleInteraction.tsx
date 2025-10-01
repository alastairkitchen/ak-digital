import { useOpenDirectModal } from "@/features/redux-modals/useOpenModal";
import { CollisionObject } from "../collision-objects";
import { Player } from "../useSetupCanvas";
import { wouldCollide } from "./would-collide";
import { useDispatch } from "react-redux";
import { setCvProgress } from "@/store/appSlice";

export function useHandleInteraction() {
  const { openModal } = useOpenDirectModal();
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
        openModal(collidingObject.interaction.modalType);
        dispatch(setCvProgress(collidingObject.interaction.cvSection));
      }
    }
  };

  return { handleInteraction };
}
