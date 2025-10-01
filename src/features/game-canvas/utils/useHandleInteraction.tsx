import { useOpenDirectModal } from "@/features/redux-modals/useOpenModal";
import { CollisionObject } from "../collision-objects";
import { Player } from "../useSetupCanvas";
import { wouldCollide } from "./would-collide";

export function useHandleInteraction() {
  const { openModal } = useOpenDirectModal();

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
      }
    }
  };

  return { handleInteraction };
}
