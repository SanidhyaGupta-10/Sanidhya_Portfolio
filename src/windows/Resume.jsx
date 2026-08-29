import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import { Download } from "lucide-react";


const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target='resume'/>
                <h2>Resume</h2>

                <a
                    href="/files/_resume.html"
                    className="cursor-pointer"
                    download
                    title="View Resume"
                >
                    <Download className="icon" />
                </a>
            </div>

            <iframe
                src="/files/_resume.html"
                style={{ width: "100%", height: "calc(100vh - 60px)", border: "none" }}
                title="Resume"
            />
        </>
    );
}

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow;
