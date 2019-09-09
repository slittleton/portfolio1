import React from 'react';


const AboutEducation = () =>{
  return(
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
  )
}

export default AboutEducation