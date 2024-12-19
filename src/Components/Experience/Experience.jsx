import { Timeline } from "antd";
import $ from "jquery";
import "./experience.css";

const Experience = () => {
  $(function () {
    $("#academic-timeline").hide();

    $("#academic-timeline-btn").click(function () {
      $("#academic-timeline").show();
      $("#laboral-timeline").hide();
    });

    $("#laboral-timeline-btn").click(function () {
      $("#academic-timeline").hide();
      $("#laboral-timeline").show();
    });
  });

  return (
    <div className="experience" id="experience">
      <div className="d-flex justify-content-center">
        <div className="text-center my-3">
          <h1 className="font-weight-bold">Experience</h1>
          <h5 className="font-weight-bold subtitle"> My history </h5>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="font-weight-bold border-0 sub-subtitle mr-2"
          id="laboral-timeline-btn"
        >
          <i className="bx bxs-briefcase"></i>
          Experience
        </button>
        |
        <button
          className="font-weight-bold border-0 sub-subtitle ml-2"
          id="academic-timeline-btn"
        >
          <i className="bx bxs-graduation"></i>
          Education
        </button>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Timeline
          id="laboral-timeline"
          mode="alternate"
          items={[
            {
              children: [
                <>
                  <h6 className="font-weight-bold">Software Developer</h6>
                  <h6 className="font-weight-light">
                    {" "}
                    CodeEye Solutions Inc. (Canadá - El Salvador){" "}
                  </h6>
                  <p>Apr. 2023 - Jun. 2024</p>
                </>,
              ],
            },
            {
              children: [
                <>
                  <h6 className="font-weight-bold">Technician's Assistant</h6>
                  <h6 className="font-weight-light">
                    {" "}
                    Caja Mutual de los Empleados del MINED. (El Salvador){" "}
                  </h6>
                  <p>Feb. 2019 - Aug. 2019</p>
                </>,
              ],
            },
          ]}
        />

        <Timeline
          mode="alternate"
          id="academic-timeline"
          items={[
            {
              children: [
                <>
                  <h6 className="font-weight-bold">
                    Pre-especiality at Data Science
                  </h6>
                  <h6 className="font-weight-light">
                    {" "}
                    Universidad Tecnológica de El Salvador (UTEC).{" "}
                  </h6>
                  <p>Present</p>
                </>,
              ],
            },
            {
              children: [
                <>
                  <h6 className="font-weight-bold">
                    Systems and Computer Engineering
                  </h6>
                  <h6 className="font-weight-light">
                    {" "}
                    Universidad Tecnológica de El Salvador (UTEC).{" "}
                  </h6>
                  <p>2020 - 2024</p>
                </>,
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Experience;
