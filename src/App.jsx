import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero_sec from "./Components/Hero_sec.jsx";
import Projects from "./Components/Projects.jsx";
import About_me from "./Components/About_me.jsx";
import Technologies from "./Components/Technologies.jsx";
import Why_me from "./Components/Why_me.jsx";
import Footer from "./Components/Footer.jsx";

// import reactLogo from './assets/react.svg'
// import tailwind_logo from './assets/tailwind.svg'
// import framer from './assets/framer.svg'

import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-b from-darkShade via-darkerShade to-slate-800 bg-fixed w-full ">
        {" "}
        {/*to-slate-700 */}
        <Navbar />
        <section id="home">
          <Hero_sec />
        </section>
        <section id="about">
          <About_me />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <Technologies />
        <Why_me />
        <section id="contact">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
