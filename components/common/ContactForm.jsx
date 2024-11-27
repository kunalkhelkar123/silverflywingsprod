
'use client'


import React, { useRef } from "react";
import emailjs from '@emailjs/browser'


const ContactForm = () => {

  const formRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending email...");

    emailjs
      .sendForm(
        "service_uwxmzvg", // Replace with your EmailJS service ID
        "template_vjq0qhc", // Replace with your EmailJS template ID
        formRef.current,
        "ODBNNUVuot9wouu5B" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email.");
        }
      );
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    // handle form submission logic here
  // };

  return (

    <div className="contact-form">
      <form ref={formRef}  className="row y-gap-20 pt-20" onSubmit={handleSubmit}>

    {/* <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}> */}
      <div className="col-12">
        <div className="form-input">
          <input type="text"
                 name="name"
                 placeholder=" Full Name"     
                      
          id="name" required />
          {/* <label htmlFor="name" className="lh-1 text-16 text-light-1">
            Full Name
          </label> */}
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="email" 
                  name="email"
                  placeholder=" Email" 
          
          id="email" required />
          {/* <label htmlFor="email" className="lh-1 text-16 text-light-1">
            Email
          </label> */}
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="text"
                name="subject"
                placeholder="Subject" 


          id="subject" required />
          {/* <label htmlFor="subject" className="lh-1 text-16 text-light-1">
            Subject
          </label> */}
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea id="message" 
                    name="message"
                    placeholder=" Your Message" 
          
          required rows="4"></textarea>
          {/* <label htmlFor="message" className="lh-1 text-16 text-light-1">
            Your Message
          </label> */}
        </div>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
      
    </form>
    </div>
  );
};

export default ContactForm;
