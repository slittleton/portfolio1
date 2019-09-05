import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo2 from "../img/logo2.png";
import blot1 from "../img/blot1-c.png";
import blot2 from "../img/blot2-c.png";
import blot2back from "../img/blot2-back.png";
import blot3 from "../img/blot3-c.png";
import blot1Back from "../img/blot1-about.png";
import blot3Back from "../img/blot3-contact.png";
import CardFlip from "../components/layout/CardFlip";


const Home = () => {
  return (
    <div className="home center">
      <div className="flx center ">
        <img src={logo2} alt="Logo" className="logo blot-main" />
      </div>

      <div className="banner">
        <div className="subtitle">Hi my name is Scott.</div>
        <div className="subtitle">
          I'm a webdeveloper in Glendale Arizona.
        </div>
      </div>

      <div className="flex-menu flx small-pad center img-back">
        <div className="flex-menu-item small-pad blot">
          <Link to="/about" className="link">
            <CardFlip image1={blot1} image2={blot1Back} title1="ABOUT"></CardFlip>
          </Link>
        </div>
        <div className="flex-menu-item small-pad blot">
          <Link to="/projects" className="link ">
            <CardFlip
              image1={blot2}
              image2={blot2back}
              title1="PROJECTS"
            ></CardFlip>
          </Link>
        </div>
        <div className="flex-menu-item small-pad blot">
          <Link to="/contact" className="link">
            <CardFlip image1={blot3} image2={blot3Back} title1="CONTACT" />
          </Link>
        </div>
      </div>

      <div className="soc-media">
        <div className="soc-media-icon">
          <i>Icon</i>
        </div>
        <div className="soc-media-icon">
          <i>Icon</i>
        </div>
        <div className="soc-media-icon">
          <i>Icon</i>
        </div>
      </div>
      <footer><p>©2019 Scott Littleton</p></footer>
    </div>
  );
};

export default Home;
