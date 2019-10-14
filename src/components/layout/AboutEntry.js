import React from "react";

const AboutEntry = props => {
  const { title, date, webLink, jobTitle, jobDescription, jobDetails } = props.jobInfo;

  return (
    <div className="exp-container">
      
      <div className="exp-grid">
      
        <div className="small-grid-unit">
        
          <div className="jobtitle small-padtop">{title}</div>
          <div className="date">{date}</div>
          {webLink ? (
            <a href={webLink} className="atag">
              {title}
            </a>
          ) : null}
        </div>
        <div className="">
          <p className="subtitle exp-subtitle">Title: {jobTitle}</p>
          <p className="exp-item">{jobDescription}</p>
          <ul className="exp-ul">
            {jobDetails.map((detail,index) => {
              return <li key={index}>{detail}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AboutEntry;
