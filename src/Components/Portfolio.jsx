import React from "react";
import "../styles/portfolio.css";
import projectList from "./data/projectList";

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="card">
        <h2>Projects</h2>
        <div className="container grid">
          {projectList.map((project) => (
            <div key={project.title} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.keyFeatures && (
                <>
                  <h4>Key Features:</h4>
                  <ul aria-label="Key Features">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>
                        <strong>{feature.feature}:</strong> {feature.description}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {project.skills && (
                <>
                  <h4>Skills:</h4>
                  <ul aria-label="Skills">
                    {project.skills.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.technologiesUsed && (
                <>
                  <h4>Technologies Used:</h4>
                  <ul aria-label="Technologies Used">
                    {project.technologiesUsed.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.projectStructure && (
                <>
                  <h4>Project Structure:</h4>
                  <p>{project.projectStructure}</p>
                </>
              )}

              {project.outcome && (
                <>
                  <h4>Outcome:</h4>
                  <p>{project.outcome}</p>
                </>
              )}

              <hr className="divider" />
              {project.images && (
                <div className="images">
                  {project.images.map((image, index) => (
                    <div key={index} className="image-container">
                      <img src={image.src} alt={`${project.title} ${index + 1}`} />
                      <p>{image.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
