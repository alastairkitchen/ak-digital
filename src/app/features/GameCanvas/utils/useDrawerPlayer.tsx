import { player, Player } from "../useSetupCanvas";

const characterUp1 = new Image();
characterUp1.src = "http://localhost:3000/character-sprites/up-1.png";
const characterUp2 = new Image();
characterUp2.src = "http://localhost:3000/character-sprites/up-2.png";
const characterUp3 = new Image();
characterUp3.src = "http://localhost:3000/character-sprites/up-3.png";
const characterUp4 = new Image();
characterUp4.src = "http://localhost:3000/character-sprites/up-4.png";

const characterDown1 = new Image();
characterDown1.src = "http://localhost:3000/character-sprites/down-1.png";
const characterDown2 = new Image();
characterDown2.src = "http://localhost:3000/character-sprites/down-2.png";
const characterDown3 = new Image();
characterDown3.src = "http://localhost:3000/character-sprites/down-3.png";
const characterDown4 = new Image();
characterDown4.src = "http://localhost:3000/character-sprites/down-4.png";

const characterLeft1 = new Image();
characterLeft1.src = "http://localhost:3000/character-sprites/left-1.png";
const characterLeft2 = new Image();
characterLeft2.src = "http://localhost:3000/character-sprites/left-2.png";
const characterLeft3 = new Image();
characterLeft3.src = "http://localhost:3000/character-sprites/left-3.png";
const characterLeft4 = new Image();
characterLeft4.src = "http://localhost:3000/character-sprites/left-4.png";

const characterRight1 = new Image();
characterRight1.src = "http://localhost:3000/character-sprites/right-1.png";
const characterRight2 = new Image();
characterRight2.src = "http://localhost:3000/character-sprites/right-2.png";
const characterRight3 = new Image();
characterRight3.src = "http://localhost:3000/character-sprites/right-3.png";
const characterRight4 = new Image();
characterRight4.src = "http://localhost:3000/character-sprites/right-4.png";

let currentCharacter: HTMLImageElement = characterDown1;

export const useDrawerPlayer = () => {
  let startXPosition: number = player.x;
  let startYPosition: number = player.y;

  const drawPlayer = (
    ctx: CanvasRenderingContext2D | null,
    keys: Record<string, boolean>,
    player: Player
  ) => {
    if (!ctx) return;

    if (keys["ArrowUp"] || keys["w"]) {
      if (player.y >= startYPosition - 10 && player.y <= startYPosition - 1) {
        currentCharacter = characterUp1;
      }
      if (player.y >= startYPosition - 20 && player.y <= startYPosition - 11) {
        currentCharacter = characterUp2;
      }
      if (player.y >= startYPosition - 30 && player.y <= startYPosition - 21) {
        currentCharacter = characterUp3;
      }
      if (player.y >= startYPosition - 40 && player.y <= startYPosition - 31) {
        currentCharacter = characterUp4;
      }
    }
    if (keys["ArrowDown"] || keys["s"]) {
      if (player.y >= startYPosition && player.y <= startYPosition + 9) {
        currentCharacter = characterDown1;
      }
      if (player.y >= startYPosition + 10 && player.y <= startYPosition + 19) {
        currentCharacter = characterDown2;
      }
      if (player.y >= startYPosition + 20 && player.y <= startYPosition + 29) {
        currentCharacter = characterDown3;
      }
      if (player.y >= startYPosition + 30 && player.y <= startYPosition + 39) {
        currentCharacter = characterDown4;
      }
    }
    if (keys["ArrowLeft"] || keys["a"]) {
      if (player.x >= startXPosition - 10 && player.x <= startXPosition - 1) {
        currentCharacter = characterLeft1;
      }
      if (player.x >= startXPosition - 20 && player.x <= startXPosition - 11) {
        currentCharacter = characterLeft2;
      }
      if (player.x >= startXPosition - 30 && player.x <= startXPosition - 21) {
        currentCharacter = characterLeft3;
      }
      if (player.x >= startXPosition - 40 && player.x <= startXPosition - 31) {
        currentCharacter = characterLeft4;
      }
    }
    if (keys["ArrowRight"] || keys["d"]) {
      if (player.x >= startXPosition && player.x <= startXPosition + 9) {
        currentCharacter = characterRight1;
      }
      if (player.x >= startXPosition + 10 && player.x <= startXPosition + 19) {
        currentCharacter = characterRight2;
      }
      if (player.x >= startXPosition + 20 && player.x <= startXPosition + 29) {
        currentCharacter = characterRight3;
      }
      if (player.x >= startXPosition + 30 && player.x <= startXPosition + 39) {
        currentCharacter = characterRight4;
      }
    }

    ctx.drawImage(
      currentCharacter,
      player.x,
      player.y,
      player.size,
      player.size
    );

    if (player.y >= startYPosition + 40 || player.y <= startYPosition - 40) {
      startYPosition = player.y;
    }
    if (player.x >= startXPosition + 40 || player.x <= startXPosition - 40) {
      startXPosition = player.x;
    }
  };

  return {
    drawPlayer,
  };
};
