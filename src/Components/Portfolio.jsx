import React from "react";
import "../styles/portfolio.css";
import projectList from "./data/projectList";

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
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

            {/* If images are implemented */}
            {project.images && project.images.length > 0 && (
              <div className="project-images">
                {project.images.map((image, index) => (
                  <img key={index} src={image} alt={`Project ${index + 1}`} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
