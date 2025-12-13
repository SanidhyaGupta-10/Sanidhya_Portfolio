import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

const WINDOW_KEY = "txtfile";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows?.[WINDOW_KEY]?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header" className="flex items-center gap-2">
                <WindowControls target={WINDOW_KEY} />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-6 bg-white">
                {image && (
                    <div className="w-full">
                        <img
                            src={image}
                            alt={name ?? "text content"}
                            loading="lazy"
                            className="w-full h-auto rounded"
                        />
                    </div>
                )}

                {subtitle && (
                    <h3 className="text-lg font-semibold">{subtitle}</h3>
                )}

                {Array.isArray(description) && description.length > 0 && (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, WINDOW_KEY);

export default TextWindow;
