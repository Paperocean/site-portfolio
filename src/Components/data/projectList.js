import h2_1 from "../../images/hl2_1.jpg";
import h2_2 from "../../images/hl2_2.jpg";
import h2_3 from "../../images/hl2_3.jpg";
import h2_4 from "../../images/hl2_4.jpg";
import bliss_1 from "../../images/bliss_1.jpg";
import bliss_2 from "../../images/bliss_2.jpg";

const projectList = [
  {
    title: "Development of a Mixed Reality GUI for HoloLens 2",
    description:
      "Designed and implemented an interactive GUI for the HoloLens 2, enabling real-time tracking of head, eye, and hand movements, as well as responsive 3D object management. The application featured server integration, gaze-based mesh scanning, and efficient data processing pipelines tailored for mixed reality environments.",
    keyFeatures: [
      {
        feature: "Data Processing",
        description:
          "Captured and saved positional data of the head, eyes, and hands in real-time for mixed reality interactions.",
      },
      {
        feature: "3D Object Management",
        description:
          "Dynamically imported and rendered .obj, .glb, and .gltf files using server requests, ensuring smooth and responsive interactions within the HoloLens 2 environment.",
      },
      {
        feature: "Mesh Scanning",
        description:
          "Implemented a gaze cursor-based system to scan, process, and save mesh data. Captured meshes per frame as .obj files (vertices and triangles) and posted them to a server for further use.",
      },
    ],
    technologiesUsed: [
      "Unity (3D application development)",
      "C# (scripting)",
      "WebRTC (real-time server communication)",
      "Mixed Reality Toolkit (integration with HoloLens 2)",
      "Eye, Hand, and Head Tracking (user interaction)",
      "Mesh Processing (3D mesh export and management)",
    ],
    projectStructure:
      "The application was structured into modular components for scalability and maintainability, including directories for Cursor, Tracking, Export, Managers, and Server. Key scripts handled gaze detection, mesh management, server communication, and user interface control.",
    outcome:
      "Delivered a robust HoloLens 2 application showcasing advanced real-time tracking, responsive 3D interactions, and efficient data handling, providing a foundation for innovative mixed reality solutions.",
    images: [
      {
        src: h2_1,
        description:
          "The image showcases a responsive GUI that appears after the HoloLens detects the inner part of the user's hand, demonstrating seamless interaction between hand tracking technology and the interface.",
      },
      {
        src: h2_2,
        description:
          "The image shows a loaded Homer model, along with a grid used for scanning objects.",
      },
      { src: h2_4, description: "Scanned model of classroom" },
      { src: h2_3, description: "Scanned model of classroom 2" },
    ],
  },
  {
    title: "Fullstack Web Application for Event Ticket Booking",
    description:
      "Developed a fullstack web application for booking event tickets, featuring user authentication, event creation, and ticket purchasing.",
    skills: ["JavaScript", "Docker", "SQL", "Express.js", "Project Management", "GitHub Flow"],
    images: [
      {
        src: bliss_2,
        description: "Home page",
      },
      {
        src: bliss_1,
        description: "Event view page",
      },
    ],
  },
];

export default projectList;
