import React, { useState, useEffect } from "react";
import "../css/projects.css";
import catcalc from "../img/catcalc1.png";
import pickydex1 from "../img/pickydex1.png";
import ecomm1 from "../img/ecomm1.png";
import ProjectCard from "./layout/ProjectCard";
import Menu from "./layout/Menu";

const project1 = {
  projectName: "Calculator Cat",
  projectImg: catcalc,
  type: "Mobile, Front End, UX/UI",
  lang: "Javascript",
  framework: "React, React-Native",
  other: "react-native-community/async-storage 1.5.1",
  githubLink: "https://github.com/slittleton/CatCalculator2",
  projectLink: "https://play.google.com/store/apps/details?id=com.catcalculator"
};
const project2 = {
  projectName: "Ecommerce Website",
  projectImg: ecomm1,
  type: "Front End, Back End",
  lang: "Javascript",
  framework: "React",
  runTimeEnvironment: "Node Js",
  other:
    "express, mongoDB, mongoose, jsonwebtoken, joi, bcrypt, config, redux, dotenv, braintree, query-string, react-redux, redux-thunk ",
  githubLink: "https://github.com/slittleton/ecomm1",
  projectLink: "https://github.com/slittleton/ecomm1"
};
const project3 = {
  projectName: "PickyDex",
  projectImg: pickydex1,
  type: "Mobile, Front End, UX/UI",
  lang: "Javascript",
  framework: "React, React-Native",
  other:
    "redux, react-redux, redux-thunk, react-native-community/async-storage, react-native-gesture-handler, react-navigation",
  githubLink: "https://github.com/slittleton/pickydexNative",
  projectLink:
    "https://play.google.com/store/apps/details?id=com.pickydexnative"
};

const Projects = React.forwardRef((props, projectsRef) => {
  return (
    <div className="spacer-container"ref={projectsRef}>
   
        <div className="projects">
          <div className="title-wrapper">
            <div className="title-dark">Projects</div>
          </div>

          <div className="projects-container" >
            <ProjectCard project={project1} />
            <ProjectCard project={project2} />
            <ProjectCard project={project3} />
          </div>
        </div>

    </div>
  );
});

export default Projects;
