import React, { useState, useEffect } from "react";
import ContactForm from "./forms/ContactForm";
const Contact = () => {
  return (
    <div className="contact">
      <div className="title-wrapper">
        <div className="title-dark">CONTACT</div>
      </div>
      <div className="contact-info">
        <div className="subtitle contact-type">Email: </div>
        <a href="https://mail.google.com" className="a-link">
          littletonse@gmail.com
        </a>
        <div className="subtitle contact-type">Github: </div>
        <a href="https://github.com/slittleton" className="a-link">
          slittleton
        </a>
        <div className="subtitle contact-type">LinkedIn: </div>
        <a
          href="https://www.linkedin.com/in/scott-littleton-1a1246161/"
          className="a-link"
        >
          littletonse@gmail.com
        </a>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
