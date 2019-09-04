import React,{useState,useEffect} from 'react';
import ContactForm from './forms/ContactForm';
const Contact = () => {

  return(
    <div className="contact">
      <div className="title-wrapper">
        <div className="title-dark">CONTACT</div>
      </div>

      <ContactForm/>
    </div>
  )
}

export default Contact;