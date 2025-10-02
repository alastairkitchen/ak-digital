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
  textBoxContent: string;
  textBoxModal: ModalType | null;
  gameMode: GameMode;
}

const initialState: AppState = {
  currentOpenModal: null,
  cvProgress: [],
  textBoxIsOpen: false,
  textBoxContent: "",
  textBoxModal: null,
  gameMode: "game",
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
      action: PayloadAction<{ content: string; modalType: ModalType | null }>
    ) => {
      state.gameMode = "text-box";
      state.textBoxIsOpen = true;
      state.textBoxContent = action.payload.content;
      state.textBoxModal = action.payload.modalType;
    },
    closeTextBox: (state) => {
      state.gameMode = "game";
      state.textBoxIsOpen = false;
      state.textBoxContent = "";
      state.textBoxModal = null;
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
} = appSlice.actions;

export const currentOpenModalSelector: (
  state: RootState
) => ModalType | null = (state) => state.app.currentOpenModal;

export const cvProgressSelector: (state: RootState) => CvSection[] = (state) =>
  state.app.cvProgress;

export const textBoxIsOpenSelector: (state: RootState) => boolean = (state) =>
  state.app.textBoxIsOpen;

export const textBoxContentSelector: (state: RootState) => string = (state) =>
  state.app.textBoxContent;

export const textBoxModalSelector: (state: RootState) => ModalType | null = (
  state
) => state.app.textBoxModal;

export const gameModeSelector: (state: RootState) => GameMode = (state) =>
  state.app.gameMode;

export default appSlice.reducer;
