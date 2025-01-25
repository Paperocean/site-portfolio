import React from "react";
import "../styles/about.css";

const description =
  "I am currently studying IT Automation Systems. Additionally, I have a keen interest in artificial intelligence. I always strive to learn new things and improve my skills in various areas.";

const skills = {
  frontend: ["JavaScript", "Express.js", "Unity (in the context of Mixed Reality user interface)"],
  backend: ["C#", "Python", "SQL", "Standard Template Library (STL)", "Docker"],
  mixedReality: [
    "Unity",
    "Mixed Reality Tools",
    "Development of a Mixed Reality GUI for HoloLens 2",
    "Mesh Processing",
  ],
  generalProgramming: [
    "C++",
    "Python (Programming Language)",
    "Object-Oriented Programming (OOP)",
    "Data Structures Execution Time",
    "Problem Solving",
  ],
  networkEngineering: [
    "IP Networks (IPv4, IPv6, Ethernet)",
    "Routing",
    "Packet Switching",
    "Network Security",
    "CCNA: Introduction to Networks",
  ],
  projectManagementAndTools: [
    "Project Management",
    "GitHub",
    "Github Flow",
    "Teamwork",
    "Communication",
  ],
};

const detailOrQuote =
  "I am passionate about questioning the status quo and finding ways to improve processes. " +
  "I am always looking for ways to improve my skills and learn new things.";

const About = () => {
  const skillCategories = Object.keys(skills);
  const leftColumnSkills = skillCategories.slice(0, Math.ceil(skillCategories.length / 2));
  const rightColumnSkills = skillCategories.slice(Math.ceil(skillCategories.length / 2));

  const formattedSkillCategories = {
    frontend: "Frontend",
    backend: "Backend",
    mixedReality: "Mixed Reality",
    generalProgramming: "General Programming",
    networkEngineering: "Network Engineering",
    projectManagementAndTools: "Project Management And Tools",
  };

  return (
    <section className="section" id="about">
      <div className="card">
        <h2>About Myself</h2>
        <p>{description}</p>
        <hr className="divider" />

        <h2>Skills</h2>
        <div className="container">
          <div className="left-column">
            {leftColumnSkills.map((category) => (
              <div key={category} className="left">
                <h3>{formattedSkillCategories[category]}</h3>
                <ul>
                  {skills[category].map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="right-column">
            {rightColumnSkills.map((category) => (
              <div key={category} className="right">
                <h3>{formattedSkillCategories[category]}</h3>
                <ul>
                  {skills[category].map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="divder" />
        <p className="quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
