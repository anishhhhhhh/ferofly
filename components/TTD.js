import React from "react";

import TTD2 from "./TTD2";
import "./TTD.css";
const TTD = () => {
  return (
    <div className="TTD">
      <div className="head">
        <h1>THINGS TO DO</h1>
      </div>
      <div className="content">
        <div className="firstRow1">
          <TTD2 icon="" title="Wineries Tour" />
          <TTD2 icon="" title="Cultural Sites" />
          <TTD2 icon="" title="Market Tour " />
        </div>
        <div className="secondRow1">
          <TTD2 icon="" title="Leisure Activities" />
          <TTD2 icon="" title="Birds Safari" />
          <TTD2 icon="" title="Horse Riding " />
        </div>
      </div>
      <div className="parall">
        <div className="rooms">
          <h1>GUEST REVIEW</h1>
          <p>
            “I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default TTD;
