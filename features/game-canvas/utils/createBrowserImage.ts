export const createBrowserImage = (src: string): HTMLImageElement => {
  if (typeof Image === "undefined") {
    return {} as HTMLImageElement;
  }
  const img = new Image();
  img.src = src;
  return img;
};
