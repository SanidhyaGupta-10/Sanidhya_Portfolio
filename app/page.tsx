"use client";

import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

import { Navbar, Welcome, Dock, Home } from "../components";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
  Photos,
} from "../components";

const App = () => {
  return (
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
  );
};

export default App;
