import React,{useState} from "react";
import resume from "../resumeV2.pdf";

const Resume = () => {
  const [show, setShow] = useState(false);

const showResume = () =>{
  if(show){
    return(
      <div className="resume-container">
        <embed src={resume} width="900px" height="1200px" className="resume-doc"/>
      </div>
    )
  }else {return null}
}
  return (
    <div className="resume">
      <button className="resume-link" onClick={()=>setShow(!show)}>Résumé</button>

      {showResume()}
    </div>
  );
};

export default Resume;
