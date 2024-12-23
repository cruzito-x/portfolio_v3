import { Card } from "antd";
import "../../styles/skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="d-flex justify-content-center">
        <div className="text-center my-3">
          <h1 className="font-weight-bold">Skills</h1>
          <h5 className="font-weight-bold subtitle"> My Habilities </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              className="mt-3 shadow"
              hoverable={true}
              style={{
                width: 405,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <h6 className="font-weight-bold text-center">Frontend Skills</h6>
              <div className="row">
                <div className="col-6">
                  <ul className="text-start">
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> HTML5{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> CSS3{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> JS / TS{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> Bootstrap{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> React.js{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> Angular{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              className="mt-3 shadow"
              hoverable={true}
              style={{
                width: 405,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <h6 className="font-weight-bold text-center">Backend Skills</h6>
              <div className="row">
                <div className="col-6">
                  <ul className="text-start">
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> Node.js{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> Express.js{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> PHP{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> SQL{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> MongoDB{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> Laravel{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              className="mt-3 shadow"
              hoverable={true}
              style={{
                width: 405,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <h6 className="font-weight-bold text-center">Other Skills</h6>
              <div className="row">
                <div className="col-6">
                  <ul className="text-start">
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> Figma{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> UML{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> Swagger{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> SCRUM{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> Git{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="bx bxs-badge-check subtitle"></i> ETL{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
