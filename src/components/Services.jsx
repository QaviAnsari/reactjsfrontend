import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/5.jpg";
import img2 from "../assets/7.jpg";

const Services = () => {
  return (
    <div>
      <Carousel  infiniteLoop
        autoPlay  showStatus={false}
 showThumbs={false}       interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Web Designing </p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">web developement and designing Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
