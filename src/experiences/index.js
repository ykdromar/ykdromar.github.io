import React from "react";
import ExperienceCard from "./components/experienceCard";
import data from "./data.json";
const Experiences = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Work Experience</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {data.map((experience, index) => (
          <ExperienceCard index={index} experience={experience} />
        ))}
      </ul>
    </section>
  );
};

export default Experiences;
