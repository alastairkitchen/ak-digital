import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export type ModalType = "cvSummary" | "skills";

export interface AppState {
  currentOpenModal: ModalType | null;
}

const initialState: AppState = {
  currentOpenModal: null,
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
  },
});

export const { openAppModal, closeAppModal } = appSlice.actions;

export const currentOpenModalSelector: (
  state: RootState
) => ModalType | null = (state) => state.app.currentOpenModal;

export default appSlice.reducer;
