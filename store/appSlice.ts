import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from ".";
import { chunkText } from "@/features/game-canvas/utils/chunkText";

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
export type TextBoxStep = "advance" | "close" | "confirm" | "start";
export type TextBoxConfirmSelection = "yes" | "no";

export interface AppState {
  currentOpenModal: ModalType | null;
  cvProgress: CvSection[];
  textBoxIsOpen: boolean;
  textBoxHeader: string | null;
  textBoxContent: string | null;
  textBoxModal: ModalType | null;
  textBoxCurrentChunkIndex: number;
  textBoxStep: TextBoxStep;
  textBoxConfirmSelection: TextBoxConfirmSelection;
  gameMode: GameMode;
  congratsMessageShown: boolean;
  interactionCooldownUntil: number | null;
  introIsOpen: boolean;
}

// Inputs chunkText/the step calculation depend on - kept narrow so it can be
// called from reducers with the in-progress Immer draft.
type TextBoxStepInputs = Pick<
  AppState,
  | "textBoxHeader"
  | "textBoxContent"
  | "cvProgress"
  | "congratsMessageShown"
  | "textBoxModal"
  | "textBoxCurrentChunkIndex"
  | "introIsOpen"
>;

const computeTextBoxStep = (state: TextBoxStepInputs): TextBoxStep => {
  const chunks = chunkText(
    state.textBoxHeader || "",
    state.textBoxContent || "",
    state.cvProgress,
    state.congratsMessageShown,
    state.textBoxModal,
  );
  const isLastChunk = state.textBoxCurrentChunkIndex + 1 >= chunks.length;

  if (!isLastChunk) return "advance";
  if (state.introIsOpen) return "start";
  if (state.textBoxModal !== null) return "confirm";
  return "close";
};

// Recomputes the step and resets the confirm selection whenever it (re)enters "confirm".
const applyTextBoxStep = (state: AppState) => {
  state.textBoxStep = computeTextBoxStep(state);

  if (state.textBoxStep === "confirm") {
    state.textBoxConfirmSelection = "yes";
  }
};

const initialState: AppState = {
  currentOpenModal: null,
  cvProgress: [],
  textBoxIsOpen: true,
  textBoxHeader: null,
  textBoxContent: "",
  textBoxModal: null,
  gameMode: "text-box",
  congratsMessageShown: false,
  textBoxCurrentChunkIndex: 0,
  textBoxStep: "start",
  textBoxConfirmSelection: "yes",
  interactionCooldownUntil: null,
  introIsOpen: true,
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
      applyTextBoxStep(state);
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
      }>,
    ) => {
      state.gameMode = "text-box";
      state.textBoxIsOpen = true;
      state.textBoxHeader = action.payload.header;
      state.textBoxContent = action.payload.content;
      state.textBoxModal = action.payload.modalType;
      applyTextBoxStep(state);
    },
    openIntroTextBox: (
      state,
      action: PayloadAction<{
        header: string | null;
        content: string | null;
      }>,
    ) => {
      state.introIsOpen = true;
      state.gameMode = "text-box";
      state.textBoxIsOpen = true;
      state.textBoxHeader = action.payload.header;
      state.textBoxContent = action.payload.content;
      applyTextBoxStep(state);
    },
    closeTextBox: (state) => {
      state.gameMode = "game";
      state.textBoxIsOpen = false;
      state.textBoxContent = "";
      state.textBoxModal = null;
      state.textBoxCurrentChunkIndex = 0;
      state.interactionCooldownUntil = Date.now() + 500;
      applyTextBoxStep(state);
    },
    setCongratsMessageShown: (state) => {
      state.congratsMessageShown = true;
      applyTextBoxStep(state);
    },
    setTextBoxCurrentChunkIndex: (state, action: PayloadAction<number>) => {
      state.textBoxCurrentChunkIndex = action.payload;
      applyTextBoxStep(state);
    },
    setTextBoxConfirmSelection: (
      state,
      action: PayloadAction<TextBoxConfirmSelection>,
    ) => {
      state.textBoxConfirmSelection = action.payload;
    },
    setInteractionCooldown: (state, action: PayloadAction<number>) => {
      state.interactionCooldownUntil = Date.now() + action.payload;
    },
    clearInteractionCooldown: (state) => {
      state.interactionCooldownUntil = null;
    },
    startGame: (state) => {
      state.introIsOpen = false;
      state.textBoxIsOpen = false;
      state.textBoxContent = "";
      state.textBoxCurrentChunkIndex = 0;
      state.gameMode = "game";
      applyTextBoxStep(state);
    },
  },
});

