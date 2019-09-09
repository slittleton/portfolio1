import React from 'react';

const familiar = [
  "Javascript / ECMAScript",
  "React",
  "React Native",
  "Redux",
  "Node JS",
  "Express",
  "MongoDB",
  "Mongoose",
  "GIT",
  "HTML",
  "CSS",
  "CSS-grid",
  "CSS-flexbox",
  "Photoshop",
  "JSX",
  "REST"
];
const someFamiliarity = [
  "Python",
  "OOP",
  "Adobe Illustrator",
  "Clip Studio Paint",
  "Bootstrap",
  "Webpack",
  "Babel",
  "SSH",
  "MySQL",
  "FireBase",
  "JOI",
  "Heroku"
];
const ETLearnAbout = ["C#", ".Net", "Java", "Kotlin", "PHP"];

const AboutTech = () =>{
  return(
    <div className="bottom">
            <div className="exp">
              <h2 className=" center exp-title">Tech</h2>
            </div>

            <div className="exp-container">
              <div className="exp-grid">
                <div className="small-grid-unit">
                  <div className="sub-subtitle">Familiar</div>
                </div>
              </div>
              <div className="exp-grid">
                <div className="small-grid-unit"></div>
                <div className="flx">
                  <div className="exp-item list-grid">
                    {familiar.map((item, index) => {
                      return (
                        <li className="grid-list-item" key={index}>
                          {item}
                        </li>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="exp-grid">
                <div className="small-grid-unit">
                  <div className="sub-subtitle">Some Familiarity</div>
                </div>
              </div>
              <div className="exp-grid">
                <div className="small-grid-unit"></div>
                <div className="flx">
                  <div className="exp-item list-grid">
                    {someFamiliarity.map((item, index) => {
                      return (
                        <li className="grid-list-item" key={index}>
                          {item}
                        </li>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="exp-grid">
                <div className="small-grid-unit">
                  <div className="sub-subtitle">Excited To Learn About</div>
                </div>
              </div>
              <div className="exp-grid">
                <div className="small-grid-unit"></div>
                <div className="flx">
                  <div className="exp-item list-grid">
                    {ETLearnAbout.map((item, index) => {
                      return (
                        <li className="grid-list-item" key={index}>
                          {item}
                        </li>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
export default AboutTech;