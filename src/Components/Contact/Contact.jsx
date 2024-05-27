import React from "react";
import "./Contact.css";
import walmart from "../../assets/walmart.png";
import facebook from "../../assets/facebook.png";
import microsoft from "../../assets/microsoft.png";
import adobe from "../../assets/adobe.png";
import facebook_icon from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="clients">
        <h1>My Clients</h1>
        <p>
          I have had the opportunity to work with a diverse group of companies.
          some of the notable companies i have worked with includes.
        </p>
        <div className="client-images">
          <img src={walmart} alt="" className="client-image" />
          <img src={facebook} alt="" className="client-image" />
          <img src={adobe} alt="" className="client-image" />
          <img src={microsoft} alt="" className="client-image" />
          <img src={walmart} alt="" className="client-image" />
        </div>
      </div>
      <div className="contact" id="contact">
        <h1>Contact Me</h1>
        <p>Please fill out this form below to discuss any work opportunities</p>
        <form className="contact-form">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            cols="4"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button className="submit-btn">Submit</button>
        </form>
        <div className="contact-icons">
            <img src={facebook_icon} alt="" className="contact-icon"/>
            <img src={instagram} alt="" className="contact-icon"/>
            <img src={twitter} alt="" className="contact-icon"/>
            <img src={youtube} alt="" className="contact-icon"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
