import appReducer, {
  AppState,
  closeTextBox,
  openTextBox,
  setInteractionCooldown,
  clearInteractionCooldown,
} from "./appSlice";

const getInitialState = (): AppState =>
  appReducer(undefined, { type: "@@INIT" });

describe("appSlice", () => {
  it("opens the text box with the given content", () => {
    const state = appReducer(
      getInitialState(),
      openTextBox({
        header: "Technical Skills",
        content: "React, TypeScript",
        modalType: "skills",
      }),
    );

    expect(state.gameMode).toBe("text-box");
    expect(state.textBoxIsOpen).toBe(true);
    expect(state.textBoxHeader).toBe("Technical Skills");
    expect(state.textBoxContent).toBe("React, TypeScript");
    expect(state.textBoxModal).toBe("skills");
  });

  it("resets the text box and starts an interaction cooldown on close", () => {
    const opened = appReducer(
      getInitialState(),
      openTextBox({ header: "h", content: "c", modalType: null }),
    );

    const state = appReducer(opened, closeTextBox());

    expect(state.gameMode).toBe("game");
    expect(state.textBoxIsOpen).toBe(false);
    expect(state.textBoxModal).toBeNull();
    expect(state.textBoxCurrentChunkIndex).toBe(0);
    expect(state.interactionCooldownUntil).toBeGreaterThan(Date.now());
  });

  it("sets and clears an interaction cooldown", () => {
    const cooledDown = appReducer(
      getInitialState(),
      setInteractionCooldown(1000),
    );
    expect(cooledDown.interactionCooldownUntil).toBeGreaterThan(Date.now());

    const cleared = appReducer(cooledDown, clearInteractionCooldown());
    expect(cleared.interactionCooldownUntil).toBeNull();
  });
});
