import React from "react";

import "./OurServices2.css";
const OurServices2 = ({ title, icon }) => {
  return (
    <div className="services2">
      <i className={icon}></i>
      <p>{title}</p>
      <p className="para">
        I'm a paragraph. Click here to add your own text and edit me.
      </p>
    </div>
  );
};

export default OurServices2;
