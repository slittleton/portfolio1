import React from "react";

const AboutTechLevel = ({ tech, category }) => {
  return (
    <div className="">
      <div className="subtitle small-padtop">{category}</div>
      {tech.map((item, index) => {
        return (
          <div key={index}>
            <li className="text">{item}</li>
          </div>
        );
      })}
    </div>
  );
};
export default AboutTechLevel;
