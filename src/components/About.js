import React, { useState, useEffect } from "react";
import profilepic from "../img/blot1-about.png";
import "../css/about.css";
import Menu from "./layout/Menu";

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
            <h2 className=" center exp-title">Experience</h2>
          </div>

          <div className="exp-container">
            <div className="exp-grid">
              <div className="small-grid-unit">
                <div className="subsubtitle">Lorem</div>
                <div className="date">8/31/2019 - 8/31/2019</div>
                <a href="/" className="atag">
                  optionalweblink
                </a>
              </div>
              <div className="">
                <p className="subtitle exp-subtitle">Lorem, ipsum dolor.</p>
                <p className="exp-item">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  similique consectetur. Magnam aliquam laudantium officia quae
                  atque cumque corporis voluptates.
                </p>
                <ul className="exp-ul">
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo, numquam.
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo, numquam.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="exp-container">
            <div className="exp-grid">
              <div className="small-grid-unit">
                <div className="subsubtitle">Lorem</div>
                <div className="date">8/31/2019 - 8/31/2019</div>
                <a href="/" className="atag">
                  optionalweblink
                </a>
              </div>
              <div className="">
                <p className="subtitle exp-subtitle">Lorem, ipsum dolor.</p>
                <p className="exp-item">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  similique consectetur. Magnam aliquam laudantium officia quae
                  atque cumque corporis voluptates.
                </p>
                <ul className="exp-ul">
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo, numquam.
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo, numquam.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
