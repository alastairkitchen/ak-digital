import { CvSection, ModalType } from "../../../store/appSlice";
import { PlayerDirection } from "../useSetupCanvas";

export const COLLISION_ACTION_COLOUR = "transparent";
export const COLLISION_COLOUR = "transparent";
export const COLLISION_INTERACTION_COLOUR = "transparent";

type Interaction = {
  playerDirectionToActivate: PlayerDirection;
  modalType: ModalType;
  cvSection: CvSection;
};

export type CollisionObject = {
  x: number;
  y: number;
  width: number;
  height: number;
  colour: string;
  action?: () => void;
  interaction?: Interaction;
};
