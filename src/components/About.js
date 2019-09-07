import React, { useState, useEffect } from "react";
import profilepic from "../img/blot1-about.png";
import "../css/about.css";
import Menu from "./layout/Menu";
import AboutEntry from "./layout/AboutEntry";
const job1 = {
  title: "Creepy Hollow Designs",
  date: "2013 - 2019",
  webLink: "https://www.amazon.com/handmade/Creepy-Hollow-Designs",
  jobTitle: "Graphic Designer, Tech Support, Manager",
  jobDescription:
    "I was primarily engaged in designing graphics, customer support, product customization, and tech support",
  jobDetails: [
    "Graphic Design - Designed large portion of the companies graphics for use in everything from products to logos, banners, advertisements, etc",
    "Product Creation - The nature of the company requied creating products that could be generalized with a wide variety of designs and options. More specifically, jewlery with bezel attachments that have images in them",
    "Customer Support - Handled every type of customer issue ranging from creating custom product designs to handling billing, shipping, returns and generally anything customers might need",
    "Tech Support - Ecommerce website maintenence and improvement, handled all tech related issue, if needed to be fixed, updated, renewed, or otherwise improved",
    "Supply Coordination and Purchase - Applied fractional reserve principles to supply. Negotiated with overseas and local suppliers for materials including customized batches from manufacturers.",
    "Company Management - Involved in virtually all management level decisionmaking."
  ]
};
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
  "JOI"
];
const ETLearnAbout = [
  "C#",
  ".Net",
  "Java",
  "Kotlin",
  "PHP"
]

const About = () => {
  return (
    <div>
      <Menu />
      <div className="about">
        <div className="top">
          <div className="top-container">
            <div className="left-side">
              <img src={profilepic} alt="" className="profile-img" />
            </div>
            <div className="right-side">
              <div className="title about-title">ABOUT</div>
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quos, illo commodi facilis voluptates modi
                necessitatibus. Vero cum odit eligendi cupiditate aspernatur sit
                ex molestias, ipsam praesentium laboriosam quo cumque ipsa
                assumenda libero natus accusantium enim temporibus ducimus!
                Eius, et at? Sapiente et odio id dolorum aspernatur asperiores
                deleniti voluptatibus corrupti officia quaerat? Placeat totam,
                sed cumque quos deleniti, ratione, aut illum ullam esse in
                nesciunt distinctio rerum vero cum ipsam! Eaque, veniam rerum at
                nihil perspiciatis voluptatibus eveniet quibusdam Similique.
              </div>
            </div>
          </div>
        </div>
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
                      return <li className="grid-list-item" key={index}>{item}</li>;
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
                      return <li className="grid-list-item" key={index}>{item}</li>;
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
                      return <li className="grid-list-item" key={index}>{item}</li>;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="exp">
            <h2 className=" center exp-title">Experience</h2>
          </div>

          <div className="experience-type">
            <AboutEntry jobInfo={job1} />
          </div>

          {/* EDUCATION */}
          <div className="exp-container">
            <div className="exp-grid">
              <div className="small-grid-unit">
                <div className="sub-subtitle">Education</div>
              </div>
            </div>

            <div className="exp-grid">
              <div className="small-grid-unit">
                <div className="subsubtitle">
                  Cal State University Fullerton
                </div>
                <div className="date">Attended: 8/31/2010 - 8/31/2013</div>
              </div>
              <div className="flx">
                <p className="exp-item subsubtitle">
                  M.A. Biological Anthropology
                </p>
              </div>
            </div>

            <div className="exp-grid">
              <div className="small-grid-unit">
                <div className="subsubtitle">Arizona State University</div>
                <div className="date">Attended: 2004 - 2008</div>
              </div>
              <div className="">
                <p className="exp-item subsubtitle">B.A. Political Science</p>
                <p className="exp-item subsubtitle">B.A. Philosophy</p>
              </div>
            </div>

            <div className="exp-grid">
              <div className="small-grid-unit">
                <div className="subsubtitle">Yavapai Community College</div>
                <div className="date">Attended: 2001 - 2004</div>
              </div>
              <div className="flx">
                <p className="exp-item subsubtitle">A.S. General Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
