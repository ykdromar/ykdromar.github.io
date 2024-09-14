import React from "react";
import ProjectCard from "./components/ProjectCard";
import data from "./data.json";
const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold my-4">Projects</h1>
      <div className="flex flex-wrap justify-evenly">
        {data.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
