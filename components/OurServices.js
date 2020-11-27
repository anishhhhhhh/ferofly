import React from "react";

import OurServices2 from "./OurServices2";
import "./OurServices.css";
const OurServices = () => {
  return (
    <div className="OurServices">
      <div className="head">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="content">
        <div className="firstRow">
          <OurServices2 icon="fas fa-bacon" title="Breakfast" />
          <OurServices2 icon="fas fa-utensils" title="Garden" />
          <OurServices2 icon="fas fa-swimming-pool" title="Pool" />
        </div>
        <div className="secondRow">
          <OurServices2 icon="fas fa-wifi" title="Free WIFI" />
          <OurServices2 icon="fas fa-house-damage" title="Daily Housekeeping" />
          <OurServices2
            icon="fab fa-servicestack"
            title="In-Room Dining Service"
          />
        </div>
      </div>

      <h1>GALLERY</h1>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="Images/View.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Images/hotel.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Images/sun.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default OurServices;
