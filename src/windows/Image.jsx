import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

const WINDOW_KEY = "imgfile";

const ImageWindowContent = () => {
    const { windows } = useWindowStore();
    const data = windows?.[WINDOW_KEY]?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div
                id="window-header"
                className="flex items-center gap-2"
            >
                <WindowControls target={WINDOW_KEY} />
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

const ImageWindow = WindowWrapper(ImageWindowContent, WINDOW_KEY);

export default ImageWindow;
