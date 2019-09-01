import React, { useState, useEffect } from "react";
import "../css/projects.css";
import catcalc from '../img/catcalc1.png'

const Projects = () => {
  return (
    <div className="projects">
      <div className="title projects-title">Projects</div>
      <div className="project-card">
        <div className="card-container">
          <div className="project-title">Cat Calculator</div>
          <img src={catcalc} alt="" className="project-img"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
