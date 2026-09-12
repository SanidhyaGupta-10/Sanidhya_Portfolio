import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

import { useState } from "react";
import BootScreen from "#components/BootScreen.jsx";
import { Navbar, Welcome, Dock, Home } from '#components'
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "#windows";

const App = () => {
    const [booted, setBooted] = useState(false);

    return (
        <>
            {!booted && <BootScreen onComplete={() => setBooted(true)} />}

            {booted && (
                <main>
                    <Navbar />
                    <Welcome />
                    <Dock />

                    <Home />

                    <Terminal />
                    <Safari />
                    <Resume />
                    <Finder />
                    <Text />
                    <Image />
                    <Contact />
                    <Photos />
                </main>
            )}
        </>
    )
}
export default App
