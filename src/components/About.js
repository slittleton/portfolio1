import React from "react";
import profilepic from "../img/blot1-about.png";
import "../css/about.css";
import AboutEntry from "./layout/AboutEntry";
import AboutEducation from "./AboutEducation";
import AboutTech from "./AboutTech";
import Resume from "./Resume";

const job1 = {
  title: "Creepy Hollow Designs",
  date: "2013 - 2019",
  webLink: "https://www.amazon.com/handmade/Creepy-Hollow-Designs",
  jobTitle: "Owner, Technical Support, Graphic Designer",
  jobDescription:
    "Primarily engaged in designing graphics, customer support, product customization, and tech support",
  jobDetails: [
    "Created, updated, and maintained all web content on multiple ecommerce platforms",
    "Illustrated and designed customized graphics for handmade jewelry and accessories",
    "Spearheaded and executed brand development and marketing collateral including company logo, digital advertisements and banners",
    "Oversaw and managed all business operations and decision making as well as customer support, vendor/supplier negotiations and ordering"
  ]
};
const job2 = {
  title: "Freelance Web Development",
  date: "2018 - 2019",
  webLink: "slittleton.com",
  jobTitle: "Web Developer",
  jobDescription:
    "Continue to develop applications rangin from Front End, Back End, Mobile",
  jobDetails: [
    "Demonstrated end-to-end ownership of development for front-end and full stack applications including mobile apps and websites",
    "Drove technical and visual design of mobile apps that are available on Google Play",

  ]
};

const About = React.forwardRef((props, aboutRef) => {
  return (
    <div ref={aboutRef}>
      <div className="spacer-container small-padtop text">
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
              <AboutEntry jobInfo={job2} />
              <AboutEntry jobInfo={job1} />
            </div>

            <AboutEducation />
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
