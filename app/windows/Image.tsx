"use client";

import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

interface ImageWindowData {
  name?: string;
  imageUrl?: string;
}

const ImageWindowContent = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data as ImageWindowData | undefined;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header" className="flex items-center gap-2">
        <WindowControls target="imgfile" />
        <h2 className="truncate">{name}</h2>
      </div>

      <div className="p-4 bg-white flex justify-center items-center">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name ?? "image preview"}
            loading="lazy"
            className="max-w-full max-h-[75vh] object-contain rounded"
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");

export default ImageWindow;
