import React from "react";

const Contact = React.forwardRef((props, contactRef) => {

  return (
    <div ref={contactRef}>

      <div className="contact">
        <div className="title-wrapper">
          <div className="title-dark">CONTACT</div>
        </div>
        <div className="contact-container">
          <div className="contact-methods">
            <div className="contact-info">
              <div className="link-wrapper">
                <a href="mailto:slittletondev@gmail.com" className="contact-link icon-style">
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
                  <i className="fab fa-github fa-2x icon-style"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/scott-littleton-1a1246161/"
                  className="contact-link"
                >
                  <i className="fab fa-linkedin-in fa-2x icon-style" style={{verticalAlign:'center'}}></i>
                </a>
              </div>
            </div>
          </div>
          
          <div></div>
        </div>
      </div>
    </div>
  );
})

export default Contact;
