import $ from 'jquery';
import "../../styles/menu.css";

const App = () => {
  $(function () {
    $("#dark-mode").on('click', () => {
      localStorage.setItem("dark-mode", 1);
    });
  });

  return (
    <nav className="navbar pt-4 pl-4 pr-4 pb-0">
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
      </ul>
    </nav>
  );
};

export default App;
