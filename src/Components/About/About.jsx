import Profile from "../../assets/img/profile.png";
import Download from "../../assets/svg/files.svg";
import CV from "../../assets/docs/David Cruz - CV.pdf";
import "../../styles/about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="d-flex justify-content-center">
        <div className="text-center my-3">
          <h1 className="font-weight-bold">About me</h1>
          <h5 className="font-weight-bold subtitle"> Who&apos;s David Cruz? </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="blob-profile-photo">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100%"
              id="blobSvg"
            >
              <defs>
                <clipPath id="blobClip">
                  <path fill="currentColor">
                    <animate
                      repeatCount="indefinite"
                      attributeName="d"
                      dur="10000ms"
                      values="
              M456.5,295.5Q454,341,434.5,387Q415,433,369.5,454.5Q324,476,275,475.5Q226,475,186,452.5Q146,430,107.5,406Q69,382,38,342Q7,302,27,254.5Q47,207,60.5,164.5Q74,122,108.5,93.5Q143,65,186,58Q229,51,277.5,33.5Q326,16,363,49.5Q400,83,424,122.5Q448,162,453.5,206Q459,250,456.5,295.5Z; 
              M453.5,294Q447,338,417,370Q387,402,349.5,421Q312,440,268.5,465Q225,490,183,464.5Q141,439,113,404.5Q85,370,62,332.5Q39,295,44.5,251.5Q50,208,55,160Q60,112,103,91Q146,70,186.5,52.5Q227,35,270.5,44.5Q314,54,360,65.5Q406,77,422.5,121.5Q439,166,449.5,208Q460,250,453.5,294Z; 
              M463.5,294.5Q451,339,423,375Q395,411,355.5,432Q316,453,272,454.5Q228,456,186,444.5Q144,433,105,408.5Q66,384,36,343Q6,302,12.5,251.5Q19,201,48.5,163Q78,125,113.5,100Q149,75,187.5,46Q226,17,269,38Q312,59,363.5,63Q415,67,427.5,116Q440,165,458,207.5Q476,250,463.5,294.5Z; M456.5,295.5Q454,341,434.5,387Q415,433,369.5,454.5Q324,476,275,475.5Q226,475,186,452.5Q146,430,107.5,406Q69,382,38,342Q7,302,27,254.5Q47,207,60.5,164.5Q74,122,108.5,93.5Q143,65,186,58Q229,51,277.5,33.5Q326,16,363,49.5Q400,83,424,122.5Q448,162,453.5,206Q459,250,456.5,295.5Z; "
                    ></animate>
                  </path>
                </clipPath>
              </defs>
              <image
                xlinkHref={Profile}
                x="-5"
                y="35"
                width="500"
                height="500"
                style={{ clipPath: "url(#blobClip)" }}
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <p>
            I&apos;m currently 22 years old, I&apos;m a graduate student of{" "}
            <span className="subtitle font-weight-bold">
              Systems and Computer Engineering
            </span>
            , I have experience as a{" "}
            <span className="subtitle font-weight-bold">Designer</span> and{" "}
            <span className="subtitle font-weight-bold">Software Engineer</span>{" "}
            using various design tools such as Figma. As for development, I have
            experience in web application development using technologies such as
            JavaScript using React.js, Node.js and Express.js, Php using Laravel
            and MySQL, SQL Server and PostgreSQL to{" "}
            <span className="subtitle font-weight-bold">
              relational database development
            </span>{" "}
            or MongoDB to{" "}
            <span className="subtitle font-weight-bold">
              no relational database development
            </span>
            .
            <br /> <br />
            I&apos;m currently pursuing a pre-specialty in{" "}
            <span className="subtitle font-weight-bold">Data Science</span> at
            the{" "}
            <span className="subtitle font-weight-bold">
              Universidad Tecnológica de El Salvador
            </span>
            .
            <br /> <br /> Beyond my professional life, I&apos;m also an{" "}
            <span className="subtitle font-weight-bold">
              occasional cosplayer
            </span>
            , a creative passion that allows me to bring my favorite characters
            to life through crafting and design. This hobby enhances my
            creativity and problem-solving skills, which I also bring to my work
            as an engineer. <br />
            <br />
          </p>
        </div>
        <div className="col-md-6 col-sm-0"></div>
        <div className="col-md-6 col-sm-12 text-center">
          <a
            href={CV}
            className="btn btn-primary hello-btn justify-content-center"
            target="_blank"
            title="Download CV"
          >
            Download CV <img src={Download} alt="Download icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
