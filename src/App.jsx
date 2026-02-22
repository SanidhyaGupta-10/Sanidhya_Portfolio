import { Draggable} from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

import {Navbar, Welcome, Dock, Home} from '#components'
import {Terminal, Safari, Resume, Finder, Text , Image, Contact, Photos} from "#windows";

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
           <Photos />

           <Home />
       </main>
    )
}
export default App
