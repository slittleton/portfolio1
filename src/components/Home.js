import React, { useState, useEffect } from "react";
import {Link}from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="text-title">Hi my name is Scott.</div>
        <div className="text-title">
          I'm a webdeveloper in Glendale Arizona.
        </div>
      </div>

      <div className="flex-menu flx small-pad center">
        <div className="flex-menu-item small-pad "><Link to="/about" className="link">About</Link></div>
        <div className="flex-menu-item small-pad"><Link to="/projects"className="link">Projects</Link></div>
        <div className="flex-menu-item small-pad"><Link to="/contact"className="link">Contact</Link></div>
      </div>

      <div className="soc-media">
        <div className="soc-media-icon"><i>Icon</i></div>
        <div className="soc-media-icon"><i>Icon</i></div>
        <div className="soc-media-icon"><i>Icon</i></div>
      </div>
    </div>
  );
};

export default Home;
