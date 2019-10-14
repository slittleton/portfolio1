import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const ProjectCard = props => {
  const [value, setValue] = useState(false);

  const {
    projectName,
    projectImg,
    type,
    lang,
    framework,
    other,
    githubLink,
    projectLink,
    runTimeEnvironment
  } = props.project;

  const changeTrans = () => {
    value ? setValue(false) : setValue(true);
  };

  return (
    <div
      className="project-card text"
      onMouseEnter={changeTrans}
      onMouseLeave={changeTrans}
    >
      <div className="card-container">
        <div className="project-title">{projectName}</div>

        <div className="img-container">
          <img src={projectImg} alt="cat calculator" className="project-img" />
        </div>
        <CSSTransition in={value} timeout={1000} classNames="box">
          <div className="box">
            <div className="info-block">
              <div className="info-subtitle">Project Type</div>
              <div className="info-text ">{type}</div>
            </div>
            <div className="info-block">
              <div className="info-subtitle">{`Language(s)`}</div>
              <div className="info-text">{lang}</div>
            </div>
            <div className="info-block">
              <div className="info-subtitle">{`Framework(s)`}</div>
              <div className="info-text">{framework}</div>
            </div>
            {runTimeEnvironment ? (
              <div className="info-block">
                <div className="info-subtitle">{`Runtime Environment`}</div>
                <div className="info-text">{runTimeEnvironment}</div>
              </div>
            ) : null}
            <div className="info-block">
              <div className="info-subtitle">Other Tech</div>
              <div className="info-text">{other}</div>
            </div>
            <div className="info-block">
              <div className="info-subtitle">Github Link</div>
              <a className="info-text a-link" href={githubLink}>
                {projectName} Github
              </a>
            </div>
            {projectLink ? (
              <div className="info-block">
                <div className="info-subtitle">Live Project</div>
                <a className="info-text a-link" href={projectLink}>
                  {projectName}
                </a>
              </div>
            ) : null}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
export default ProjectCard;
