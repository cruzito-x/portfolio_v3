import { useState } from "react";
import $ from "jquery";
import "../../styles/menu.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(0);

  const handleToggle = () => {
    const newMode = darkMode === 0 ? 1 : 0;
    setDarkMode(newMode);

    if (newMode === 1) {
      $("body, .navbar, .home, .experience, .contact").addClass(
        "dark"
      );
      localStorage.setItem("dark-mode", newMode);
    } else {
      $("body, .navbar, .home, .experience, .contact").removeClass(
        "dark"
      );
    }
  };

  return (
    <nav
      className={
        darkMode === 1
          ? "navbar pt-4 pl-4 pr-4 pb-0 d-none d-md-flex dark"
          : "navbar pt-4 pl-4 pr-4 pb-0 d-none d-md-flex"
      }
    >
      <div
        className="first-name"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      >
        David <span className="last-name">Cruz</span>
      </div>
      <ul className="navbar-menu mt-2">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: "-7px" }}
          >
            {" "}
            Say Hello{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default App;
