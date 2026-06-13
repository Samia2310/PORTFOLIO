import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";
import "./Navbar.css";

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = ["About", "Projects", "Certifications", "Experiences", "Achievements", "Contact"];
  const themeClass = dark ? "dark" : "light";

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero")?.offsetHeight || window.innerHeight;

      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "certifications", "experiences", "achievements", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (!scrolled) return null;

  return (
    <>
      <nav className={"navbar scrolled " + themeClass}>
        <a href="#about" className="logo">
          Kazi Omar Faruk
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <CloseIcon className="nav-control-icon" />
          ) : (
            <MenuIcon className="nav-control-icon" />
          )}
        </button>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={"#" + link.toLowerCase()}
                className={
                  activeSection === link.toLowerCase() ? "active" : ""
                }
              >
                {link}
              </a>
            </li>
          ))}

          <li>
            <button
              className={"theme-icon-btn " + themeClass}
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? (
                <SunIcon className="theme-icon-svg" />
              ) : (
                <MoonIcon className="theme-icon-svg" />
              )}
            </button>
          </li>
        </ul>
      </nav>

      {menuOpen &&
        createPortal(
          <>
            <div
              className="drawer-overlay"
              onClick={() => setMenuOpen(false)}
            />

            <div className={"navbar-drawer " + themeClass}>
              <nav className="drawer-links">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={"#" + link.toLowerCase()}
                    onClick={() => setMenuOpen(false)}
                    className={
                      "drawer-link " +
                      (activeSection === link.toLowerCase()
                        ? "active"
                        : "")
                    }
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </>,
          document.body
        )}
    </>
  );
}