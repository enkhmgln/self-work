"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = (props) => {
  return (
    <Slide
      slidesToScroll={1}
      slidesToShow={1}
      indicators={true}
      autoplay={true}
      duration={1000}
    >
      <div
        style={{
          textAlign: "center",
          background: "blue",
          padding: "200px 0",
          fontSize: "30px",
        }}
      >
        Sixth Slide
      </div>
      <div
        style={{
          textAlign: "center",
          background: "indigo",
          padding: "200px 0",
          fontSize: "30px",
        }}
      >
        Seventh Slide
      </div>
      <div
        style={{
          textAlign: "center",
          background: "violet",
          padding: "200px 0",
          fontSize: "30px",
        }}
      >
        Eight Slide
      </div>
    </Slide>
  );
};

export default ImageSlider;
