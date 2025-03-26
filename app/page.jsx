import React from "react";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Profile from "./pages/Profile"; // หรือ Contact/Experiences ถ้าใช้ชื่อนั้น

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
        id="projects"
        className="min-h-screen flex justify-center items-center"
      >
        <Projects />
      </section>

     
    </div>
  );
};

export default Home;