import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-2">
      <figure className="px-10 pt-10">
        <img
          src={project.imgUrl}
          alt="Project"
          className="rounded-xl border-2"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions w-full justify-evenly items-center">
          <a
            className="flex justify-between"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-neutral">
              <span className="mr-1">View Project</span> <LuExternalLink />
            </button>
          </a>

          <a
            href={project.githubUrl}
            className="flex justify-between items-center"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <span className="mr-1">GitHub</span>
              <FaGithub size={25} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
