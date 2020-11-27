import React from "react";

import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="villian">
        <h1>CONTACT US</h1>
        <form action="">
          <div className="hero">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Message" className="message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
