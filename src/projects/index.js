import React from "react";
import ProjectCard from "./components/ProjectCard";
import data from "./data.json";
const Projects = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Projects</h1>
      <div className="flex flex-wrap justify-evenly">
        {data.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
