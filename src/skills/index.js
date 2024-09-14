import React from "react";
import data from "./data.json";
import SkillBox from "./component/skillBox";
const Skills = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Skills</h1>
      <div className="w-3/4 flex justify-center items-center flex-wrap">
        {data.map((skill, index) => (
          <SkillBox index={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
