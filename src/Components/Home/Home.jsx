import Icon from "../../assets/img/icon.png";
import Hand from "../../assets/svg/hand.svg";
import Send from "../../assets/svg/send.svg";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h1 className="font-weight-bold big-text text-left">Hi! I'm <span className="subtitle">David Cruz</span>
              <img className="home_hand ml-4" src={Hand} alt="Hand greeting" />
            </h1>
            <h5 className="font-weight-regular profession">
              {" "}
              Software Engineer{" "}
            </h5>
            <p className="paragraph mt-5">
              Systems engineer based in El Salvador. I specialize in responsive
              UI/UX and front-end design and development, I also have knowledge as
              a back-end. I am passionate about the IT world and constant
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
    </div>
  );
};

export default Home;
