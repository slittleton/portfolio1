import React from "react";
import AboutTechLevel from "./AboutTechLevel";

// const languages = [
//   {name:"Javascript", rating: 7.5},
//   {name:"Python", rating: 4},
// ]
// const frontEnd = [
//   {name:"React", rating: 7.5},
//   {name:"React Native", rating: 7.5},
//   {name:"HTML", rating: 7.5},
//   {name:"CSS", rating: 7.5},
// ]
// const backEnd = [
//   {name:"Node.js", rating: 7.5},
//   {name:"Express", rating: 5},
//   {name:"MongoDb", rating: 5},
//   {name:"SQL", rating: 3},
// ]
// const uxUi = [
//   {name:"Photoshop", rating: 7.5},
//   {name:"Illustrator", rating: 4},
//   {name:"Clip Studio Paint", rating: 4},
// ]
// const other = [
//   {name:"Photoshop", rating: 7.5},
//   {name:"Illustrator", rating: 4},
//   {name:"Clip Studio Paint", rating: 4},
// ]

const languages = ["Javascript", "Python"];
const frontEnd = ["React", "React Native", "HTML", "CSS", "Redux"];
const backEnd = ["Node.js", "Express", "MongoDb", "SQL"];
const uxui = ["Photoshop", "Illustrator", "Clip Studio Paint"];
const other = ["Git"];

const ETLearnAbout = ["C#", ".Net", "Java", "Kotlin", "PHP"];

const AboutTech = () => {
  return (
    <div className="bottom">
      <div className="exp">
        <h2 className=" center exp-title">Tech</h2>
      </div>

      <div className="exp-container">
        <div className="exp-grid">
          <div className="small-grid-unit">
            <div className="sub-subtitle">Skills</div>
          </div>
        </div>

        <div className="exp-grid">
          <div className="small-grid-unit"></div>
          <div className="flx">
            <div className="exp-item list-grid">
              <AboutTechLevel tech={languages} category={"Languages"} />
              <AboutTechLevel tech={frontEnd} category={"Front-End"} />
              <AboutTechLevel tech={backEnd} category={"Back-End"} />
              <AboutTechLevel tech={uxui} category={"Ux/Ui"} />
              <AboutTechLevel tech={other} category={"Other"} />
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
  );
};
export default AboutTech;
