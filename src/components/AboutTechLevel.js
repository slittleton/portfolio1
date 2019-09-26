import React from "react";

const AboutTechLevel = ({ tech, category }) => {
  return (
    <div>
      <div className="subtitle">{category}</div>
      {tech.map(item => {
        return (
          <div>
            <li>{item}</li>
          </div>
        );
      })}
    </div>
  );
};
export default AboutTechLevel;
