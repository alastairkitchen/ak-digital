"use client";
import { useRef } from "react";
import { Scene } from "../state/types";
import { SCENE_IMAGE_SRC } from "../scenes/scene-images";
import { createBrowserImage } from "./createBrowserImage";

export type SceneImages = Record<Scene, HTMLImageElement>;

export const useImagePreloader = () => {
  const imagesRef = useRef<SceneImages | null>(null);

  if (!imagesRef.current) {
    const images = {} as SceneImages;
    (Object.keys(SCENE_IMAGE_SRC) as Scene[]).forEach((scene) => {
      images[scene] = createBrowserImage(SCENE_IMAGE_SRC[scene]);
    });
    imagesRef.current = images;
  }

  return imagesRef.current;
};
