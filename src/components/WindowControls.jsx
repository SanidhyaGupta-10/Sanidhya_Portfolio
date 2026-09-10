import useWindowStore from "#store/window.js";
import { Minus, Plus, X } from "lucide-react";

const WindowControls = ({ target }) => {
    const { closeWindow, minimizeWindow, toggleMaximizeWindow } = useWindowStore();
    return (
        <div id="window-controls">
            <div
                className="close"
                onClick={() => closeWindow(target)}
                title="Close"
            >
                <X className="control-icon" />
            </div>
            <div
                className="minimize"
                onClick={() => minimizeWindow(target)}
                title="Minimize"
            >
                <Minus className="control-icon" />
            </div>
            <div
                className="maximize"
                onClick={() => toggleMaximizeWindow(target)}
                title="Maximize"
            >
                <Plus className="control-icon" />
            </div>
        </div>
    )
}
export default WindowControls
