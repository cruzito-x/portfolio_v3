import Profile from "../../assets/img/profile.png";
import Hand from "../../assets/svg/hand.svg";
import Send from "../../assets/svg/send.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="d-flex">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="font-weight-bold big-text">
              Hi! I'm<span className="subtitle">David Cruz</span>
              <img className="home_hand" src={Hand} alt="Hand greeting" />
            </h1>
            <h5 className="font-weight-regular profession">
              {" "}
              Software Engineer{" "}
            </h5>
            <p className="paragraph mt-4">
              Systems engineer based in El Salvador. I am a specialist in
              responsive UI/UX, design and front-end development while I have
              knowledge as a back-end. I am passionate about the IT world and
              constant innovation.
            </p>
            <div className="d-flex justify-content-center mt-5">
              <a href="#contact" className="btn btn-primary hello-btn">
                Say Hello <img src={Send} alt="Send icon" />
              </a>
            </div>
          </div>
          <div className="d-flex col-lg-6 col-md-6 col-sm-12 justify-content-center">
            <img src={Profile} alt="Profile" style={{ height: "500px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
