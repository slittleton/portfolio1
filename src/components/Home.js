import React from "react";
import logo2 from "../img/logo2.png";
import blot1 from "../img/blot1-c.png";
import blot2 from "../img/blot2-c.png";
import blot2back from "../img/blot2-back.png";
import blot3 from "../img/blot3-c.png";
import blot1Back from "../img/blot1-about.png";
import blot3Back from "../img/blot3-contact.png";
import CardFlip from "../components/layout/CardFlip";

const Home = React.forwardRef((props, homeRef) => {
  const { navClick, projectsRef, aboutRef, contactRef } = props;
  return (
    <div className="center" ref={homeRef}>
      <div className="flx center home">
        <img src={logo2} alt="Logo" className="logo blot-main" />
      </div>

      <div className="banner">
        <div className="subtitle">Hi my name is Scott.</div>
        <div className="subtitle">I'm a web developer in Glendale Arizona.</div>
      </div>

      <div className="flex-menu small-pad center img-back">
        <div className="flex-menu-item small-pad blot">
          <div onClick={() => navClick(aboutRef)} className="link">
            <CardFlip
              image1={blot1}
              image2={blot1Back}
              title1="ABOUT"
            ></CardFlip>
          </div>
        </div>
        <div className="flex-menu-item small-pad blot">
          <div onClick={() => navClick(projectsRef)} className="link ">
            <CardFlip
              image1={blot2}
              image2={blot2back}
              title1="PROJECTS"
            ></CardFlip>
          </div>
        </div>
        <div className="flex-menu-item small-pad blot">
          <div onClick={() => navClick(contactRef)} className="link">
            <CardFlip image1={blot3} image2={blot3Back} title1="CONTACT" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
