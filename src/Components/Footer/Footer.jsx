import { Card } from "antd";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="my-3 d-flex justify-content-center">
        <div className="row">
          <div className="col-4">
            <a
              href="https://discord.com/users/644250041594150914"
              target="_blank"
              title="Discord"
            >
              <Card
                className="card border-0 shadow"
                style={{ width: "75px", height: "auto" }}
              >
                <i className="bx bxl-discord-alt"></i>
              </Card>
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://github.com/cruzito-x"
              target="_blank"
              title="GitHub"
            >
              <Card
                className="card border-0 shadow"
                style={{ width: "75px", height: "auto" }}
              >
                <i className="bx bxl-github"></i>
              </Card>
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://linkedin.com/in/cruzsv"
              target="_blank"
              title="LinkedIn"
            >
              <Card
                className="card border-0 shadow"
                style={{ width: "75px", height: "auto" }}
              >
                <i className="bx bxl-linkedin-square"></i>
              </Card>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-3">
        <div>
          <a
            href="https://github.com/cruzito-x"
            target="_blank"
            title="If you can dream it you can program it"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <span className="big"> 🪐 </span>{" "}
          </a>
        </div>
        <label className="font-weight-regular">
          {" "}
          © cruzito.x - All rights reserved{" "}
        </label>
      </div>
    </div>
  );
};

export default Footer;
