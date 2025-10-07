import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export type ModalType =
  | "cvSummary"
  | "skills"
  | "experience"
  | "projects"
  | "education";

export type CvSection =
  | "summary"
  | "skills"
  | "experience"
  | "projects"
  | "education";

export type GameMode = "game" | "text-box";

export interface AppState {
  currentOpenModal: ModalType | null;
  cvProgress: CvSection[];
  textBoxIsOpen: boolean;
  textBoxHeader: string | null;
  textBoxContent: string | null;
  textBoxModal: ModalType | null;
  textBoxCurrentChunkIndex: number;
  gameMode: GameMode;
  congratsMessageShown: boolean;
  interactionCooldownUntil: number | null;
}

const initialState: AppState = {
  currentOpenModal: null,
  cvProgress: [],
  textBoxIsOpen: false,
  textBoxHeader: "",
  textBoxContent: "",
  textBoxModal: null,
  gameMode: "game",
  congratsMessageShown: false,
  textBoxCurrentChunkIndex: 0,
  interactionCooldownUntil: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openAppModal: (state, action: PayloadAction<ModalType>) => {
      state.currentOpenModal = action.payload;
    },
    closeAppModal: (state) => {
      state.currentOpenModal = null;
    },
    setCvProgress: (state, action: PayloadAction<CvSection>) => {
      if (state.cvProgress.includes(action.payload)) return;
      state.cvProgress = [...state.cvProgress, action.payload];
    },
    setGameMode: (state, action: PayloadAction<GameMode>) => {
      state.gameMode = action.payload;
    },
    openTextBox: (
      state,
      action: PayloadAction<{
        header: string | null;
        content: string | null;
        modalType: ModalType | null;
      }>
    ) => {
      state.gameMode = "text-box";
      state.textBoxIsOpen = true;
      state.textBoxHeader = action.payload.header;
      state.textBoxContent = action.payload.content;
      state.textBoxModal = action.payload.modalType;
    },
    closeTextBox: (state) => {
      state.gameMode = "game";
      state.textBoxIsOpen = false;
      state.textBoxContent = "";
      state.textBoxModal = null;
      state.textBoxCurrentChunkIndex = 0;
    },
    setCongratsMessageShown: (state) => {
      state.congratsMessageShown = true;
    },
    setTextBoxCurrentChunkIndex: (state, action: PayloadAction<number>) => {
      state.textBoxCurrentChunkIndex = action.payload;
    },
    setInteractionCooldown: (state, action: PayloadAction<number>) => {
      state.interactionCooldownUntil = Date.now() + action.payload;
    },
    clearInteractionCooldown: (state) => {
      state.interactionCooldownUntil = null;
    },
  },
});

export const {
  openAppModal,
  closeAppModal,
  setCvProgress,
  openTextBox,
  closeTextBox,
  setGameMode,
  setCongratsMessageShown,
  setTextBoxCurrentChunkIndex,
  setInteractionCooldown,
  clearInteractionCooldown,
} = appSlice.actions;

export const currentOpenModalSelector: (
  state: RootState
) => ModalType | null = (state) => state.app.currentOpenModal;

export const cvProgressSelector: (state: RootState) => CvSection[] = (state) =>
  state.app.cvProgress;

export const textBoxIsOpenSelector: (state: RootState) => boolean = (state) =>
  state.app.textBoxIsOpen;

export const textBoxHeaderSelector: (state: RootState) => string | null = (
  state
) => state.app.textBoxHeader;

export const textBoxContentSelector: (state: RootState) => string | null = (
  state
) => state.app.textBoxContent;

export const textBoxModalSelector: (state: RootState) => ModalType | null = (
  state
) => state.app.textBoxModal;

export const gameModeSelector: (state: RootState) => GameMode = (state) =>
  state.app.gameMode;

export const congratsMessageShownSelector: (state: RootState) => boolean = (
  state
) => state.app.congratsMessageShown;

export const textBoxCurrentChunkIndexSelector: (state: RootState) => number = (
  state
) => state.app.textBoxCurrentChunkIndex;

export const interactionCooldownUntilSelector: (
  state: RootState
) => number | null = (state) => state.app.interactionCooldownUntil;

export default appSlice.reducer;
