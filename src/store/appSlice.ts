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
}

const initialState: AppState = {
  currentOpenModal: null,
  cvProgress: [],
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
  },
});

export const { openAppModal, closeAppModal, setCvProgress } = appSlice.actions;

export const currentOpenModalSelector: (
  state: RootState
) => ModalType | null = (state) => state.app.currentOpenModal;

export const cvProgressSelector: (state: RootState) => CvSection[] = (state) =>
  state.app.cvProgress;

export default appSlice.reducer;
