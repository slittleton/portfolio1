import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo3 from "../img/logo3.png";
import blot1 from "../img/blot1.png";
import blot2 from "../img/blot2.png";
import blot3 from "../img/blot3.png";

const Home = () => {
  return (
    <div className="home center">
      <div className="flx center">
        <img src={logo3} alt="Logo" className="logo" />
      </div>

      <div className="banner">
        <div className="text-title">Hi my name is Scott.</div>
        <div className="text-title">
          I'm a webdeveloper in Glendale Arizona.
        </div>
      </div>

      <div className="flex-menu flx small-pad center">
        <div className="flex-menu-item small-pad">
          <div className="flx center">
            <img src={blot1} alt="Logo" className="logo" />
          </div>
          <Link to="/about" className="link">
            About
          </Link>
        </div>
        <div className="flex-menu-item small-pad">
          <div className="flx center">
            <img src={blot2} alt="Logo" className="logo" />
          </div>
          <Link to="/projects" className="link">
            Projects
          </Link>
        </div>
        <div className="flex-menu-item small-pad">
          <div className="flx center">
            <img src={blot3} alt="Logo" className="logo" />
          </div>
          <Link to="/contact" className="link">
            Contact
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
    </div>
  );
};

export default Home;
