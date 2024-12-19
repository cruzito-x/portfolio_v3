import "./menu.css";

const App = () => {
  return (
    <nav className="navbar p-4">
      <div className="first-name">
        David <span className="last-name">Cruz</span>
      </div>
      <ul className="navbar-menu">
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
        <li>
          <a>
            {" "}
            <i className="bx bx-moon"></i>{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default App;
