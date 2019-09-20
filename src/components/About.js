import React from "react";
import profilepic from "../img/blot1-about.png";
import "../css/about.css";
import AboutEntry from "./layout/AboutEntry";
import AboutEducation from "./AboutEducation";
import AboutTech from "./AboutTech";
import Resume from './Resume';

const job1 = {
  title: "Creepy Hollow Designs",
  date: "2013 - 2019",
  webLink: "https://www.amazon.com/handmade/Creepy-Hollow-Designs",
  jobTitle: "Graphic Designer, Tech Support, Manager",
  jobDescription:
    "I was primarily engaged in designing graphics, customer support, product customization, and tech support",
  jobDetails: [
    "Graphic Design - Designed large portion of the companies graphics for use in everything from products to logos, banners, advertisements, etc",
    "Product Creation - The nature of the company required creating products that could be generalized with a wide variety of designs and options. More specifically, jewlery with bezel attachments that have images in them",
    "Customer Support - Handled every type of customer issue ranging from creating custom product designs to handling billing, shipping, returns and generally anything customers might need",
    "Tech Support - eCommerce website maintenance and improvement, handled all tech related issue, if needed to be fixed, updated, renewed, or otherwise improved",
    "Supply Coordination and Purchase - Applied fractional reserve principles to supply. Negotiated with overseas and local suppliers for materials including customized batches from manufacturers.",
    "Company Management - Involved in virtually all management level decision making."
  ]
};

const About = React.forwardRef((props, aboutRef) => {
  return (
    <div ref={aboutRef}>
      <div className="spacer-container">
        <div className="about">
          <div className="top">
            <div className="top-container">
              <div className="left-side">
                <img src={profilepic} alt="" className="profile-img" />
              </div>
              <div className="right-side">
                <div className="title about-title">ABOUT</div>
                <div className="text">
                  My name is Scott Littleton. I have a background that ranges
                  from studying a variety of social sciences to running a small
                  business to teaching myself to code. I have found what I enjoy
                  most is working with and learning about technology to build
                  things.
                </div>
              </div>
            </div>
          </div>

          <AboutTech />

          <div className="bottom">
            <div className="exp">
              <h2 className=" center exp-title">Experience</h2>
            </div>

            <div className="experience-type">
              <AboutEntry jobInfo={job1} />
            </div>

            <AboutEducation />
            <Resume/>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
