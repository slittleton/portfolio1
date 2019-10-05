import React from 'react';


const AboutEducation = () =>{
  return(
    <div className="exp-container text">
    <div className="exp-grid">
      <div className="small-grid-unit">
        <div className="sub-subtitle">Education</div>
      </div>
    </div>

    <div className="exp-grid small-padtop">
      <div className="small-grid-unit">
        <div className="education-title">
          Cal State University Fullerton
        </div>
        <div className="date">Attended: 8/31/2010 - 8/31/2013</div>
      </div>
      <div className="flx">
        <p className="exp-item education-subtitle">
          M.A. Biological Anthropology
        </p>
      </div>
    </div>

    <div className="exp-grid small-padtop">
      <div className="small-grid-unit">
        <div className="education-title">Arizona State University</div>
        <div className="date">Attended: 2004 - 2008</div>
      </div>
      <div className="">
        <p className="exp-item education-subtitle">B.A. Political Science</p>
        <p className="exp-item education-subtitle">B.A. Philosophy</p>
      </div>
    </div>

    <div className="exp-grid small-padtop">
      <div className="small-grid-unit">
        <div className="education-title">Yavapai Community College</div>
        <div className="date">Attended: 2001 - 2004</div>
      </div>
      <div className="flx">
        <p className="exp-item education-subtitle">A.S. General Science</p>
      </div>
    </div>
  </div>
  )
}

export default AboutEducation