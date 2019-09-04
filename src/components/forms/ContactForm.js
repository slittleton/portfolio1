import React,{useState} from 'react';

const ContactForm = () =>{
  const [values, setValues] = useState({
    name: '',
    email:'',
    message:'',
  })

  return(
    <div>Contact Form</div>
  )
}

export default ContactForm;