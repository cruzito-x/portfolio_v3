import Profile from "../../assets/img/profile.png";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="d-flex">
        <div className="row">
          <div className="col-lg-9 col-md-6 col-sm-12">
            <h1 className="font-weight-bold">David Cruz</h1>
            <h5 className="font-weight-regular"> Software Engineer </h5>
            <p>
              Systems engineer, specialized in UI/UX design and front-end
              development. Passionate about the IT world and persistent
              innovation.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
