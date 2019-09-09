import React, { createRef } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Menu from "./components/layout/Menu";

const navClick = id => {
  id.current.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

const homeRef = createRef();
const projectsRef = createRef();
const aboutRef = createRef();
const contactRef = createRef();


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu
          navClick={navClick}
          homeRef={homeRef}
          projectsRef={projectsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />

        <Home
          ref={homeRef}
          navClick={navClick}
          projectsRef={projectsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
        <Projects ref={projectsRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />


      </div>
    </BrowserRouter>
  );
}

export default App;
