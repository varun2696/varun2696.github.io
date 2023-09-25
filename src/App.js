import React from "react";
import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/Navbar";
import Projects from "./components/projects/Projects";
import { About } from "./components/about/About";
import GithubStats from "./components/GithubStats";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Home />
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
