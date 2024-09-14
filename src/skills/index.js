import React from "react";
import data from "./data.json";
import SkillBox from "./component/SkillBox";
const Skills = () => {
  return (
    <section id="skills" className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold my-4">Skills</h1>
      <div className="w-3/4 flex justify-center items-center flex-wrap">
        {data.map((skill, index) => (
          <SkillBox index={index} skill={skill} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
