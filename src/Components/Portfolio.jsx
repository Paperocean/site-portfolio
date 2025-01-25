import React from "react";
import "../styles/portfolio.css";

const projectList = [
  {
    title: "Development of a Mixed Reality GUI for HoloLens 2",
    description: "Designed and implemented an interactive GUI for the HoloLens 2, enabling real-time tracking of head, eye, and hand movements, as well as responsive 3D object management. The application featured server integration, gaze-based mesh scanning, and efficient data processing pipelines tailored for mixed reality environments.",
    keyFeatures: [
      {
        feature: "Data Processing",
        description: "Captured and saved positional data of the head, eyes, and hands in real-time for mixed reality interactions."
      },
      {
        feature: "3D Object Management",
        description: "Dynamically imported and rendered .obj, .glb, and .gltf files using server requests, ensuring smooth and responsive interactions within the HoloLens 2 environment."
      },
      {
        feature: "Mesh Scanning",
        description: "Implemented a gaze cursor-based system to scan, process, and save mesh data. Captured meshes per frame as .obj files (vertices and triangles) and posted them to a server for further use."
      }
    ],
    technologiesUsed: [
      "Unity (3D application development)",
      "C# (scripting)",
      "WebRTC (real-time server communication)",
      "Mixed Reality Toolkit (integration with HoloLens 2)",
      "Eye, Hand, and Head Tracking (user interaction)",
      "Mesh Processing (3D mesh export and management)"
    ],
    projectStructure: "The application was structured into modular components for scalability and maintainability, including directories for Cursor, Tracking, Export, Managers, and Server. Key scripts handled gaze detection, mesh management, server communication, and user interface control.",
    outcome: "Delivered a robust HoloLens 2 application showcasing advanced real-time tracking, responsive 3D interactions, and efficient data handling, providing a foundation for innovative mixed reality solutions."
  },
  {
    title: "Data Structures and Algorithms Time Complexity",
    description:
      "Created a visual representation of time complexity of various data structures and algorithms.",
    url: "https://github.com/Paperocean/Data-Structure-Execution-Time-Testing",
  },
  {
    title: "Sorting Algorithms",
    description: "Created sorting algorithms in C++.",
    url: "https://github.com/Paperocean/Sorting-Algorithms",
  },
  {
    title: "My Resume Site",
    description: "Includes my experience and abilities.",
    url: "https://paperocean.github.io/resume/",
  },
];

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <h2>Projects</h2>
      <div className="container grid">
        {projectList.map((project) => (
          <div key={project.title} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <h4>Key Features:</h4>
            <ul>
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>
                  <strong>{feature.feature}:</strong> {feature.description}
                </li>
              ))}
            </ul>

            <h4>Technologies Used:</h4>
            <ul>
              {project.technologiesUsed.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <h4>Project Structure:</h4>
            <p>{project.projectStructure}</p>

            <h4>Outcome:</h4>
            <p>{project.outcome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;