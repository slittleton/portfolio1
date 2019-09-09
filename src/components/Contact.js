import React, { useState, useEffect } from "react";
import ContactForm from "./forms/ContactForm";
import Menu from "./layout/Menu";
const Contact = () => {
  return (
    <div>
      <Menu/>
      <div className="contact">
        <div className="title-wrapper">
          <div className="title-dark">CONTACT</div>
        </div>
        <div className="contact-container">
          <div className="contact-methods">
            <div className="contact-info">
              <div className="link-wrapper">
                <a href="mailto:https://mail.google.com" className="contact-link icon-style">
                  slittletondev@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-info">
              
              <div className="link-wrapper">
                <a
                  href="https://github.com/slittleton"
                  className="contact-link"
                >
                  <i class="fab fa-github fa-2x icon-style"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/scott-littleton-1a1246161/"
                  className="contact-link"
                >
                  <i class="fab fa-linkedin-in fa-2x icon-style" style={{verticalAlign:'center'}}></i>
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
