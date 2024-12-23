import Icon from "../../assets/img/icon.png";
import Hand from "../../assets/svg/hand.svg";
import Send from "../../assets/svg/send.svg";
import Scroll from "../../assets/svg/scroll.svg";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h1 className="font-weight-bold big-text text-left">
              Hi! I'm <span className="subtitle">David Cruz</span>
              <img className="home_hand ml-4" src={Hand} alt="Hand greeting" />
            </h1>
            <h5 className="font-weight-regular profession text-left">
              {" "}
              Software Engineer{" "}
            </h5>
            <p className="paragraph mt-5">
              Systems engineer based in El Salvador. I specialize in responsive
              UI/UX and front-end design and development, I also have knowledge
              as a back-end. I am passionate about the IT world and constant
              innovation.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start mt-5">
              <a href="#contact" className="btn btn-primary hello-btn">
                Say Hello <img src={Send} alt="Send icon" />
              </a>
            </div>
          </div>
          <div className="d-flex col-lg-6 col-md-6 col-sm-12 justify-content-center mt-5">
            <img src={Icon} alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
      {/* <div className="home_scroll row text-center">
        <div className="col-md-6 col-sm-12 mt-5">
          <a>
            <svg
              width="32"
              height="32"
              className="home_scroll_mouse"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWiterLimit: "1.5",
              }}
            >
              <path
                className="wheel"
                d="M123.359,79.775l0,72.843"
                style={{ fill: "none", stroke: "#000000", strokeWidth: "20px" }}
              ></path>
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{ fill: "none", stroke: "#000000", strokeWidth: "20px" }}
              ></path>
            </svg>
            <span className="home_scroll-name"> Scroll Down </span>
            <i className="uil uil-arrow-down home_scroll-arrow"></i>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
