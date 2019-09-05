import React, { useState, useEffect } from "react";
import ContactForm from "./forms/ContactForm";
const Contact = () => {
  return (
    <div className="contact">
      <div className="title-wrapper">
        <div className="title-dark">CONTACT</div>
      </div>
      <div className="contact-container">
        <div className="contact-methods">
          <div className="contact-info">
            <div className=" contact-type">Email: </div>
            <div className="link-wrapper">
              <a href="https://mail.google.com" className="contact-link">
                littletonse@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-info">
            <div className=" contact-type">Github: </div>
            <div className="link-wrapper">
              <a href="https://github.com/slittleton" className="contact-link">
                slittleton
              </a>
            </div>
          </div>

          <div className="contact-info">
            <div className=" contact-type">LinkedIn: </div>
            <div className="link-wrapper">
              <a
                href="https://www.linkedin.com/in/scott-littleton-1a1246161/"
                className="contact-link"
              >
                littletonse@gmail.com
              </a>
            </div>
          </div>
          
        </div>
        <ContactForm />
        <div>
        
        </div>
        
      </div>

    </div>
  );
};

export default Contact;
