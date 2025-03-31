import React from "react";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Profile from "./pages/Profile"; 
import Contact from "./pages/Contact"; 
import Experience from "./pages/Experience"; 
const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections ที่ต้องการแสดง */}
      <section
        id="profile"
        className="min-h-screen flex justify-center items-center"
      >
        <Profile />
      </section>
      <section
        id="skills"
        className="min-h-screen flex justify-center items-center"
      >
        <Skills />
      </section>

      <section
        id="experience"
        className="min-h-screen flex justify-center items-center"
      >
        <Experience />
      </section>
      <section
        id="projects"
        className="min-h-screen flex justify-center items-center"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="min-h-screen flex justify-center items-center"
      >
        <Contact />
      </section>

     
    </div>
  );
};

export default Home;