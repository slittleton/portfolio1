import React, { useState } from "react";
import resume from "../resumeV4.2.docx";

const Resume = () => {
  // FOR PDF RESUME
  // const [show, setShow] = useState(false);
  // const showResume = () =>{
  //   if(show){
  //     return(
  //       <div className="resume-container">
  //         <embed src={resume} width="900px" height="1200px" className="resume-doc"/>
  //       </div>
  //     )
  //   }else {return null}
  // }
  //   return (
  //     <div className="resume">
  //       <button className="resume-link" onClick={()=>setShow(!show)}>Résumé</button>

  //       {showResume()}
  //     </div>
  //   );
  // };

  // FOR WORD DOC RESUME
  return (
    <div className="resume">
      <a
        className="resume-link"
        href={resume}
        style={{ textDecoration: "none" }}
      >
        Résumé
      </a>
    </div>
  );
};

export default Resume;
