import React from "react";
import ExperienceCard from "./components/ExperienceCard";
import data from "./data.json";
const Experiences = () => {
  return (
    <section id="experiences" className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold my-4">Work Experience</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {data.map((experience, index) => (
          <ExperienceCard index={index} experience={experience} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Experiences;
