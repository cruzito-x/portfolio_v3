import { Card, Collapse } from "antd";
import { projectsData } from "../../data/portfolio";
import './projects.css';
const { Meta } = Card;

const Projects = () => {
  return (
    <div className="projects">
      <div className="d-flex justify-content-center">
        <h1 className="font-weight-bold my-3">Projects Portfolio</h1>
      </div>
      <div className="portfolio d-flex flex-wrap justify-content-center">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            hoverable
            style={{
              width: 400,
              margin: "15px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            cover={
              <img
                alt={project.title}
                src={project.image}
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            }
          >
            <Meta
              title={project.title}
              description={
                <p>
                  {project.description} <br />{" "}
                  <Collapse
                    size="small"
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
                                  alignItems: "center",
                                  marginRight: "10px",
                                }}
                              >
                                {tech.icon}{" "}
                                <span className="ml-1">{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        ),
                      },
                    ]}
                  />
                </p>
              }
            />
            {project.deploy_url && (
              <>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => window.open(project.deploy_url, "_blank")}
                >
                  <i className="bx bx-code"></i> Deploy
                </button>
              </>
            )}

            {project.source_url && (
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={() => window.open(project.source_url, "_blank")}
              >
                <i className="bx bxl-github"></i> Source
              </button>
            )}

            {project.design_url && (
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={() => window.open(project.design_url, "_blank")}
              >
                <i className="bx bxl-figma"></i> Source
              </button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
