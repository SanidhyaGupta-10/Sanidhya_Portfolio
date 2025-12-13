import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {Copy, PanelLeft, Search, ShieldHalf, Plus, Share } from "lucide-react";
import { ChevronLeft , ChevronRight} from "lucide-react";

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target='safari'/>

                <PanelLeft className="ml-10 icon" />

                <div className="flex items-center gap-1 ml-6">
                    <ChevronLeft className="icon"/>
                    <ChevronRight className="icon"/>
                </div>
                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className="icon" />

                    <div className="search">
                        <Search className="icon"/>

                        <input
                            className="flex-1"
                            type="text"
                            placeholder="Search or enter website name" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Share className="icon"/>
                    <Plus className="icon"/>
                    <Copy className="icon"/>
                </div>
            </div>
            <div className="blog flex flex-col h-full">
                <h2 className="text-2xl font-semibold mb-4">My Developer Blog</h2>

                {/* Scrollable content */}
                <div className="space-y-8 overflow-y-auto pr-3 flex-1">

                    {/* React & Next.js */}
                    <section>
                        <h3 className="text-xl font-medium">React & Next.js</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>What I learned building components in React</li>
                            <li>Client vs Server Components in Next.js</li>
                            <li>Folder structure I use in Next.js projects</li>
                            <li>Common React mistakes and how I fixed them</li>
                        </ul>
                    </section>

                    {/* Animations */}
                    <section>
                        <h3 className="text-xl font-medium">Animations</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>Why I use GSAP for complex animations</li>
                            <li>GSAP vs Framer Motion — when to use which</li>
                            <li>My first experience with React Three Fiber</li>
                            <li>Performance lessons from animated UIs</li>
                        </ul>
                    </section>

                    {/* React Native */}
                    <section>
                        <h3 className="text-xl font-medium">React Native & Expo</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>React Native vs Web — mindset differences</li>
                            <li>My first mobile app using Expo</li>
                            <li>Sharing logic between web and mobile apps</li>
                        </ul>
                    </section>

                    {/* Backend */}
                    <section>
                        <h3 className="text-xl font-medium">Backend</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>How I structured a simple Express API</li>
                            <li>Backend mistakes I made as a frontend developer</li>
                            <li>What Node.js taught me about async behavior</li>
                        </ul>
                    </section>

                </div>
            </div>



        </>
    )
}

const SafariWindow = WindowWrapper(Safari, "safari")

export default SafariWindow;
