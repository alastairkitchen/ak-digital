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

export interface AppState {
  currentOpenModal: ModalType | null;
  cvProgress: CvSection[];
  textBoxIsOpen: boolean;
}

const initialState: AppState = {
  currentOpenModal: null,
  cvProgress: [],
  textBoxIsOpen: false,
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
    openTextBox: (state) => {
      state.textBoxIsOpen = true;
    },
    closeTextBox: (state) => {
      state.textBoxIsOpen = false;
    },
  },
});

export const {
  openAppModal,
  closeAppModal,
  setCvProgress,
  openTextBox,
  closeTextBox,
} = appSlice.actions;

export const currentOpenModalSelector: (
  state: RootState
) => ModalType | null = (state) => state.app.currentOpenModal;

export const cvProgressSelector: (state: RootState) => CvSection[] = (state) =>
  state.app.cvProgress;

export const textBoxIsOpenSelector: (state: RootState) => boolean = (state) =>
  state.app.textBoxIsOpen;

export default appSlice.reducer;
