import React from "react";

const AboutTechLevel = ({ tech, category }) => {
  return (
    <div classname="">
      <div className="subtitle small-padtop">{category}</div>
      {tech.map(item => {
        return (
          <div>
            <li className="text">{item}</li>
          </div>
        );
      })}
    </div>
  );
};
export default AboutTechLevel;
