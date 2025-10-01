import { useOpenDirectModal } from "@/features/redux-modals/useOpenModal";
import { CollisionObject } from "../collision-objects";
import { currentGameMode, Player } from "../useSetupCanvas";
import { wouldCollide } from "./would-collide";
import { useDispatch } from "react-redux";
import { openTextBox } from "@/store/appSlice";

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
        dispatch(openTextBox());
        currentGameMode.mode = "text-box";

        // openTextBox(text, readMore: () => {
        //   openModal(collidingObject.interaction.modalType);
        // })

        // dispatch(setCvProgress(collidingObject.interaction.cvSection));
      }
    }
  };

  return { handleInteraction };
}
