import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
import ExperiencePage from "./components/ExperiencePage";
import EducationPage from "./components/EducationPage";

function HomePage() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <div className="two-col-layout">
        <Experience />
        <Education />
      </div>
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/project/:slug" element={<ProjectDetails />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/education" element={<EducationPage />} />
    </Routes>
  );
}