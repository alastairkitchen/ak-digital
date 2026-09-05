import { CvSection, ModalType } from "@/store/appSlice";

const CHARACTER_LIMIT = 250;

const congratulationsMessage =
  "Congratulations you found your first section of the CV, find all sections then check ali's computer to collect your prize!";

export const chunkText = (
  header: string,
  text: string,
  cvProgress: CvSection[],
  congratsMessageShown: boolean,
  textBoxModal: ModalType | null,
) => {
  const chunks = [];
  let nextCharacter = text[0];
  let startIndex = 0;
  let endIndex = CHARACTER_LIMIT;

  if (textBoxModal !== null) {
    if (cvProgress.length < 2 && !congratsMessageShown) {
      chunks.push(congratulationsMessage);
    }

    chunks.push(header);
  }

  if (text.length <= CHARACTER_LIMIT) {
    chunks.push(text);
    return chunks;
  }

  while (nextCharacter) {
    const newChunk = text.slice(startIndex, endIndex);
    chunks.push(newChunk);
    startIndex = endIndex + 1;
    endIndex = startIndex + CHARACTER_LIMIT;
    nextCharacter = text[startIndex];
  }

  return chunks;
};