export const {
  openAppModal,
  closeAppModal,
  setCvProgress,
  openTextBox,
  openIntroTextBox,
  closeTextBox,
  setGameMode,
  setCongratsMessageShown,
  setTextBoxCurrentChunkIndex,
  setTextBoxConfirmSelection,
  setInteractionCooldown,
  clearInteractionCooldown,
  startGame,
} = appSlice.actions;

export const currentOpenModalSelector: (
  state: RootState,
) => ModalType | null = (state) => state.app.currentOpenModal;

export const cvProgressSelector: (state: RootState) => CvSection[] = (state) =>
  state.app.cvProgress;

export const textBoxIsOpenSelector: (state: RootState) => boolean = (state) =>
  state.app.textBoxIsOpen;

export const textBoxHeaderSelector: (state: RootState) => string | null = (
  state,
) => state.app.textBoxHeader;

export const textBoxContentSelector: (state: RootState) => string | null = (
  state,
) => state.app.textBoxContent;

export const textBoxModalSelector: (state: RootState) => ModalType | null = (
  state,
) => state.app.textBoxModal;

export const introIsOpenSelector: (state: RootState) => boolean = (state) =>
  state.app.introIsOpen;

export const gameModeSelector: (state: RootState) => GameMode = (state) =>
  state.app.gameMode;

export const congratsMessageShownSelector: (state: RootState) => boolean = (
  state,
) => state.app.congratsMessageShown;

export const textBoxCurrentChunkIndexSelector: (state: RootState) => number = (
  state,
) => state.app.textBoxCurrentChunkIndex;

export const interactionCooldownUntilSelector: (
  state: RootState,
) => number | null = (state) => state.app.interactionCooldownUntil;

export const textBoxChunksSelector: (state: RootState) => string[] = (state) =>
  chunkText(
    state.app.textBoxHeader || "",
    state.app.textBoxContent || "",
    state.app.cvProgress,
    state.app.congratsMessageShown,
    state.app.textBoxModal,
  );

export const textBoxStepSelector: (state: RootState) => TextBoxStep = (state) =>
  state.app.textBoxStep;

export const textBoxConfirmSelectionSelector: (
  state: RootState,
) => TextBoxConfirmSelection = (state) => state.app.textBoxConfirmSelection;

export const dismissTextBox =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { congratsMessageShown, textBoxModal } = getState().app;

    dispatch(closeTextBox());

    if (!congratsMessageShown && textBoxModal !== null) {
      dispatch(setCongratsMessageShown());
    }
  };

// Moves to the previous text box chunk, if one exists.
export const retreatTextBoxChunk =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { textBoxCurrentChunkIndex } = getState().app;

    if (textBoxCurrentChunkIndex === 0) return;
    dispatch(setTextBoxCurrentChunkIndex(textBoxCurrentChunkIndex - 1));
  };

// Performs whichever action the current text box step calls for (advance, close, confirm or start).
export const advanceTextBox =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const step = textBoxStepSelector(state);

    switch (step) {
      case "advance":
        dispatch(
          setTextBoxCurrentChunkIndex(state.app.textBoxCurrentChunkIndex + 1),
        );
        break;
      case "close":
        dispatch(dismissTextBox());
        break;
      case "confirm":
        if (state.app.textBoxModal) {
          dispatch(openAppModal(state.app.textBoxModal));
        }
        break;
      case "start":
        dispatch(startGame());
        break;
    }
  };

// Activates whichever confirm option (yes/no) is currently selected.
export const activateTextBoxConfirmSelection =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { textBoxConfirmSelection } = getState().app;

    if (textBoxConfirmSelection === "no") {
      dispatch(dismissTextBox());
    } else {
      dispatch(advanceTextBox());
    }
  };

export default appSlice.reducer;
