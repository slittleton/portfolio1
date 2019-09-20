import React from 'react';
import "../../css/cardFlip.css";

const CardFlip = (props) => {

  return (
    <div className="card container">

    <div class="front title-box">
      <img src={props.image1} alt="" className="imgfront" />
      <div className="card-flip-title">{props.title1}</div>
    </div>


    <div class="back">
        <img src={props.image2} alt="" className="imgfront" />
        <div className="card-flip-title2">{props.title2}</div>
        {props.children}
    </div>

  </div>
  )
}



export default CardFlip;