import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experiences from "./components/Experiences";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)", transition: "all 0.3s ease" }}>
      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <Hero dark={dark} toggleTheme={toggleTheme} />
      <About />
      <Projects />
      <Certifications />
      <Experiences />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;