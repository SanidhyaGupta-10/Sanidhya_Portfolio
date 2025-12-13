import { Draggable} from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

import { Navbar, Welcome, Dock } from '#components'
import {Terminal, Safari, Resume, Finder, Text , Image, Contact} from "#windows";

const App = () => {
    return (
       <main>
           <Navbar />
           <Welcome />
           <Dock />
           <Terminal />
           <Safari />
            <Resume />
           <Finder />
           <Text />
           <Image />
           <Contact />
       </main>
    )
}
export default App
