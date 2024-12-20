import { Card, Collapse, Tag } from "antd";
import { projectsData } from "./data/portfolio";
import "../../styles/portfolio.css";

const { Meta } = Card;

const Portfolio = () => {
  return (
    <div className="portfolio my-3" id="portfolio" style={{ padding: "0 !important" }}>
      <div className="d-flex justify-content-center">
        <div className="text-center my-3">
          <h1 className="font-weight-bold my-3">Portfolio</h1>
          <h5 className="font-weight-bold subtitle"> My Projects </h5>
        </div>
      </div>
      <div className="portfolio d-flex flex-wrap justify-content-center">
        {projectsData.map((project) => (
          <Card
            className="mb-3"
            key={project.id}
            hoverable
            style={{
              width: 450,
              margin: "15px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            cover={
              <img
                alt={project.title}
                src={project.image}
                className="p-3 rounded"
                style={{
                  height: "250px"
                }}
              />
            }
          >
            <Meta title={project.title} description={project.description} />
            <Collapse
              className="mt-3"
              items={[
                {
                  key: project.id,
                  label: "Technologies Used",
                  children: (
                    <div className="tech-icons d-flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <div
                          key={tech.id}
                          style={{
                            display: "flex",
                            alignItems: "center"
                          }}
                        >
                          <Tag color={tech.color}>
                          {tech.icon} {tech.name}
                          </Tag>
                        </div>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
            <div className="mt-3">
              {project.deploy_url && (
                <button
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={() => window.open(project.deploy_url, "_blank")}
                >
                  <i className="bx bx-expand-alt"></i> Deploy
                </button>
              )}
              {project.source_url && (
                <button
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={() => window.open(project.source_url, "_blank")}
                >
                  <i className="bx bxl-github"></i> Source
                </button>
              )}
              {project.design_url && (
                <button
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={() => window.open(project.design_url, "_blank")}
                >
                  <i className="bx bxl-figma"></i> Design
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
