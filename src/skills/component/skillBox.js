import React from "react";

const SkillBox = ({ index, skill }) => {
  switch (index % 8) {
    case 0:
      return <button className="btn btn-outline btn-info  m-2">{skill}</button>;
    case 1:
      return (
        <button className="btn btn-outline btn-secondarym-2">{skill}</button>
      );
    case 2:
      return (
        <button className="btn btn-outline btn-success m-2">{skill}</button>
      );
    case 3:
      return (
        <button className="btn btn-outline btn-warning m-2">{skill}</button>
      );
    case 4:
      return (
        <button className="btn btn-outline btn-accent m-2">{skill}</button>
      );
    case 5:
      return <button className="btn btn-outline btn-error m-2">{skill}</button>;
    case 6:
      return (
        <button className="btn btn-outline btn-primary m-2">{skill}</button>
      );
    case 7:
      return <button className="btn btn-outline m-2">{skill}</button>;
    default:
      return <button className="btn btn-outline btn-info m-2">{skill}</button>;
  }
};

export default SkillBox;
