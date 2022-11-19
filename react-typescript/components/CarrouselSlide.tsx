import React from "react";
import Link from "next/link";
import { JsonData } from "../types";

interface CarrouselSlideProps {
  data: JsonData;
  sliderClass: string;
}

const CarrouselSlide = ({ data, sliderClass }: CarrouselSlideProps) => {
  const textColor = { color: data.textColor };

  return (
    <div
      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img`}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12 ml-auto">
            <div className="slider-content-2 slider-animated-1">
              <h3 className="animated no-style" style={textColor}>
                {data.title}
              </h3>
              <h1
                className="animated"
                style={textColor}
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <div className="slider-btn slider-btn--style2 btn-hover">
                <Link
                  className="animated rounden-btn"
                  href={data.link}
                  style={textColor}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrouselSlide;
