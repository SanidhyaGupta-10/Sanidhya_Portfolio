import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target='resume'/>
                <h2>Resume.pdf</h2>

                <a
                    href="/files/SanidhyaResume.pdf"
                    className="cursor-pointer"
                    download
                    title="Download PDF"
                >
                    <Download className="icon" />
                </a>
            </div>

            <Document file='/files/SanidhyaResume.pdf'>
                <Page
                    pageNumber={1}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                />
            </Document>
        </>
    );
}

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow;
