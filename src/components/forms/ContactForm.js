import React, { useState } from "react";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { name, email, message } = values;

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} className="form" >
        <div className="form-control flx">
          <div className="label-container">
            <label htmlFor="name" className="form-subtitle">
              Name
            </label>
          </div>
          <input
            type="text"
            className="form-field"
            onChange={handleChange("name")}
            name="name"
            value={name}
          />
        </div>
        <div className="form-control flx">
          <div className="label-container">
            <label htmlFor="email" className="form-subtitle">
              Email
            </label>
          </div>

          <input
            type="email"
            className="form-field"
            onChange={handleChange("email")}
            name="email"
            value={email}
          />
        </div>
        <div className="form-control flx">
          <div className="label-container">
            <label htmlFor="message" className="form-subtitle">
              Message
            </label>
          </div>

          <textarea
            rows="8"
            cols="50"
            type="text"
            name="message"
            value={message}
            onChange={handleChange("message")}
            className="form-msg-field "
            placeholder="Please enter a message"
          />
        </div>
        <div className="form-btn">
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
