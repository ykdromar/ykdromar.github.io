import React from "react";
import data from "./data.json";
import EducationCard from "./components/EducationCard";
const Educations = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Education</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {data.map((education, index) => (
          <EducationCard index={index} education={education} />
        ))}
      </ul>
    </section>
  );
};

export default Educations;
