import Profile from "../../assets/img/profile.png";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="d-flex">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <h1 className="font-weight-bold">David Cruz</h1>
            <h5 className="font-weight-regular"> Software Engineer </h5>
            <p>
              Systems engineer, specialized in UI/UX design and front-end
              development. Passionate about the IT world and persistent
              innovation.
            </p>
            <button type="button" className="btn btn-primary">
              Say Hello
            </button>
            <button type="button" className="btn btn-primary ml-2">
              Download CV
            </button>
          </div>
          <div className="d-flex col-lg-5 col-md-6 col-sm-12 justify-content-center">
            <img src={Profile} alt="Profile" style={{ height: "500px" }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
