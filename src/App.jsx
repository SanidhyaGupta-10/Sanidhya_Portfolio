import { Draggable} from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

import { Navbar, Welcome, Dock } from '#components'
import Terminal from "#windows/Terminal.jsx";

const App = () => {
    return (
       <main>
           <Navbar />
           <Welcome />
           <Dock />
           <Terminal />
       </main>
    )
}
export default App
